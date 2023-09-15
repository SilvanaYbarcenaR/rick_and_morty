import { NavLink, useLocation } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import styleNav from "./Nav.module.css"
import RMText from "../../assets/rick_morty.png";
import { FaRandom } from "react-icons/fa";
import { MdOutlineLogout } from "react-icons/md";

const Nav = ({onSearch, randomHandler, logout}) => {
    const currentPath = useLocation();
    const email = JSON.parse(sessionStorage.getItem("auth")).email.split("@")[0];
    return(
        <header className={styleNav.header}>
            <div className={styleNav.leftHeader}>
            <img className={styleNav.imgHeader} src={RMText} alt="Rick and Morty"/>
                <NavLink to="/home" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Home</NavLink>
                <NavLink to="/about" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>About</NavLink>
                <NavLink to="/favorites" style={({isActive}) => isActive ? {borderBottom: '2px solid #76b13e', fontWeight: '700'} : {}}>Favorites</NavLink>
            </div>
            
            <div className={styleNav.rightHeader}>
                {currentPath.pathname === "/home" &&
                    <>
                        <SearchBar onSearch={onSearch} />
                        <button onClick={randomHandler} className={styleNav.random}><FaRandom /></button>
                    </>
                }
                <p>Bienvenid@ {email}</p>
                <button onClick={() => logout(true)} className={styleNav.logout}>
                    <MdOutlineLogout /><span>LOGOUT</span>
                </button>
            </div>
        </header>
    )
}

export default Nav;