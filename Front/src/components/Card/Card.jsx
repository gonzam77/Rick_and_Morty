import style from './Card.module.css'
import { NavLink } from 'react-router-dom';



function Card({name, image, species, gender, id, onClose}) {
   
   return (
      <div className={style.container}>
         <button className={style.closeButton} onClick={onClose}>X</button>
         <NavLink to={`/detail/${id}`} style={{textDecoration: 'none'}}>
            <h2 className={style.name}>{name}</h2>
         </NavLink>
         <img className={style.image} src={image} alt={name} />
         <div className={style.details}>
            <h2 className={style.specie}>{species}</h2>
            <h2 className={style.gander}>{gender}</h2>
         </div>
      </div>
   );

}

export default Card;