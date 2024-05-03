import { useEffect, useState } from 'react'
import User from './User'
import './App.css'

function App() { 
  let [usersArray, setUsersArray] = useState([])
  let [input, setInput] = useState('')
  let [select , setSelect] = useState('name')

  useEffect(() => {
    fetch('https://5ea5ca472d86f00016b4626d.mockapi.io/brotherhood')
      .then((res) => res.json())
      .then((data) => {
        if (select === '') {
          setUsersArray(data)
        }
        else if (select === 'name') {
          if (input === '') {
            setUsersArray(data)
            } else {
              setUsersArray(data.filter((item) => item.name.startsWith(input)))
            }
        } else if (select === 'department') {
          if (input === '') {
            setUsersArray(data)
            } else {
              setUsersArray(data.filter((item) => item.department.startsWith(input)))
            }
        }
      })
  }, [input])

  return (
    <>
      <input onChange={(ev) => setInput(ev.target.value)} type="text" placeholder='SEARCH' />
      <select onChange={(e) => setSelect(e.target.value)} name="select">
        <option  value="name">Name</option>
        <option  value="department">Department</option>
      </select>
      <ul>
        {usersArray.map((item) =>
         <User key={item.id} item={item} /> )}
      </ul>
    </>
  )
}

export default App
