import { useEffect, useState } from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions.js';


function Cards({ clean }) {

   const dispatch = useDispatch();
   const characters = useSelector(state => state.characters);
   const [chars, setChars] = useState(characters)

   const onClose = (id) => {
      const filteredChars = chars.filter(char => char.id !== id)
      setChars(filteredChars)
   }

   useEffect(() => {
      dispatch(actions.getAllCharacters());
      setChars(characters);
   }, [dispatch])

   return (
      <div>
         <div className={styles.clean}>
            <button className={styles.cleanButton} onClick={clean}>Clean</button>
         </div>
         <div className={styles.cardsStyle}>
            {
               chars?.map(({ name, species, gender, image, id, is_fav }) => {
                  return <Card
                     key={id}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={() => onClose(id)}
                     id={id}
                     is_fav={is_fav}
                  />
               })
            }
         </div>
      </div>
   )
}


export default Cards;