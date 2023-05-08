import { Route, Routes } from 'react-router-dom'
import Signup from './pages/authentication/signup'
import Home from './pages/landing-page/home'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/signup' element={<Signup/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </div>
  )
}

export default App
