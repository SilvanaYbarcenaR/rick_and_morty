import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
    const id = useParams().id;
    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
    }, [id]);
    
    return (
        <div>
            <h1>{character.name}</h1>
            <p>STATUS | {character.status}</p>
            <p>GENDER | {character.gender}</p>
            <p>SPECIE | {character.species}</p>
            <p>ORIGIN | {character.origin?.name}</p>
            <div>
                <img src={character.image} alt={character.name} />
            </div>
        </div>
    )
}

export default Detail;