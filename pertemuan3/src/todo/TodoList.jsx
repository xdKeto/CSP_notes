export default function TodoList({todos, deleteTodo, toggleTodo}) {

    return (
        <ul>
            {todos.map((todo,index)=>(
                <li key={index} className="flex justify-between items-center p-2 m-2 border border-black">
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                    {todo.completed ? <s>{todo.text}</s> : todo.text }
                    <button onClick={() => deleteTodo(index)} className="bg-red-500 text-white p-2 m-2 rounded">
                        Delete
                    </button>
                </li>
            ))}
        </ul>
    )
}