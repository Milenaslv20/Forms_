import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Login from './pages/Login'
import SignUp from './pages/SingUp'
import Register from './pages/Register'
import ViewRegister from './pages/ViewRegister'
import './App.css'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Welcome/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signUp' element={<SignUp/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/viewRegister' element={<ViewRegister/>} />
      </Routes>
    </Router>
  );
}

export default App
