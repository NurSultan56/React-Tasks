import { useState } from "react"

export default function Form() {

    let [name, setName] = useState('')
    let [passport, setPassport] = useState('')
    let [gender, setGender] = useState('')
    let [age, setAge] = useState('')
    let [email, setEmail] = useState('')
    let [phone, setPhone] = useState('')
    let [description, setDescription] = useState('')
    let [checkUp, setCheckUp] = useState('')
    let [password, setPassword] = useState('')
    let [typeOfInput, setTypeOfInput] = useState('password')

    function handleSubmit (e) {
        e.preventDefault()
        console.log(name, passport, gender, age, email, phone, description, checkUp, password)
    }

    function typeChangeHandle (e) {
        e.target.checked ? setTypeOfInput('text') : setTypeOfInput('password')
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        ФИО пациента: <br />
                        <input onChange={(e) => setName(e.target.value)} className="input" name="fullName" type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Серия и номер паспорта: <br />
                        <input onChange={(e) => setPassport(e.target.value)} className="input" name="passportSerieAndNumber" type="text" />
                    </label>
                </div>
                <div>
                    <label>
                        Пол: <br />
                        <select onChange={(e) => setGender(e.target.value)} className="input" name="gender">
                            <option value="male">Мужской</option>
                            <option value="female">Женский</option>
                        </select>
                    </label>
                </div>
                <div>
                    <label>
                        Возраст: <br />
                        <input onChange={(e) => setAge(e.target.value)} className="input" name="age" type="number" />
                    </label>
                </div>
                <div>
                    <label>
                        Email: <br />
                        <input onChange={(e) => setEmail(e.target.value)} className="input" name="email" type="email" />
                    </label>
                </div>
                <div>
                    <label>
                        Телефон: <br />
                        <input onChange={(e) => setPhone(e.target.value)} className="input" name="phone" type="tel" />
                    </label>
                </div>
                <div>
                    <label>
                        Описание симпотов: <br />
                        <textarea onChange={(e) => setDescription(e.target.value)} name="simptomsDesctiption"></textarea>
                    </label>
                </div>
                <div>
                    <label>
                        Повторный приём: <input onChange={(e) => setCheckUp(e.target.value)} name="repeatCheck" type="checkbox" />
                    </label>
                </div>
                <div>
                    <label>
                        Пароль: <input onChange={(e) => setPassword(e.target.value)} name="password" type={`${typeOfInput}`} />
                    </label>
                </div>
                <div>
                <label>Показать пароль: <input onChange={typeChangeHandle} type="checkbox"/></label>
                </div>
                <div>
                    <button>Отправить</button>
                </div>
            </form>

        </>
    )
}