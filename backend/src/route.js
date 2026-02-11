import { Router } from "express";
import uploadDataRoute from "./module/uploadData/upload.route.js"
import ragRoute from "./module/rag/rag.route.js"

const router = Router()

router.use("/upload", uploadDataRoute)
router.use("/query", ragRoute)

export default router
