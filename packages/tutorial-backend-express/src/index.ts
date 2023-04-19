import express from "express"
import cookieParser from "cookie-parser"
import session from "express-session"
import cors from "cors"

import { verify } from "./express/verify"
import router from "./express/apiRouter"

const Api = express()
const PORT = 5001 || 8080

// conversion
Api.use(express.urlencoded({ extended: false, limit: "32mb" }))
Api.use(express.json({ limit: "32mb" }))
Api.use(cors())

/** Cookies and sessions */
Api.use(cookieParser())
Api.use(
  session({
    secret: "ABCDEF",
    resave: false,
    saveUninitialized: false,
  })
)

// auth is called before verification
Api.get("/login", (_req, _res, next) => next())

// Verification
// Api.use(context)
Api.use(verify)

// Router
Api.use(router)

Api.listen(PORT, () => console.log("Running Express Server on Port", PORT))
