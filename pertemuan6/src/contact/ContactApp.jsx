import {useState} from 'react'
import Layout from '../components/Layout'
import ContactList from './ContactList'
import ContactForm from './ContactForm'

export default function ContactApp() {
    const [list, setList] = useState([]);

    function addContact(contact) {
        setList([...list, contact]);
    }

    return (
        <Layout>
            <h1>Contact App</h1>
            <ContactForm addContact={addContact}/>
            <ContactList list={list}/>
        </Layout>
        )

}