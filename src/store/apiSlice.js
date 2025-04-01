import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";


const apiSlice = createApi({
    endpoints:  function(builder){
        return{
            getAllTodos: builder.query({
                queryFn: async()=>{
                    const response =await axios.get('https://dummyjson.com/todos');
                    return response;
                }
            })
        }
    }
});

export default apiSlice;
const {useGetAllTodosQuery} = apiSlice;
export {useGetAllTodosQuery};