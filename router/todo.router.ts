import { Router } from "express"
import { TodoController } from "../controllers/todo.controller.js"

const todoRouter = Router()
const todoController = new TodoController()

todoRouter.get("/", todoController.get)
todoRouter.post("/", todoController.post)
todoRouter.put("/:id", todoController.put)
todoRouter.delete("/:id", todoController.delete)

export default todoRouter
