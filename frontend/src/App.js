import './App.css';
import { BrowserRouter as Router,
Routes,Route} from 'react-router-dom'
import Layout from './Pages/Layout';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route exact path='/' Component={Layout}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
