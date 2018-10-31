import axios from "axios";

const config = require("../../etc/config");

function todoList() {
  return axios.get(`${config.apiPrefix}/${config.db.name}`);
}

function createTodoList(data) {
  return axios.post(`${config.apiPrefix}/${config.db.name}`, data);
}

function deleteTodoList(todoListId) {
  return axios.delete(`${config.apiPrefix}/${config.db.name}/${todoListId}`);
}

module.exports = {todoList, createTodoList, deleteTodoList};

