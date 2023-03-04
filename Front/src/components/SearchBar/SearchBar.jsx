import style from './SearchBar.module.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import validation from './validation '


function SearchBar({ onSearch }) {

   const [character, setCharacter] = useState("");
   const [errors, setErrors] = useState([])

   const save = (event) => {

      setErrors(
         validation(event.target.value)
      )

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
         <div className={style.busqueda}>
            <input value={character.id} onChange={save} className={style.searchInput} onKeyDown={handleKeyDown} type='search' />
            {errors[0] !== "" && <p className={style.danger}>{errors[0]}</p>}
         </div>
         <button className={style.searchButton} onClick={buscar}>Agregar</button>
      </div>
   );
}


export default SearchBar;