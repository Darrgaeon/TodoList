const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const config = require("../../etc/config");

const TodoListSchema = new Schema({
  text: {type: String, required: true},
});

// text: {type: String, required: true},

const TodoList = mongoose.model(config.db.name, TodoListSchema, config.db.collection);

module.exports = TodoList;