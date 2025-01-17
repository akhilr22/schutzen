/* eslint-disable @typescript-eslint/no-unused-vars */
import { sentMail } from "@/app/lib/sentmail";
import { addDocument, Document } from "../../lib/cosmos";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, phone, resumeUrl, coverLetterUrl } = await req.json();

  // Check for required fields
  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    // Create the document to be added to Cosmos DB
    const document: Document = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      resumeUrl,
      coverLetterUrl,
      createdAt: new Date(),
    };

    // Add the document to Cosmos DB
    const result = await addDocument(document);
    await sentMail(document);
    // Send success response
    return NextResponse.json({ message: "Document added successfully", result }, { status: 200 });
  } catch (error) {
    console.error(error);
    // Send error response
    return NextResponse.json({ message: "Error adding document",error }, { status: 500 });
  }
}
