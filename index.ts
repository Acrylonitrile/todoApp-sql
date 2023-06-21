import express from "express"
import todoRouter from "./router/todo.router.js"
import todoTable from "./models/todoTable.js"

const app = express()
const PORT = 3000
app.use(express.json())
app.use("/todo", todoRouter)

todoTable.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`listening to http://localhost:${PORT}`)
  })
})
