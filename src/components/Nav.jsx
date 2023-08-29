import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({onSearch, randomHandler}) => {
    return(
        <>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
            <button>
                <NavLink to="/about">About</NavLink>
            </button>
            <SearchBar onSearch={onSearch} />
            <button onClick={randomHandler}>Ramdon</button>
        </>
    )
}

export default Nav;