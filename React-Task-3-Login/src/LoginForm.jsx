import { useState } from "react"

export default function LoginForm () {

    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')

    function handleSubmit (e) {
        e.preventDefault()
        console.log(email, password)

        if (email.includes('.ru') && password.length >= 8) {
            alert('Successful login')
        } else {
            alert(`Email must end with ".ru"
Password must contain 8 or more characters`)
        }

        return true
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="form-container">
                <label>
                    <p>Login:</p>
                    <input onChange={(e) => setEmail(e.target.value)} type="email" name="userEmail" className="input" />
                </label>
                <label>
                    <p>Password:</p>
                    <input onChange={(e) => setPassword(e.target.value)}  type="password" name="userPassword" className="input"/>
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}