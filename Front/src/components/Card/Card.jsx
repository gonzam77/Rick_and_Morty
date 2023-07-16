import style from './Card.module.css'
import React from 'react';
import { NavLink } from 'react-router-dom';
import * as actions from '../../redux/actions'
import { useDispatch } from 'react-redux'


function Card({ image, name, gender, species, onClose, id, is_fav }) {

   const dispatch = useDispatch();

   const handleFavorites = () => {
      dispatch(actions.updateFavorites(id));
      console.log("is_fav", is_fav);
   }

   return (
      <div className={style.container}>
         {
            is_fav ? (
               <button className={style.favButton} onClick={handleFavorites}>❤️</button>
            ) : (
               <button className={style.favButton} onClick={handleFavorites}>🤍</button>
            )
         }
         <button className={style.closeButton} onClick={onClose}>X</button>
         <NavLink to={`/detail/${id}`} style={{ textDecoration: 'none' }}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>
         <img className={style.image} src={image} alt={name} />
         <div className={style.details}>
            <h3 className={style.specie}>{species}</h3>
            <h3 className={style.gander}>{gender}</h3>
         </div>
      </div>
   );
}

export default Card;