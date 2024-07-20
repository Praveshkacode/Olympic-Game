import './App.css';
import {BrowserRouter as Router ,Route, Routes} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Register from './Components/Register';
import Lobby from './Components/Lobby';

function App() {
  
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<NavBar/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/lobby' element={<Lobby/>} />
      </Routes>
    </Router>


      
    
    </>
  )
}

export default App
