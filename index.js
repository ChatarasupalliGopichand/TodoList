// server.js
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

dotenv.config();

// Middleware to parse JSON bodies and enable CORS
app.use(express.json());
app.use(cors());

// Sample todos data (you can replace it with your actual database logic)
const todos = [
  { id: 1, task: 'Learn Node.js', status: 'pending' },
  { id: 2, task: 'Complete Todo App', status: 'in progress' }
];

// Define the route for getting todos
app.get('/todos', (req, res) => {
  res.status(200).json(todos);
});

// Define the route for adding a new todo
app.post('/todos', (req, res) => {
  const newTodo = {
    id: todos.length + 1, // Automatically generate a new id
    task: req.body.task,
    status: req.body.status
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Set the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
