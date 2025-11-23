// file: index.mjs (or index.js if you remove "type": "module")
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
import { LambdaClient, InvokeCommand } from "@aws-sdk/client-lambda";

const dynamo = new DynamoDBClient({});
const lambda = new LambdaClient({});

const TABLE_NAME = process.env.STORAGE_FREEBETAAPPLICATIONS_NAME;
const SCRAPER_FUNCTION_NAME = process.env.SCRAPER_FUNCTION_NAME;

export const handler = async (event) => {
  try {
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

    if (!companyName || !businessEmail || !websiteUrl) {
      return {
        statusCode: 400,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({ error: "Missing required fields" }),
      };
    }

    // 1) Save to DynamoDB
    const putCmd = new PutItemCommand({
      TableName: TABLE_NAME,
      Item: {
        businessEmail: { S: businessEmail },
        companyName: { S: companyName },
        websiteUrl: { S: websiteUrl },
        companyRegisteredIn: { S: companyRegisteredIn || "N/A" },
        customerRegions: { S: JSON.stringify(customerRegions || []) },
        userDataTypes: { S: JSON.stringify(userDataTypes || []) },
        usesCookies: { S: usesCookies || "N/A" },
        dataSharedWithThirdParties: { S: dataSharedWithThirdParties || "N/A" },
        usingAI: { S: usingAI || "N/A" },
        hasPrivacyPolicy: { S: hasPrivacyPolicy || "N/A" },
        hasTerms: { S: hasTerms || "N/A" },
        previousAudit: { S: previousAudit || "N/A" },
        stage: { S: stage || "N/A" },
        industry: { S: industry || "N/A" },
        biggestConcern: { S: biggestConcern || "N/A" },
        wantFollowUp: { S: wantFollowUp || "N/A" },
        createdAt: { S: new Date().toISOString() },
      },
    });

    await dynamo.send(putCmd);

    // 2) Fire-and-forget scraping + AI pipeline
    const invokePayload = {
      form: {
        companyName,
        businessEmail,
        websiteUrl,
        companyRegisteredIn,
        customerRegions: customerRegions || [],
        userDataTypes: userDataTypes || [],
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
      },
    };

    await lambda.send(
      new InvokeCommand({
        FunctionName: SCRAPER_FUNCTION_NAME,
        InvocationType: "Event", // async
        Payload: Buffer.from(JSON.stringify(invokePayload)),
      })
    );

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error("Error in SaveApplication:", err);
    return {
      statusCode: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({ error: "Internal server error" }),
    };
  }
};
