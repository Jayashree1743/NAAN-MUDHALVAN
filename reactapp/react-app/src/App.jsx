import { useState } from 'react'
import Login from './Components/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-bootstrap'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App