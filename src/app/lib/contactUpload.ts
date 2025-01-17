import { CosmosClient } from "@azure/cosmos";

export interface Document {
  // Define the structure of your document here
  id: string;
  name: string;
  companyName: string;
  email: string;
  phoneNumber: string;
  country: string;
  preferredSolution: string;
  description?: string;

  createdAt: Date;

  // Add other fields as needed
}

export const addDocument = async (document: Document) => {
  const connectionString = process.env.AZURE_COSMOS_DB_CONNECTION_STRING as string;
  const client = new CosmosClient(connectionString);

  const database = client.database("schutzen");
  const container = database.container("contact");

  try {
    const { resource } = await container.items.create(document);
    return resource;
  } catch (error) {
    console.error("Error adding document to Cosmos DB:", error);
    return error;
  }
};
