import React from "react";
import FlipMove from "react-flip-move";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item listTodo" key={todo.id}>
          <span>{todo.content}</span>
          <span
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            X
          </span>
        </div>
      );
    })
  ) : (
    <p className="center"> You haven't todo's !!</p>
  );
  return (
    <div className="todos collection">
      <FlipMove duration={250} easing="ease-out">
        {todoList}
      </FlipMove>
    </div>
  );
};

export default Todos;
