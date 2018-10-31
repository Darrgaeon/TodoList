const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");
const db = require("./utils/DataBaseUtils");
const config = require("../etc/config");


db.setUpConnection();

app.use( bodyParser.json() );
app.use(cors({ origin: "*" }));

app.get("/todolist", (req, res) => {
  db.todoList().then(data => res.send(data));
});

app.post("/todolist", (req, res) => {
  db.createTodoList(req.body).then(data => res.send(data));
});

app.delete("/todolist/:id", (req, res) => {
  db.deleteTodoList(req.params.id).then(data => res.send(data));
});

const server = app.listen(config.serverPort, function() {
  console.log(`Server is up and running on port ${config.serverPort}`);
});

