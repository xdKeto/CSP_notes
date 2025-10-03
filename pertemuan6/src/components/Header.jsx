import {Link} from 'react-router-dom'

export default function Header(){
    return (
        <header>
            <nav>
                <Link to="/home">Home</Link> |
                <Link to="/about">About</Link> |
                <Link to="/dashboard">Dashboard</Link> |
                <Link to="/profile">Profile</Link>
            </nav>
        </header>
    );
}