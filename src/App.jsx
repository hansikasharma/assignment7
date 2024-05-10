
import './App.css'
import HomePage from './pages/HomePage'
import Register from './pages/Register'
import Success from './pages/Success'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element={<HomePage />} />
      <Route path = "/register" element = {<Register />} />
      <Route path = "/success" element = {<Success />} />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
