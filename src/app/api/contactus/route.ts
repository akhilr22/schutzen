/* eslint-disable @typescript-eslint/no-unused-vars */
import { sentMail } from "@/app/lib/sentmail";
import { addDocument, Document } from "../../lib/contactUpload";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phoneNumber, companyName, country, preferredSolution } = await req.json();

  // Check for required fields
  if (!name || !email || !phoneNumber) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Create the document to be added to Cosmos DB
    const document: Document = {
      id: crypto.randomUUID(),
      name,
      email,
      phoneNumber,
      companyName, // Add appropriate value
      country, // Add appropriate value
      preferredSolution, // Add appropriate value
      createdAt: new Date(),
    };

    // Add the document to Cosmos DB
    const result = await addDocument(document);
    // await sentMail(document);

    // const ownerEmail = "info@schutzen.com"; // Replace with your email
    // const subject = "New Resume Submission";
    // const body = `
    //   A new resume has been submitted:
    //   Name: ${name}
    //   Email: ${email}
    //   Phone: ${phone}
    //   Resume: ${resumeUrl}
    //   Cover Letter: ${coverLetterUrl || "Not provided"}
    // `;

    // await sendEmail(ownerEmail, subject, body, "info@schutzen.com");

    // Send success response
    return NextResponse.json({ message: "Document added successfully", result }, { status: 200 });
  } catch (error) {
    console.error(error);
    // Send error response
    return NextResponse.json({ message: "Error adding document", error }, { status: 500 });
  }
}
