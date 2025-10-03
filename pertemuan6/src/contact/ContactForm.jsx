import {useState} from 'react'

export default function ContactForm({ addContact }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        const newContact = {
            id:Date.now(),
            name:name,
            email:email
        };
        console.log(newContact);
        addContact(newContact);
        setName('');
        setEmail('');
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <label>Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );

}