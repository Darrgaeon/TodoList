import React from "react";
import TodoListContainer from "../containers/TodoListDisplayContainer";
import TodoListEditorContainer from "../containers/TodoListEditorContainer";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TodoListEditorContainer/>
        <TodoListContainer/>
      </React.Fragment>
    );
  }
}

export default App;