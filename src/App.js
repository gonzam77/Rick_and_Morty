import React, { useState } from 'react';
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/Nav.jsx';
import { Route, Routes, useParams } from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';





function App() {

  const [characters, setCharacters] = useState([]);
  
  const clean = (event) => {
    setCharacters([])
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((personaje) => personaje.id !== id)
    )
  }

  return (
    <div className='App' style={{ padding: '25px' }}>
      <h1 className="titulo">Rick and Morty</h1>
      <h2 className="titulo2">Rick and Morty</h2>
      <Nav className='nav' onSearch={onSearch} />
      <Routes>
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} clean={clean} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Form />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>

    </div>
  )
}

export default App
