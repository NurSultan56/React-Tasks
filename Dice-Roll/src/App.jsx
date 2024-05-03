import { useState } from 'react'
import Dice from './Dice'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let numbers = [1,2,3,4,5,6]
  return (
    <>
      <div>
        <Dice />
        <Dice />
        <Dice />
      </div>
    </>
  )
}

export default App
