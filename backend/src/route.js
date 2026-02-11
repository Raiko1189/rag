import { Router } from "express";
import uploadDataRoute from "./module/uploadData/upload.route.js"

const router = Router()

router.use("/upload", uploadDataRoute)

export default router