import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"

const Nav = ({onSearch, randomHandler, logout}) => {
    return(
        <header className={styleNav.header}>
            <div className={styleNav.leftHeader}>
                <NavLink to="/home" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>About</NavLink>
                <NavLink to="/favorites" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Favorites</NavLink>
            </div>
            <div className={styleNav.rightHeader}>
                <SearchBar onSearch={onSearch} />
                <button onClick={randomHandler}>Ramdon</button>
                <button onClick={() => logout(true)}>
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Nav;