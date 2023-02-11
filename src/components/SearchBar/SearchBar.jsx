import style from './SearchBar.module.css';
import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function SearchBar({ onSearch }) {
   
   const [character, setCharacter] = useState("");

   const save = (event) => {
      setCharacter({
         ...character,
         name: event.target.value
      })
   }
   
   const navigate = useNavigate();
   
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         navigate("/home")
         buscar();
         character.name = "";
      }
   };

   const buscar = () => {
      onSearch(character.name)
      navigate("/home")
      character.name = "";
   }

   return (
      <div className={style.searchBar}>
         <input value={character.name} onChange={save} className={style.searchInput} onKeyDown={handleKeyDown} type='search' />
         <button className={style.searchButton} onClick={buscar}>Agregar</button>
      </div>
   );
}

export default SearchBar;