import { Request, Response, Router as StorageController } from "express";
import authMiddleware from "../middlewares/auth.middleware";
import { StorageService } from "../services/storage.service";

const storageController = StorageController();

storageController.post(
  "/addFile",
  authMiddleware,
  async (req: Request, res: Response) => {
    try {
      const { keys, values } = req.body as FormData;
      console.log(keys.name, values);

      const storageService = new StorageService();

      const newFile = await storageService.add(values().next().value);

      return res.json({
        success: true,
        message: "File Added",
        downloadUrl: newFile,
      });
    } catch (error) {
      return res.json({
        success: false,
        error: error.message,
      });
    }
  }
);

export default storageController;
