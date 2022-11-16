const Sequelize = require("sequelize");
const sequelize = new Sequelize(
	process.env.TARGET_DATABASE,
	process.env.USER_DATABASE,
	process.env.PASSWORD_DATABASE,
	{
		host: process.env.HOST_DATABASE,
		dialect: "mysql",
		operationsAliases: false,
		pool: {
			max: 5,
			min: 0,
			acquire: 30000,
			idle: 10000,
		},
	}
);
const db = {};
db.todos = require("./models/todo.model")(sequelize, Sequelize);
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
