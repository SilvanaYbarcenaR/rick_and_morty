import { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, Navigate, useNavigate } from 'react-router-dom';

import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import Detail from './views/Detail';
import Login from './views/Login/Login';
import About from './views/About/About';
import Error from './views/Error/Error';
import Favorites from './views/Favorites/Favorites';

const App = () => {
   const [characters, setCharacters] = useState([]);
   const [cache, setCache] = useState([]);
   const [access, setAccess] = useState(false);
   const [errorLogin, setErrorLogin] = useState("");
   const currentPath = useLocation();
   const navigate = useNavigate();
   const storage = sessionStorage;
   const EMAIL = "silvana.ybarcena@gmail.com";
   const PASSWORD = "sayr2207";
   const location = useLocation();

   const classUrl = location.pathname.slice(1);

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
         /* axios(`https://rickandmortyapi.com/api/character/${id}`) */
         axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
   
   const login = (userData) => {
      if (userData.password === PASSWORD && userData.email === EMAIL) {
         setAccess(true);
         storage.setItem('auth', JSON.stringify({...userData, auth: true}));
         setErrorLogin("");
         navigate('/home');
      } else {
         setErrorLogin("Incorrect credentials");
      }
   }

   const logout = (logout) => {
      setAccess(!logout);
      storage.clear();
      navigate('/');
   }

   useEffect(() => {
      if(storage.length === 0) {
         !access && navigate('/');
      }
   }, [access]);

   return (
      <div className={`App ${classUrl}`}>
         <div className="space"></div>
         {(currentPath.pathname !== "/" && currentPath.pathname !== "/error") && <Nav onSearch={onSearch} randomHandler={randomHandler} logout={logout} />}
         <Routes>
            <Route path="/" element={<Login login={login} errorLogin={errorLogin}/>} />
            <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>}/>
            <Route path="/favorites" element={<Favorites/>}/>
            <Route path="/error" element={<Error/>}/>
            <Route path="*" element={<Navigate to='/error'/>} />
         </Routes>
      </div>
   );
}

export default App;