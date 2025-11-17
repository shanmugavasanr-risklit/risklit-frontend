import { NextResponse } from "next/server";
import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  region: process.env.APP_REGION || "eu-north-1", // fallback region
});

export async function POST(req: Request) {
  try {
    const { companyName, companyEmail, companyUrl } = await req.json();

    if (!companyName || !companyEmail || !companyUrl) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const cmd = new PutItemCommand({
      TableName: "FreeReportApplications",
      Item: {
        email: { S: companyEmail },
        companyName: { S: companyName },
        companyUrl: { S: companyUrl },
        timestamp: { S: new Date().toISOString() },
      },
    });

    await client.send(cmd);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error("❌ DynamoDB Error:", err);
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}
