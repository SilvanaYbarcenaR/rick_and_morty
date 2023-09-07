import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"
import RMText from "../../assets/rick_morty.png";

const Nav = ({onSearch, randomHandler, logout}) => {
    const currentPath = useLocation();
    return(
        <header className={styleNav.header}>
            <div className={styleNav.leftHeader}>
            <img src={RMText} alt="Rick and Morty"/>
                <NavLink to="/home" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>About</NavLink>
                <NavLink to="/favorites" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Favorites</NavLink>
            </div>
            
            <div className={styleNav.rightHeader}>
                {currentPath.pathname === "/home" &&
                    <>
                        <SearchBar onSearch={onSearch} />
                        <button onClick={randomHandler}>Ramdon</button>
                    </>
                }
                <button onClick={() => logout(true)} className={styleNav.logout}>
                    Logout
                </button>
            </div>
        </header>
    )
}

export default Nav;