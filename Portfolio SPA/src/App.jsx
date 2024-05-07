import About from './About'
import ProjectExamples from './Project-Examples'
import Contacts from './Contacts'
import Navbar from './Navbar'
import Home from './Home'
import './App.css'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/projects' element={<ProjectExamples />} />
        <Route path='/contacts' element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
