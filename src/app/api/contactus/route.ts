/* eslint-disable @typescript-eslint/no-unused-vars */
import { EmailClient } from "@azure/communication-email";
import { addDocument, Document } from "../../lib/contactUpload";
import { NextRequest, NextResponse } from "next/server";

// Validate environment variables at the start
const validateEnvironmentVariables = () => {
  const requiredEnvVars = ["TO_EMAIL_ADDRESS", "COMMUNICATION_SERVICES_CONNECTION_STRING"];
  const missingEnvVars = requiredEnvVars.filter((envVar) => !process.env[envVar]);

  if (missingEnvVars.length > 0) {
    throw new Error(`Missing required environment variables: ${missingEnvVars.join(", ")}`);
  }
};

// Generate HTML for the email
const generateEmailHTML = (data: Document): string => {
  return `
    <!DOCTYPE html>
    <html dir="ltr" xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta charset="UTF-8">
        <meta content="width=device-width, initial-scale=1" name="viewport">
        <style>
          body { font-family: 'Poppins', Arial, sans-serif; }
          .application-header { background-color: #0b5394; color: white; padding: 20px; border-radius: 30px; }
          .details-section { padding: 20px 40px; }
          .footer { background-color: #ffffff; border-radius: 0 20px 0 0; padding: 40px; }
        </style>
      </head>
      <body>
        <div class="application-header">
          <h1>New Application Received</h1>
        </div>
        <div class="details-section">
          <h2>Application Details</h2>
          <p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Phone: ${data.phoneNumber}</p>
          <p>Company Name: ${data.companyName}</p>
          <p>Country: ${data.country}</p>
          <p>Preferred Solution: ${data.preferredSolution}</p>
        </div>
      </body>
    </html>
  `;
};

// Initialize EmailClient singleton
let emailClient: EmailClient | null = null;
const getEmailClient = (): EmailClient => {
  if (!emailClient) {
    const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("Email service connection string is not configured");
    }
    emailClient = new EmailClient(connectionString);
  }
  return emailClient;
};

export async function POST(req: NextRequest) {
  try {
    validateEnvironmentVariables();

    const { name, email, phoneNumber, companyName, country, preferredSolution } = await req.json();

    // Check for required fields
    if (!name || !email || !phoneNumber) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Create the document to be added to Cosmos DB
    const document: Document = {
      id: crypto.randomUUID(),
      name,
      email,
      phoneNumber,
      companyName,
      country,
      preferredSolution,
      createdAt: new Date(),
    };

    // Add the document to Cosmos DB
    const result = await addDocument(document);

    // Prepare email message
    const emailMessage = {
      senderAddress: "DoNotReply@525e1565-7ad2-4298-a438-218458c02ca2.azurecomm.net",
      content: {
        subject: "Contact - New Contact Request Received",
        plainText: `New application received from ${document.name}`,
        html: generateEmailHTML(document),
      },
      recipients: {
        to: [{ address: process.env.TO_EMAIL_ADDRESS! }],
      },
    };

    // Send email
    const client = getEmailClient();
    const poller = await client.beginSend(emailMessage);
    await poller.pollUntilDone();

    return NextResponse.json({ message: "Document added successfully", result }, { status: 200 });
  } catch (error) {
    console.error("Error in POST function:", error);
    return NextResponse.json(
      { message: "Internal Server Error", error: error instanceof Error ? error.message : "Unknown error" },
      { status: 500 }
    );
  }
}