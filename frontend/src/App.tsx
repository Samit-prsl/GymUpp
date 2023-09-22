import * as React from 'react'
import './App.css';
import { BrowserRouter as Router,
Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
import TrainerRegister from './Pages/TrainerRegister'
import TrainerLogin from './Pages/TrainerLogin'
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/register' element={<Register/>}/>
        <Route path='/user/login' element={<Login/>}/>
        <Route path='/trainer/register' element={<TrainerRegister/>}/>
        <Route path='/trainer/login' element={<TrainerLogin/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
