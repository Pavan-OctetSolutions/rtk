import apiSlice from "./apiSlice";

const deleteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => {
    return {
      deleteTodo: builder.mutation({
        query: (id) => ({
          url: `/todos/${id}`,
          method: "DELETE",
        }),
        onQueryStarted: function (id, { dispatch,queryFulfilled}) {
          const action = dispatch(
            apiSlice.util.updateQueryData(
              "getAllTodos",
              undefined,
              function (todos) {
                const cloneTodos = JSON.parse(JSON.stringify(todos));
                const newTodos = cloneTodos.todos.filter((todo) => todo.id !== id);
                return {todos:newTodos};
              }
            )
          );

          queryFulfilled.catch(()=>{
            action.undo();
          })
        },
      }),
    };
  },
});

const { useDeleteTodoMutation } = deleteApiSlice;
export { useDeleteTodoMutation };
