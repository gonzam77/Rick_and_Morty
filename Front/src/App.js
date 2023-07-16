import React, { useState, useEffect } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'
import Favorites from "./components/Favorites/Favorites"
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const [access, setAccess] = useState(false);
  const username = 'gonzam77@gmail.com';
  const password = 'henry1';
  const dispatch = useDispatch();
  const characters = useSelector(state => state.characters)

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate('/home');
    }
  }

  const logout = () => {
    setAccess(false);
  }

  const navigate = useNavigate();

  useEffect(() => {
    //!access && navigate('/')
  }, [access]);


  const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 className="titulo">Rick and Morty</h1>
      {location.pathname !== '/favorites' && <h2 className="tituloChico">Rick and Morty</h2>}
      {location.pathname !== "/" && <Nav access={access} logout={logout} className='nav' />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route path="/home" element={<Cards />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </div>
  )
}

export default App
