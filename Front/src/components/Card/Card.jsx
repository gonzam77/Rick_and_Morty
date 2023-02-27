import style from './Card.module.css'
import React, { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import * as actions from '../../redux/actions'
import { useDispatch, useSelector } from 'react-redux'


function Card(props) {
   
   const dispatch = useDispatch();
   const myFavorites = useSelector(state => state.myFavorites);
   const [isFav, setIsFav] = React.useState(false);
   const location = useLocation();

   
   
   useEffect(() => {
      if(location.pathname === '/favorites'){
         setIsFav(true)
      }
      myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }  
      });
   }, [myFavorites]);
   
   const handleFavorites = () => {
      if (isFav) {
         setIsFav(false);
         dispatch(actions.deleteFavorites(props.id));
      } else {
         setIsFav(true);
         dispatch(actions.addFavorites(props))
      }
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
         <button className={style.closeButton} onClick={props.onClose}>X</button>
         <NavLink to={`/detail/${props.id}`} style={{ textDecoration: 'none' }}>
            <h2 className={style.name}>{props.name}</h2>
         </NavLink>
         <img className={style.image} src={props.image} alt={props.name} />
         <div className={style.details}>
            <h3 className={style.specie}>{props.species}</h3>
            <h3 className={style.gander}>{props.gender}</h3>
         </div>
      </div>
   );

}

export default Card;