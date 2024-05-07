
import { Link } from "react-router-dom"
export default function Home() {
    return (
        <>
            <div className="home">
                <h1>Welcome</h1>
                <p>This is the home page of my Portfolio. <br />
                    To see info about me click - <Link to='/about'>About</Link> <br />
                    To see my projects click - <Link to='/projects'>Projects</Link> <br />
                    To see my contacts click - <Link to='/contacts'>Contacts</Link></p>
            </div>
        </>
    )
}