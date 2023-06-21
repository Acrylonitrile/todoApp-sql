import mysql, { ResultSetHeader } from "mysql2"
import dotenv from "dotenv"
dotenv.config()

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
    const [result] = await pool.query(`SELECT * FROM ${tableName}`)
    return result
  }
  getItem = async (id: number) => {
    const [result] = await pool.query(
      `
        SELECT * FROM ${tableName}
        WHERE id = ?
        `,
      [id]
    )
    return result
  }
  addItem = async (name: string) => {
    const result = (
      await pool.query(
        `
    INSERT INTO ${tableName} (id,name)
    VALUES (DEFAULT,?)
    `,
        [name]
      )
    )[0] as ResultSetHeader
    const id = result.insertId
    return this.getItem(id)
  }
  updateItem = async (id: number, name: string) => {
    await pool.query(
      `
          UPDATE ${tableName}
          SET name = ?
          WHERE id = ?
          `,
      [name, id]
    )
    return this.getItem(id)
  }
  deleteItem = async (id: number) => {
    await pool.query(
      `
              DELETE FROM ${tableName}
              WHERE id = ?
              `,
      [id]
    )
    return this.getData()
  }
}
