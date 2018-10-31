const mongoose = require("mongoose");
const TodoList = require("../models/TodoList");
const config = require("../../etc/config");

function setUpConnection() {
  mongoose.connect(config.apiDB, {useNewUrlParser: true}, function (err) {
    if (err) throw err;
    console.log("Successfully connected");
  });
}

function todoList() {
  return TodoList.find();
}

function createTodoList(data) {
  const todoList = new TodoList({
    text: data.text,
  });

  return TodoList.updateOne(
    {_id: "5bd87dd6dd833913b4b6a333"},
    {$push: {"list": `${todoList.text}`}},
    {strict: false}
  );
}

function deleteTodoList(id) {
  console.log("deleteTodoListUtils", id);
  // return TodoList.update(
  //   { },
  //   { $pull: { array1: { $in: [ "1", "2" ] } } }
  // );
  // return TodoList.updateOne(
  //   { array1: "1" },
  //   { $set: { "array1.$" : "82" } }
  // );
  //return TodoList.update({"name":"Dima"}, {"$pull": {"array1": "1"}});
  // return TodoList.remove({_id : "5bd870a153bb3d13b4173b6e"});
  //return TodoList.findById(id).remove();
  // return TodoList.update(
  //   {_id: "5bd87dd6dd833913b4b6a333"},
  //   {$pull: {array1: {$gte: 1 }}}
  // );
  // return TodoList.updateMany(
  //   { _id: "5bd87dd6dd833913b4b6a333" },
  //   { $set: { bo: ["1", "2"], tags: [ "literature", "translated" ] } },
  //   { upsert: true, multi: true }
  // );

  return TodoList.updateOne(
    {_id: "5bd87dd6dd833913b4b6a333"},
    {$pull: {"list": `${id}`}},
    {strict: false}
  );

}

module.exports = {setUpConnection, todoList, createTodoList, deleteTodoList};


//return TodoList.update({"name":"Dima"}, {"$pull": {"array1": "1"}});
// return TodoList.remove({_id : "5bd870a153bb3d13b4173b6e"});
//return TodoList.findById(id).remove();
// return TodoList.update(
//   {_id: "5bd87dd6dd833913b4b6a333"},
//   {$pull: {array1: {$gte: 1 }}}
// );
// return TodoList.updateMany(
//   { _id: "5bd87dd6dd833913b4b6a333" },
//   { $set: { bo: ["1", "2"], tags: [ "literature", "translated" ] } },
//   { upsert: true, multi: true }
// );
