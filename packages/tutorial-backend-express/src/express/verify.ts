import type { NextFunction, Request, Response } from "express"

export const verify = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  req.session ? next() : next()
  //   const id_token = req.get("authorization")?.split(" ")[1]
  //   if (id_token) {
  //     try {
  //       // to-do: implement verification code
  //         next()
  //     } catch (e) {
  //       console.error("verify-failure", e)
  //       res.status(400).send({ code: "verify-failure" })
  //     }
  //   } else {
  //     res.status(401).send({ code: "token-required" })
  //   }
}
