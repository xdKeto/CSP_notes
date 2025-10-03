import { useState } from "react";

export default function FormPage(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleUsername(event){
        setUsername(event.target.value);
    }
    function handlePassword(event){
        setPassword(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Form Page</h1>
            <label>Username</label>
            <input type="text" value={username} onChange={ handleUsername } />
            <br/>
            <label>Password</label>
            <input type="password" value={password} onChange={ handlePassword } />
            <br/>
            <button type="submit">Submit</button>
        </form>
    );
}