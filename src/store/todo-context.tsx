import React , {useState} from "react"
import Todos from '../models/Todos'


type TodosContextObj = {
  items: Todos[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodosContext = React.createContext<TodosContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todos[]>([]);

  const addTodoHandler = (todoText: any) => {
    fetch(`/todos`, {
      method: 'POST',
      body: JSON.stringify(todoText),
      headers: { 'Content-Type': 'application/json' ,
              'Authorization': 'f2bc0c85-b373-468a-9fd3-d1a2f2782609'
    }})
      .then(response => {
        return response.json();
      })
      .then(responseData => {
       setTodos(prevTodos => [
          ...prevTodos,
          { id: responseData.text, ...todoText }
        ])
      });
    const newTodo = new Todos(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodosContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;