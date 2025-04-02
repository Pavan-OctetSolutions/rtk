import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  reducerPath: "todo",
  tagTypes: ["GetAllTodosTag", "AddTodosTag"],
  refetchOnFocus: true,
  refetchOnReconnect: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
    transformErrorResponse: (response) => {
      return {
        status: response.status,
        message: response.data?.message || "An error occurred",
      };
    },
  }),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return "/todos";
        },
        providesTags: ["GetAllTodosTag"],
        // * You can add manual transform error response too
        // transformErrorResponse: (response) => {
        //     return {
        //       status: response.status,
        //       message: response.data?.message || "An error occurred",
        //     };
        // },
      }),
      getTodo: builder.query({
        query: (id) => {
          return `/todos/${id}`;
        },
      }),
      addTodo: builder.mutation({
        query: (params) => {
          return {
            url: "/todos/add",
            method: "POST",
            body: params,
          };
        },
        invalidatesTags: ["GetAllTodosTag"],
      }),
    };
  },
});

export default apiSlice;
const { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation } =
  apiSlice;
export { useGetAllTodosQuery, useLazyGetTodoQuery, useAddTodoMutation };
