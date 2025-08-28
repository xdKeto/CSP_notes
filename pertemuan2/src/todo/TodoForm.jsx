import { useState } from "react"

export default function TodoForm () {
    const [input, setInput] = useState("")

    function handleInput (e) {
        setInput(e.target.value)
    }

    return (
        <>
        <input type="text" value={input} />
        <button>Add</button>
        </>
    )
}