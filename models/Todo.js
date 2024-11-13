const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
  title: String,
  status: { type: String, enum: ['pending', 'in-progress', 'done', 'completed'] },
  userId: mongoose.Schema.Types.ObjectId,
});
module.exports = mongoose.model('Todo', todoSchema);
