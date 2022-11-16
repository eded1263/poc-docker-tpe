module.exports = (sequelize, Sequelize) => {
	const Todo = sequelize.define("Todo", {
		id: {
			type: Sequelize.INTEGER,
			primaryKey: true,
			autoIncrement: true,
		},
		nome: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		descricao: {
			type: Sequelize.STRING,
			allowNull: false,
		},
		concluido: Sequelize.BOOLEAN,
		deletedAt: "DATETIME",
	});

	return Todo;
};
