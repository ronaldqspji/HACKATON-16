import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <main className="bg-zinc-900">
    <div>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? "line-through" : "none" }}>
        {todo.text}
      </span>
      <button onClick={() => onDelete(todo.id)}>Eliminar</button>
    </div>
    </main>
  );
};

export default TodoItem;
