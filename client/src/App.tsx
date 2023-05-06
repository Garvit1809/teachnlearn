import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import Signup from './pages/authentication/signup'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
    </div>
  )
}

export default App
