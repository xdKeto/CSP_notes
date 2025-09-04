import {useState} from "react";
import TodoForm from "./TodoForm.jsx";
import TodoList from "./TodoList.jsx";

export default function Todo(){
    const [todos,setTodos] = useState([]);

    function addTodo(todo){
        const newTodos = [...todos,{text:todo,completed:false}];
        setTodos(newTodos);
    }

    function deleteTodo(index) {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    }

    function toggleTodo(index) {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    }

    return (
        <>
            <h1 className="text-3xl font-bold underline">Todo App</h1>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </>
    )
}