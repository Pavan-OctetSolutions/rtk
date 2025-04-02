import apiSlice from "./apiSlice";

const deleteApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder)=>{
       return {
         deleteTodo : builder.mutation({
            query: (id)=> ({
              url: `/todos/${id}`,
              method: "DELETE"
            })
         })
       }
    }
});


const {useDeleteTodoMutation} = deleteApiSlice;
export {useDeleteTodoMutation};