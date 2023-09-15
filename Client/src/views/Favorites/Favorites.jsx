import { connect } from "react-redux";
import { useEffect, useState } from "react";
import Cards from "../../components/Cards/Cards";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import styleFavorites from "./Favorites.module.css"

const Favorites = ({myFavorites}) => {
    const dispatch = useDispatch();
    /* const [aux, setAux] = useState(false); */

    const handleOrder = (e) => {
        dispatch(orderCards(e.target.value));
        /* setAux(true); */
    }

    const handleFilter = (e) => {
        dispatch(filterCards(e.target.value));
    }

    useEffect(() => {
     }, [myFavorites]);
  
    return(
        <div className={styleFavorites.favContainer}>
            <select onChange={handleOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
                <option value="allCharacters">All characters</option>
            </select>
            <Cards characters={myFavorites}/>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(
    mapStateToProps,
    null
)(Favorites);