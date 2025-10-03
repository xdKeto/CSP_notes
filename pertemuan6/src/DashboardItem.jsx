import { useParams } from "react-router-dom";
import Layout from "./components/Layout";

export default function DashboardItem(){
    const {id} = useParams();
    const list=[
        {id:1, nama:'Andi', email:'andi@gmail.com'},
        {id:2, nama:'Budi', email:'budi@gmail.com'},
        {id:3, nama:'Caca', email:'caca@gmail.com'}
    ];
    const item = list.find(item=>item.id==id);

    if(!item) return <h1>User not found</h1>

    return (
        <Layout>
            <h1>Detail User</h1>
            <div>
                <p>Nama: { item.nama}</p>
                <p>Email: { item.email}</p>
            </div>
        </Layout>
    );


}