import React from "react";

class TodoList extends React.Component {

  handleDelete(item) {
    this.props.deleteTodoList(item);
  }

  componentDidMount() {
    this.props.loadTodoList();
  }

  render() {
    const {data, status} = this.props;
    if (status !== "ok") return <div>Идет загрузка...</div>;

    const {list} = data[0];

    return (Object.keys(list).length >= 2) ? (
      <div>
        <h2>Список дел:</h2>
        {list.map((item, index) => (
          <div className="post" key={index}>
            <div >{item}</div>
            <button onClick={this.handleDelete.bind(this, item)}>Удалить</button>
          </div>
        ))}
      </div>
    ) : (Object.keys(list).length >= 1)
      ? <div >
        <h2 >Список дел:</h2>
        <div className="post" >
          <div >{list}</div>
          <button onClick={this.handleDelete.bind(this, list)}>Удалить</button>
        </div>
      </div>
      : <h2>Добавьте дело!</h2>;
  }
}

export default TodoList;