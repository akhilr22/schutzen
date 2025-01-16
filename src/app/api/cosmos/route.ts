/* eslint-disable @typescript-eslint/no-unused-vars */
import { addDocument, Document } from "../../lib/cosmos";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  debugger;
  const { name, email, phone, resumeUrl, coverLetterUrl } = await req.json();

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  try {
    const document: Document = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      resumeUrl,
      coverLetterUrl,
      createdAt: new Date(),
    };

    const result = await addDocument(document);

    NextResponse.json({ message: "Document added successfully", result }, { status: 200 });
  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Error adding document" }, { status: 500 });
  }
  NextResponse.json({ message: "Document added successfully okay" }, { status: 200 });
}
