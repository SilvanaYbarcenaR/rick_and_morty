import { useState } from "react";
import styleSearch from "./SearchBar.module.css";
import { ImSearch } from "react-icons/im";

const SearchBar = ({onSearch}) => {
   const [id, SetId] = useState("");

   const handleChange = (event) => {
      SetId(event.target.value)
   }

   return (   
      <div className={styleSearch.searchBar}>
         <input type='search' name="search" value={id} onChange={handleChange} placeholder="ID" />
         <button onClick={() => {onSearch(id)}}><ImSearch /></button>
      </div>
   );
}

export default SearchBar;