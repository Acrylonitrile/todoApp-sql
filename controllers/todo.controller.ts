import { Request, Response } from "express"
import { TodoService } from "../services/todo.service.js"

const todoService = new TodoService()

export class TodoController {
  get = async (req: Request, res: Response) => {
    const items = await todoService.getData()
    res.send(items)
  }
  post = async (req: Request, res: Response) => {
    const item = await todoService.addItem(req.body.name)
    res.status(201).send(item)
  }
  put = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const item = await todoService.updateItem(id, req.body.name)
    res.json(item)
  }
  delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id)
    const items = await todoService.deleteItem(id)
    res.status(201).send(items)
  }
}
