import React, { useEffect } from "react";
import { useLazyGetTodoQuery } from "../store/apiSlice";
import { useDeleteTodoMutation } from "../store/deleteApiSlice";

export default function Todo({ todo }) {
  const [trigger, result] = useLazyGetTodoQuery();
  const [deleteTodoFn,deleteTodoResult] = useDeleteTodoMutation();

  function handleGetStatus(id) {
    trigger(id);
  }

  function handleDeleteTodo(id) {
    deleteTodoFn(id);
  }

  useEffect(()=>{
    if(deleteTodoResult?.isSuccess){
      alert("Todo deleted successfully")
    }
  },[deleteTodoResult?.isSuccess])

  return (
    <div
      key={todo.id}
      style={{
        width: "50%",
        display: "flex",
        alignContent: "start",
        justifyContent: "space-between",
        border: "1px solid black",
        backgroundColor: "gray",
        color: "White",
        paddingInline: "0.4rem",
        textAlign: "left",
      }}
    >
      <p>todo: {todo.todo}</p>
      <div
        style={{
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          gap: "0.5rem",
          padding: "1rem",
        }}
      >
        <button onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
        <button onClick={() => handleGetStatus(todo.id)}>GetStatus</button>
      </div>
      {result?.isFetching && (
        <span>Loading status</span>
      )}
      {result?.data?.id  && (
        <span>{result?.data?.completed ? "Completed" : "pending"}</span>
      )}
        {result?.error  && (
        <span>{result?.error?.data?.message}</span>
      )}
    </div>
  );
}
