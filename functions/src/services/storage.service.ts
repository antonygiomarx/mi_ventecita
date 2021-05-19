import { File } from "@google-cloud/storage";
import { storage } from "firebase-admin";

export class StorageService {
  async add(file: File) {
    const newFile = await storage().bucket().file(file.name).create();
    console.log(newFile);

    return newFile;
  }
}
