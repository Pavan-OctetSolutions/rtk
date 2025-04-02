import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";

const apiSlice = createApi({
  baseQuery: async (url) => {
    const response = await axios.get(url);
    return response;
  },
  endpoints: function (builder) {
    return {
      getAllTodos: builder.query({
        query: () => {
          return "https://dummyjson.com/todos";
        },
      }),
      getTodo: builder.query({
        query: (id) => {
          `https://dummyjson.com/todos/${id}`;
        },
      }),
    };
  },
});

export default apiSlice;
const { useGetAllTodosQuery } = apiSlice;
export { useGetAllTodosQuery };
