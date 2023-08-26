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
        <Route exact path='/' Component={Home}/>
        <Route path='/user/register' Component={Register}/>
        <Route path='/user/login' Component={Login}/>
        <Route path='/trainer/register' Component={TrainerRegister}/>
        <Route path='/trainer/login' Component={TrainerLogin}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
