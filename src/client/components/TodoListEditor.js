import React from "react";

class TodoListEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handlePostAdd = this.handlePostAdd.bind(this);
  }

  handleChange(e) {
    e.preventDefault();

    let text = this.refs.postField.value;

    this.setState ({
      text: text
    });
  }

  handlePostAdd() {
    const newList = {
      text: this.state.text
    };

    this.props.createTodoList(newList);
    this.refs.postField.value = "";
    this.setState({text: ""});
  }

  validate() {
    if (this.state.text) {
      return true;
    }
    return false;

  }

  render() {
    return(
      <div>
        <h2>У вас все еще нет порядка в делах? Пора добавить!</h2>
        <input type="text"
          ref="postField"
          onChange={this.handleChange}
        />
        <button disabled={!this.validate()} onClick={this.handlePostAdd}>Добавить</button>

      </div>
    );
  }
}

export default TodoListEditor;