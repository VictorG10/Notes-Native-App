import { database } from "./appwrite";

//1:21:06

const databaseService = {
  // List Documents
  async listDocuments(dbId, collectId) {
    try {
      const response = await database.listDocuments(dbId, collectId);
      return response.documents || [];
    } catch (error) {
      console.error("Error fetching documents", error.message);
      return { error: error.message };
    }
  },

  // Create Documents
  async createDocument(dbId, colId, data, id = null) {
    try {
      return await database.createDocument(dbId, colId, id || undefined, data);
    } catch (error) {
      console.error("Error creating document", error.message);
      return { error: error.message };
    }
  },

  // Update Document
  async updateDocument(dbId, colId, id, data) {
    try {
      return await database.updateDocument(dbId, colId, id, data);
    } catch (error) {
      console.error("Error updating document", error.message);
      return { error: error.message };
    }
  },

  // Delete Documents
  async deleteDocument(dbId, colId, id) {
    try {
      await database.deleteDocument(dbId, colId, id);
      return { success: true };
    } catch (error) {
      console.error("Error deleting document", error.message);
      return { error: error.message };
    }
  },
};

export default databaseService;
