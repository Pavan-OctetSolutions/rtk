import React, { useState } from "react";
import { useAddTodoMutation } from "../store/apiSlice";

export default function TodoInputBox() {
  const [todoInput, setTodoInput] = useState("");

  const [addTodoFn] = useAddTodoMutation();

  function handleTodoInput(e) {
    setTodoInput(e.targe.value);
  }

  function handleAddTodoData() {
    addTodoFn({
      todo: todoInput,
      completed: false,
      userId: 5,
    });
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a todo"
        onChange={handleTodoInput}
      />
      <button onClick={handleAddTodoData}>Add Todo</button>
    </div>
  );
}
