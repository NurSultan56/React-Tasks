import { Link } from "react-router-dom"

export default function Navbar () {
    return (
        <>
            <nav className="nav">
                <Link to='/' >Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/projects'>Projects</Link>
                <Link to='/contacts'>Contacts</Link>
            </nav>
        </>
    )
}