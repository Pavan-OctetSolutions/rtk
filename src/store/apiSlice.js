import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
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
    };
  },
});

export default apiSlice;
const { useGetAllTodosQuery, useLazyGetTodoQuery } = apiSlice;
export { useGetAllTodosQuery, useLazyGetTodoQuery };
