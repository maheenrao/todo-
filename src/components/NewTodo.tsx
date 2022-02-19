import React, {useContext} from "react"
import { useRef } from "react"
import classes from './Newtodo.module.css'
import { TodosContext } from '../store/todo-context';

const NewTodo: React.FC = () => {
      const todosCtx = useContext(TodosContext)
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      // throw an error
      return;
    }

    todosCtx.addTodo(enteredText);
  };

  return (
    <form onSubmit={submitHandler} className ={classes.form}>
      <label htmlFor='text'>Todo App</label>
      <input type='text' id='text' ref={todoTextInputRef} />
      <button>Add Todo</button>
      
    </form>
  );
};

export default NewTodo