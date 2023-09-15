import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import cardStyles from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { useState, useEffect } from "react";

const Card = ({id, name, species, gender, image, onClose, addFav, removeFav, myFavorites}) => {
   const [isFav, setIsFav] = useState(false);
   
   const handleFavorite = (remove) => {
      if(isFav && remove) {
         setIsFav(false);
         removeFav(id);
      } else {
         setIsFav(true);
         addFav({id, name, species, gender, image})
      }
   }

   const handleClose = (id) => {
      setIsFav(false);
      removeFav(id);
      onClose(id);
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <div className={cardStyles.card}>
         {
            isFav ? (
               <button className={cardStyles.favorite} onClick={handleFavorite}>❤️</button>
            ) : (
               <button className={cardStyles.favorite} onClick={handleFavorite}>🤍</button>
            )
         }
         {onClose && <button className={cardStyles.close} onClick={() => handleClose(id)}><span>X</span></button>}
         <NavLink to={`/detail/${id}`}>
            <div><img src={image} alt={name} loading="lazy"/></div>
            <h2>{name}</h2>
            <div className={cardStyles.cardDescription}>
               <h4>Specie: <span>{species}</span></h4>
               <h4>Gender: <span>{gender}</span></h4>
            </div>
        </NavLink>
      </div>
   );
}

const mapStateToProps = (state) => {
   return {
      myFavorites: state.myFavorites
   }
}

const mapDispacthToProps = (dispatch) => {
   return {
      addFav: (character) => dispatch(addFav(character)),
      removeFav: (id) => dispatch(removeFav(id))
   }
}

export default connect(
   mapStateToProps,
   mapDispacthToProps
)(Card);