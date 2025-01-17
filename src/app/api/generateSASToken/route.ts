import { generateBlobSASQueryParameters, BlobSASPermissions, StorageSharedKeyCredential } from "@azure/storage-blob";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    console.log('containerName, blobName')
    
    const { containerName, blobName } = await req.json();

  if (!containerName || typeof containerName !== "string" || !blobName || typeof blobName !== "string") {
    return NextResponse.json({ error: "Invalid container or blob name" },{status:400});
  }

  try {
    const accountName = process.env.AZURE_STORAGE_ACCOUNT_NAME!;
    const accountKey = process.env.AZURE_STORAGE_ACCOUNT_KEY!;

    const sharedKeyCredential = new StorageSharedKeyCredential(accountName, accountKey);
    const sasOptions = {
      containerName,    
      blobName,
      permissions: BlobSASPermissions.parse("racw"), // Read, Add, Create, Write permissions
      startsOn: new Date(),
      expiresOn: new Date(new Date().valueOf() + 3600 * 1000), // 1 hour validity
    };

    const sasToken = generateBlobSASQueryParameters(sasOptions, sharedKeyCredential).toString();

    const url = `https://${accountName}.blob.core.windows.net/${containerName}/${blobName}?${sasToken}`;
    // res.status(200).json({ sasToken, url });
    return NextResponse.json({ sasToken ,url}, { status: 200 });

  } catch (error) {
    console.error(error);
    NextResponse.json({ error: "Failed to generate SAS token" },{status:500});
  }
}
