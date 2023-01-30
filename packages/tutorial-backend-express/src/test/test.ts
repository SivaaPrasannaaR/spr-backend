import express from "express"

export const ApiController = express()

ApiController.get("/query", (req: any, res: any) => {
  // ?something=value&something=value......
  console.log(req.query)
  res.send("hi")
})

ApiController.get("/params/:id", (req: any, res: any) => {
  // /get/12345
  console.log(req.params)
  res.send("hi")
})

/**
 * Cookies
 */
ApiController.get("/cookies/:id", (req: any, res: any) => {
  // request
  console.log("request cookies", req.headers.cookie)

  // response cookies
  res.cookies("visted", true, {
    maxAge: 10000 /** time length for cookies */,
  })
  res.send("hi")
})

/**
 * Session
 */
ApiController.get("/session/:id", (req: any, res: any) => {
  // request
  console.log("request session", req.session)

  req.session.cart.items.push([])
  res.send("hi")
})

ApiController.post("/post", (req: any, res: any) => {
  console.log("###req", req.body)
  res.send(201)
})
