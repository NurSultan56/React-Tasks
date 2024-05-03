import 'react-phone-input-2/lib/style.css'
import PhoneInput from 'react-phone-input-2'
import { useState } from 'react'
import Card from './Card'

export default function Form() {
    let [name, setName] = useState('')
    let [surname, setSurname] = useState('')
    let [phoneNumber, setPhoneNumber] = useState('')
    let [email, setEmail] = useState('')
    let [text, setText] = useState('')

    function handleSubmit(event) {
        event.preventDefault()
        setName(event.target.userName.value)
        setSurname(event.target.userSurname.value)
        setPhoneNumber(event.target.userPhoneNumber.value)
        setEmail(event.target.userEmail.value)
        setText(event.target.text.value)
    }
    return (
        <>
            <div className="main">
                <form onSubmit={handleSubmit} className='form-container'>
                    <label>
                        <p>Имя: </p>
                        <input type="text" name='userName' className='input'/>
                    </label>
                    <label>
                        <p>Фамилия:</p>
                        <input type="text" name="userSurname" className='input'/>
                    </label>
                    <label>
                        <p>Телефон: </p>
                        <PhoneInput country={'us'} inputProps={{
                            name: 'userPhoneNumber',
                            required: true,
                            autoFocus: true
                        }} />
                    </label>
                    <label>
                        <p>Почта:</p>
                        <input type="email" name='userEmail' className='input'/>
                    </label>
                    <label>
                        <p>Предложение:</p>
                        <textarea type="textarea" cols='70' rows='50' name='text' className='input' id='textarea'/>
                    </label>
                    <button type='submit'>Submit</button>
                </form>

                <Card name={name} surname={surname} phoneNumber={phoneNumber} email={email} text={text} />
            </div>
        </>
    )
}