import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';

function Cards({ characters, onClose, clean, list }) {

   return (
      <div>
         <div className={styles.clean}>
            <button className={styles.cleanButton} onClick={clean}>Clean</button>
         </div>
         <div className={styles.cardsStyle}>
            {
               characters.map(({ name, species, gender, image, id }, index) => {
                  return <Card
                     key={index}
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={() => onClose(id)}
                     id={id}
                  />
               })
            }
         </div>
      </div>
   )
}
            

export default Cards;