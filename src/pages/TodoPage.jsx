import React from "react";
import Todo from "../components/Todo";
import TodoInputBox from "../components/TodoInputBox";

export default function TodoPage({ todos }) {

  return (
    <div
      style={{
        width: "99vw",
        height: "85vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        paddingTop:'0.5rem',
        alignItems: "center",
        backgroundColor:'black',
        overflow:"auto"
      }}
    >
      <TodoInputBox/>
      {todos &&
        todos.map((todo) => (
         <Todo todo={todo} key={todo.id}/>
        ))}
    </div>
  );
}
