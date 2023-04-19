import { Router } from "express"
import { ApiController as testRouter } from "./test/test"

const router = Router()
router.use("/test", testRouter)
router.use("/test1", testRouter)

export default router
