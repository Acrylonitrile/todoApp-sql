import mysql, { ResultSetHeader } from "mysql2"
import dotenv from "dotenv"
dotenv.config()
import todoTable from "../models/todoTable.js"

const tableName = "todos"

const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
  })
  .promise()

export class TodoService {
  getData = async () => {
    const result = await todoTable.findAll({
      attributes: ["id", "name"]
    })
    return result
  }
  getItem = async (id: number) => {
    const result = await todoTable.findAll({
      where: {
        id: id
      },
      attributes: ["id", "name"]
    })
    return result
  }
  addItem = async (name: string) => {
    await todoTable.create({
      name: name
    })
  }
  updateItem = async (id: number, name: string) => {
    await todoTable.update(
      { name: name },
      {
        where: {
          id: id
        }
      }
    )
    return await this.getItem(id)
  }
  deleteItem = async (id: number) => {
    todoTable.destroy({
      where: {
        id: id
      }
    })
    return await this.getData()
  }
}
