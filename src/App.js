import { useState } from 'react';
import axios from 'axios';

import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';

const App = () => {
   const [characters, setCharacters] = useState([]);
   const [cache, setCache] = useState([]);

   /* const onSearch = () => {
      const example = {
         id: 1,
         name: 'Rick Sanchez',
         status: 'Alive',
         species: 'Human',
         gender: 'Male',
         origin: {
            name: 'Earth (C-137)',
            url: 'https://rickandmortyapi.com/api/location/1',
         },
         image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
      };
      setCharacters([
         ...characters,
         example
      ])
   } */

   const onSearch = (id) => {
      if(!cache.includes(id)) {
         setCache([
            ...cache,
            Number(id)
         ])
         axios(`https://rickandmortyapi.com/api/character/${id}`)
            .then(({ data }) => {
               if (data.name) {
                  setCharacters((oldChars) => [...oldChars, data]);
               } else {
                  alert('¡No hay personajes con este ID!');
               }
            })
            .catch((error) => {
               alert('¡No hay personajes con este ID!');
            })
      }
   }

   const randomHandler = () => {
      const random = (Math.random() * 826).toFixed();
      onSearch(random);
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter (
			character => character.id !== Number(id)
		);
      setCharacters(charactersFiltered);
      const cacheFiltered = cache.filter (
			cacheEl => cacheEl.id !== Number(id)
		);
      setCache(cacheFiltered);
   }

   return (
      <div className='App'>
         <Nav onSearch={onSearch} randomHandler={randomHandler} />
         <Cards characters={characters} onClose={onClose} />
      </div>
   );
}

export default App;
