const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = sequelize.define('User', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  username: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  password: { type: DataTypes.STRING(200), allowNull: false },
  email: { type: DataTypes.STRING(100), unique: true, allowNull: false },
  role: { type: DataTypes.STRING(20), defaultValue: 'user' },
  createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW }
}, { tableName: 'users', timestamps: false });
module.exports = User;