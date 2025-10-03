import {Link} from 'react-router-dom'
import Layout from './components/Layout';

export default function Dashboard(){
    const list=[
        {id:1, nama:'Andi', email:'andi@gmail.com'},
        {id:2, nama:'Budi', email:'budi@gmail.com'},
        {id:3, nama:'Caca', email:'caca@gmail.com'}
    ];

    return (
        <Layout>
            <ul>
                {list.map(item=>(
                    <li key={item.id}>
                        <Link to={`/dasboard/${item.id}`}>{item.nama} ({item.email})</Link>
                    </li>
                ))}
            </ul>
        </Layout>
    );
}