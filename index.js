const app = require("express")();
const bodyParser = require("body-parser");
const db = require("./dbConfig");
const todoRouter = require("./routes/todo.router");
const main = async () => {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));
	app.use(todoRouter);
	await db.sequelize.sync();
	app.listen(process.env.NODE_PORT, () => {
		console.log(`Ouvindo na porta ${process.env.NODE_PORT}`);
	});
};

main();
