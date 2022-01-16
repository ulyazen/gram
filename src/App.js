import { Routes, Route } from 'react-router-dom'

import Landing from './pages/Landing/Landing'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
function App () {
  return (
    <Home />
    // <Routes>
    //   <Route path='/' element={<Landing />} exact />
    //   <Route path='/login' element={<Login />} exact />
    //   <Route path='/home' element={<Home />} exact />
    // </Routes>
  )
}

export default App
