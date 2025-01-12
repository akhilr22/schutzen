/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from "next";

import multer from "multer";
import path from "path";
import fs from "fs";
import { Readable } from 'stream';
import { db } from "../../Firebase/config";




// Configure Multer to save files to a local directory
const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      const uploadDir = path.join(process.cwd(), "uploads");
      // Ensure the upload directory exists
      if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir, { recursive: true });
      }
      cb(null, uploadDir);
    },
    filename: (req, file, cb) => {
      // Generate a unique filename
      const timestamp = Date.now();
      const uniqueName = `${timestamp}-${file.originalname}`;
      cb(null, uniqueName);
    },
  }),
});

// Middleware to handle Multer uploads
const uploadMiddleware = (_req: NextApiRequest, _res: NextApiResponse)=>{
    upload.single("resume");
} 

// Utility function to handle middleware in API routes

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: (req: NextApiRequest, res: NextApiResponse, callback: (result: Error | undefined) => void) => void) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: Error | undefined) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// Disable body parsing for file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: NextRequest) {
    const reqWithBody: any = {
        ...req,
        pipe: (stream: any) => {
          if (req.body instanceof Readable) {
            req.body.pipe(stream);
          } else {
            throw new Error('req.body is not a Node.js Readable stream');
          }
        },
        unpipe: () => {},
      };

  const res: any = {
    statusCode: 200,
    end: () => {},
  };

  try {
    // Run Multer middleware
    await runMiddleware(reqWithBody, res, uploadMiddleware);

    const file = reqWithBody.file; // File information from Multer
    if (!file) {
      return NextResponse.json({ success: false, message: "No file uploaded" }, { status: 400 });
    }
    const fileDetails = {
        filePath: `/uploads/${file.filename}`,
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        uploadTime: new Date(),
      };
      console.log(fileDetails)
  debugger
    return NextResponse.json({
      success: true,
      message: "File uploaded successfully",
      filePath: `/uploads/${file.filename}`,
    });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ success: false, message: "File upload failed" }, { status: 500 });
  }
}
