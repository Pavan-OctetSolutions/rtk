import React from "react";
import Todo from "../components/Todo";

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
      {todos &&
        todos.map((todo) => (
         <Todo todo={todo}/>
        ))}
    </div>
  );
}
