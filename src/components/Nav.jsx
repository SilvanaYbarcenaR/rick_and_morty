import SearchBar from "./SearchBar";

const Nav = ({onSearch, randomHandler}) => {
    return(
        <>
            <SearchBar onSearch={onSearch} />
            <button onClick={randomHandler}>Ramdon</button>
        </>
    )
}

export default Nav;