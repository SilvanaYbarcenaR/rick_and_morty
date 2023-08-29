import { NavLink } from "react-router-dom";
import cardStyles from "./Card.module.css";

const Card = ({id, name, status, species, gender, image, onClose}) => {
   return (
      <div className={cardStyles.card}>
         <button className={cardStyles.close} onClick={() => onClose(id)}><span>X</span></button>
         <NavLink to={`/detail/${id}`}>
            <div><img src={image} alt={name} /></div>
            <h2>{name}</h2>
            <div className={cardStyles.cardDescription}>
               <h4>Specie: <span>{species}</span></h4>
               <h4>Gender: <span>{gender}</span></h4>
            </div>
        </NavLink>
      </div>
   );
}

export default Card;