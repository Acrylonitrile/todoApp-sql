import { Sequelize, DataTypes } from "sequelize"
import sequelize from "./index.js"
import dotenv from "dotenv"
dotenv.config()

const todoTable = sequelize.define("newTodos", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }
})

export default todoTable
