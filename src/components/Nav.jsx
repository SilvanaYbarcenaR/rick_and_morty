import { Link, NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";

const Nav = ({onSearch, randomHandler, logout}) => {
    return(
        <>
            <button>
                <NavLink to="/home">Home</NavLink>
            </button>
            <button>
                <NavLink to="/about">About</NavLink>
            </button>
            <button onClick={() => logout(true)}>
                Logout
            </button>
            <SearchBar onSearch={onSearch} />
            <button onClick={randomHandler}>Ramdon</button>
        </>
    )
}

export default Nav;