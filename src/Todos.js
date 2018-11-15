import React from 'react';

const Todos = ({todos, deleteTodo}) => {
    
    const todoList = todos.length ? (
        todos.map(todo =>{
            return (
                <div className="collection-item listTodo" key={todo.id}>
                    <span>{todo.content}</span>
                    <span onClick={()=>{deleteTodo(todo.id)}}>X</span>
                </div>
            )
        })
    ) : (
        <p className="center"> You have no todo's left, yay!</p>
    )
    return(
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos