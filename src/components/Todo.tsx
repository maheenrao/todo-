import React, {useContext} from 'react'

import TodoItem from './TodosItem';
import classes from './Todo.module.css'
import { TodosContext } from '../store/todo-context';
const Todo: React.FC= ()=> {
    
    const todosCtx = useContext(TodosContext)
    return (
        <ul className={classes.todos}>
            {todosCtx.items.map((item) => (
                // <li key={item.id}>{item.text}</li>
                <TodoItem key= {item.id} text= {item.text} onRemove={todosCtx.removeTodo.bind(null, item.id)} />
           ))} 
        </ul>
        
    )
}

export default Todo;