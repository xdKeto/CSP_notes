import {Link} from 'react-router-dom'

export default function ContactList({ list }) {
    return (
        <ul>
            {
            list.map((contact) => (
                <li key={contact.id}><Link to={`/contact/${contact.id}`}>{contact.name} - {contact.email}</Link></li>
            ))
            }
        </ul>
    );
}