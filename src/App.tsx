import React from 'react';
import NewTodo from './components/NewTodo';
import './App.css';
import Todo from './components/Todo';
import Todos from './models/Todos'
import TodosContextProvider from './store/todo-context';



function App() {
  
  // const [todos, setTodos] = useState<Todos[]>([])
  // const addTodoHandler = (todoText : string) => {
    
  //   const newTodo = new Todos (todoText)
  //   setTodos ((prevTodos) => {
  //     return prevTodos.concat (newTodo)
  //   })
 
  // }
  //    const removeTodoHandler = (todoId: string) => {
  //   setTodos((prevTodos) => {
  //     return prevTodos.filter(todo => todo.id !== todoId);
  //   });
  // }

  return (
    <TodosContextProvider>
      <NewTodo />
      <Todo/>

    </TodosContextProvider>
  );
}

export default App;
