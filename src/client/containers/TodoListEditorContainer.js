import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { createTodoList } from "../actions/todoListActions";
import TodoListEditor from "../components/TodoListEditor";

class TodoListEditorContainer extends React.Component {
  render() {
    return (
      <TodoListEditor
        createTodoList={this.props.createTodoList}
      />
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    createTodoList
  }, dispatch);

export default connect(null, mapDispatchToProps)(TodoListEditorContainer);