import './App.css'
import TodoPage from './pages/TodoPage'
import { useGetAllTodosQuery } from './store/apiSlice'

function App() {

  const {data,isLoading,error} = useGetAllTodosQuery();

  if(isLoading){
    return <div>
      <h1>Loading...</h1>
    </div>
  }

  if(error){
    return <div>
      <h1>{error?.message}</h1>
    </div>
  }

  console.log(isLoading,error,data);

  return (
    <div>
       <h2>TODO APP </h2>
      <TodoPage todos={data?.todos}/>
    </div>
  )
}

export default App
