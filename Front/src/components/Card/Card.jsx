import style from './Card.module.css'
import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


function Card({ image, name, gender, species, onClose, id, isFav }) {

   const dispatch = useDispatch();

   const handleFavorites = () => {
      dispatch(actions.updateFavorites(id));
   }

   return (
      <div className={style.container}>
         {
            isFav ? (
               <button onClick={handleFavorites}>❤️</button>
            ) : (
               <button onClick={handleFavorites}>🤍</button>
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