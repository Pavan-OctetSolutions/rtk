import React from "react";
import { useState } from "react";

export default function TodoPage({ todos }) {
  const [status, setStatus] = useState(false);

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
          <div
            key={todo.id}
            style={{
              width:"50%",
              display: "flex",
              alignContent: "start",
              justifyContent: "space-between",
              border: "1px solid black",
              backgroundColor: "gray",
              color: "White",
              paddingInline:'0.4rem',
              textAlign:"left"
            }}
          >
            <p>todo: {todo.todo}</p>
            <div  style={{
              display: "flex",
              alignContent: "center",
              justifyContent: "center",
              gap:'0.5rem',
              padding:'1rem' 
            }}>
              <button>Delete</button>
              <button>Status</button>
            </div>
            {status && <p>todo.status</p>}
          </div>
        ))}
    </div>
  );
}
