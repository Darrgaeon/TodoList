import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { loadTodoList, deleteTodoList } from "../actions/todoListActions";
import List from "../components/TodoListDisplay";

class TodoListDisplayContainer extends React.Component {
  render() {
    return (
      <List
        loadTodoList={this.props.loadTodoList}
        deleteTodoList={this.props.deleteTodoList}
        data={this.props.todoList.data}
        status={this.props.todoList.status}
        key={this.props.todoList.status}
      />
    );
  }
}

const mapStateToProps = store => ({
  todoList: store.todoList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    loadTodoList,
    deleteTodoList
  }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoListDisplayContainer);