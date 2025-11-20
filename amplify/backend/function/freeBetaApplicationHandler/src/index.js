const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");

// Client will use the Lambda's region automatically
const client = new DynamoDBClient({});

exports.handler = async (event) => {
  try {
    // API Gateway sends the body as JSON string
    const body = JSON.parse(event.body || "{}");

    const {
      companyName,
      businessEmail,
      websiteUrl,
      companyRegisteredIn,
      customerRegions,
      userDataTypes,
      usesCookies,
      dataSharedWithThirdParties,
      usingAI,
      hasPrivacyPolicy,
      hasTerms,
      previousAudit,
      stage,
      industry,
      biggestConcern,
      wantFollowUp,
    } = body;

    if (!businessEmail || !companyName || !websiteUrl) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    const tableName = process.env.STORAGE_FREEBETAAPPLICATIONS_NAME;

    const cmd = new PutItemCommand({
      TableName: tableName,
      Item: {
        email: { S: String(businessEmail) },
        timestamp: { S: new Date().toISOString() },

        companyName: { S: String(companyName) },
        websiteUrl: { S: String(websiteUrl) },
        companyRegisteredIn: { S: String(companyRegisteredIn || "") },

        customerRegions: {
          S: JSON.stringify(customerRegions || []),
        },
        userDataTypes: {
          S: JSON.stringify(userDataTypes || []),
        },

        usesCookies: { S: String(usesCookies || "") },
        dataSharedWithThirdParties: {
          S: String(dataSharedWithThirdParties || ""),
        },
        usingAI: { S: String(usingAI || "") },

        hasPrivacyPolicy: { S: String(hasPrivacyPolicy || "") },
        hasTerms: { S: String(hasTerms || "") },
        previousAudit: { S: String(previousAudit || "") },

        stage: { S: String(stage || "") },
        industry: { S: String(industry || "") },
        biggestConcern: { S: String(biggestConcern || "") },
        wantFollowUp: { S: String(wantFollowUp || "") },
      },
    });

    await client.send(cmd);

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Lambda error:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
