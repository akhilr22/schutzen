import { EmailClient } from "@azure/communication-email";
import { NextRequest, NextResponse } from "next/server";

// Constants
const EMAIL_CONFIG = {
  SENDER: "DoNotReply@525e1565-7ad2-4298-a438-218458c02ca2.azurecomm.net",
  SUBJECT: "Careers - New Application Received",
} as const;

// Types
interface ApplicationData {
  name: string;
  email: string;
  phone: string;
  resumeUrl: string;
  coverLetterUrl?: string | null;
}

// Email template generator
function generateEmailHTML(data: ApplicationData): string {
  const coverLetterSection = data.coverLetterUrl && data.coverLetterUrl !== "null" 
    ? `CoverLetter: <a href="${data.coverLetterUrl}" target="_blank">See Cover Letter</a>`
    : '';

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
          <p>Phone: ${data.phone}</p>
          <p>Resume: <a href="${data.resumeUrl}" target="_blank">See Resume</a></p>
          ${coverLetterSection}
        </div>
      </body>
    </html>
  `;
}

// Email client singleton
let emailClient: EmailClient | null = null;

function getEmailClient(): EmailClient {
  if (!emailClient) {
    const connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    if (!connectionString) {
      throw new Error("Email service connection string is not configured");
    }
    emailClient = new EmailClient(connectionString);
  }
  return emailClient;
}

export async function POST(req: NextRequest) {
  try {
    // Input validation
    const data = await req.json() as ApplicationData;
    if (!data.name || !data.email || !data.phone || !data.resumeUrl) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const toEmailAddress = process.env.TO_EMAIL_ADDRESS;
    if (!toEmailAddress) {
      throw new Error("Recipient email address is not configured");
    }

    // Prepare email message
    const emailMessage = {
      senderAddress: EMAIL_CONFIG.SENDER,
      content: {
        subject: EMAIL_CONFIG.SUBJECT,
        plainText: `New application received from ${data.name}`,
        html: generateEmailHTML(data),
      },
      recipients: {
        to: [{ address: toEmailAddress }],
      },
    };

    // Send email
    const client = getEmailClient();
    const poller = await client.beginSend(emailMessage);
    await poller.pollUntilDone();

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error('Email sending failed:', error);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    return NextResponse.json(
      { error: "Failed to send email", details: errorMessage },
      { status: 500 }
    );
  }
}