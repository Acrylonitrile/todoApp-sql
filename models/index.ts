import { Sequelize } from "sequelize-typescript"
import dotenv from "dotenv"
import dbconfig from "../config/config"
dotenv.config()

const sequelize = new Sequelize({
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  host: process.env.MYSQL_HOST,
  dialect: "mysql"
})

export default sequelize
