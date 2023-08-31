import { connect } from "react-redux";
import { useEffect } from "react";
import Cards from "../components/Cards/Cards";

const Favorites = ({myFavorites}) => {
    useEffect(() => {
     }, [myFavorites]);
  
    return(
        <Cards characters={myFavorites}/>
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