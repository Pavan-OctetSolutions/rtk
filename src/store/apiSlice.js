import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return "/todos";
        },
      }),
      getTodo: builder.query({
        query: (id) => {
          `/todos/${id}`;
        },
      }),
    };
  },
});

export default apiSlice;
const { useGetAllTodosQuery } = apiSlice;
export { useGetAllTodosQuery };
