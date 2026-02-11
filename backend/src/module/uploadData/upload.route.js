import { Router } from "express";
import uploadDataSchema from "./upload.schema";
import { uploadDataController } from "./upload.controller";

const router = Router()

router.post("/", (req, res) => {
    try {
        const { text } = req.body;
        const result = uploadDataController.uploadData(uploadDataSchema.parse({ text }))
    } catch (error) {

    }
})

export default router