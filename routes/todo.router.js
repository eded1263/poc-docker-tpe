const { Router } = require("express");
const db = require("../dbConfig");

const router = Router();

// Listar Todos
router.get("/todo", async (req, res) => {
	res.json(await db.todos.findAll());
});

// Buscar Todo por id
router.get("/todo/:id", async (req, res) => {
	const todo = await db.todos.findOne({ where: { id: req.params.id } });
	if (!todo) {
		res.status(404).json({ error: "Not found" });
		return;
	}
	res.json();
});

// Novo Todo
router.post("/todo", async (req, res) => {
	console.log(req.body);
	const todo = db.todos.build(req.body);

	await todo.save();

	res.json(todo);
});

// Marcar como feito o Todo
router.post("/todo/:id", async (req, res) => {
	const todo = await db.todos.findOne({ where: { id: req.params.id } });
	if (!todo) {
		res.status(404).json({ error: "Not found" });
		return;
	}
	todo.concluido = true;
	db.todos.update(todo, { where: { id: todo.id } });

	return todo;
});

module.exports = router;
