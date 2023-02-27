import style from './SearchBar.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
   
   const [character, setCharacter] = useState("");

   const save = (event) => {
      setCharacter({
         ...character,
         id: event.target.value
      })
   }
   
   const navigate = useNavigate();
   
   const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
         navigate("/home")
         buscar();
         character.id = "";
      }
   };

   const buscar = () => {
      onSearch(character.id)
      navigate("/home")
      character.id = "";
   }

   return (
      <div className={style.searchBar}>
         <input value={character.id} onChange={save} className={style.searchInput} onKeyDown={handleKeyDown} type='search' />
         <button className={style.searchButton} onClick={buscar}>Agregar</button>
      </div>
   );
}

export default SearchBar;