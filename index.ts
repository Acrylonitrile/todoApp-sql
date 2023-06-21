import express from "express"
import todoRouter from "./router/todo.router.js"

const app = express()
const PORT = 3000
app.use(express.json())
app.use("/todo", todoRouter)

app.listen(PORT, () => {
  console.log(`listening to http://localhost:${PORT}`)
})
