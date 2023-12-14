import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navigate from './components/Navigate';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  return (
    <div>
    <BrowserRouter>
    <Navigate/>
    <Routes>
    <Route path="/login" element = <Login/>></Route>
    <Route path="/signup" element = <Signup/>></Route>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
