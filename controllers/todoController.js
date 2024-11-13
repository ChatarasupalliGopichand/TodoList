// controllers/todoController.js
const Todo = require('../models/Todo');

// Controller to fetch all todos
exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching todos', error });
  }
};
