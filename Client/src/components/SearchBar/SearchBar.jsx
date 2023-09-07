import { useState } from "react";
import styleSearch from "./SearchBar.module.css"

const SearchBar = ({onSearch}) => {
   const [id, SetId] = useState("");

   const handleChange = (event) => {
      SetId(event.target.value)
   }

   return (
      <div className={styleSearch.searchBar}>
         <input type='search' name="search" value={id} onChange={handleChange} placeholder="ID" />
         <button onClick={() => {onSearch(id)}}>Agregar</button>
      </div>
   );
}

export default SearchBar;