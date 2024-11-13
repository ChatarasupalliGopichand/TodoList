const mongoose = require('mongoose');
const sqlite3 = require('sqlite3').verbose();

let db;
if (process.env.DB_TYPE === 'mongo') {
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
  db = mongoose.connection;
} else {
  db = new sqlite3.Database(':memory:');
}
module.exports = db;
