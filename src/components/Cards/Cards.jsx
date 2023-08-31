import Card from '../Card/Card';
import cardsStyle from "./Cards.module.css";

const Cards = ({characters, onClose}) => {
   return (
      <div className={cardsStyle.cardsContainer}>
         {
            characters.map(({ id, name, species, gender, image}) => {
               return (
                  <Card
                     key={id} 
                     id={id}  
                     name={name}
                     species={species}
                     gender={gender}
                     image={image}
                     onClose={onClose && onClose} 
                  />
               )
            })
         }
      </div>
   )
}

export default Cards;