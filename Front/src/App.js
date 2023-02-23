import React, { useState, useEffect } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form'






function App() {

  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);
  const username = 'gonzam77@gmail.com';
  const password = 'henry1';


  const clean = (event) => {
    setCharacters([])
  }

  

  function onSearch(character) {
    fetch(`https://localhost:3001/rickandmorty/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

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
    !access && navigate('/')
  }, [access]);

  const onClose = (id) => {
    setCharacters(
      characters.filter((personaje) => personaje.id !== id)
    )
  }

  const location = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 className="titulo">Rick and Morty</h1>
      <h2 className="titulo2">Rick and Morty</h2>
      {location.pathname !== "/" && <Nav access={access} logout={logout} className='nav' onSearch={onSearch} />}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} clean={clean} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
