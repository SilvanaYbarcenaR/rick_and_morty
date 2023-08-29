import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './pages/About';
import Detail from './components/Detail';
import Error from './pages/Error/Error';

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
         <div className="space"></div>
         <Nav onSearch={onSearch} randomHandler={randomHandler} />
         <Routes>
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path=":error" element={<Error/>} />
         </Routes>
      </div>
   );
}

export default App;
