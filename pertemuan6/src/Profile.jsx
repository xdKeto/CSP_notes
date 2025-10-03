import { useState } from "react";

export default function Profile(){
    const [profil, setProfil] = useState({nama:'Andi', email:'andi@gmail.com'});
    return (
        <>
            <h1>Profile Page</h1>
            <Biodata profil={profil}>
                <Email email={profil.email}/>
            </Biodata>
        </>
    );
}

function Biodata({profil,children}){
    return (
        <>
            <p>Nama: {profil.nama}</p>
            {children}
        </>
    );
}

function Email({ email}){
    return <p>Email: {email}</p>
}