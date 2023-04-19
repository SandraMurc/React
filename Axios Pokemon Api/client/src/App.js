import axios from 'axios';
import React, { useState } from 'react';

import './App.css';

function App() {

  const [personajes, setPersonajes] = useState([]);

  const buscarPokemon = async () => {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=900&offset=0')
      setPersonajes(response.data.results);
    }
    catch (error) {
      console.log(error);
    }
  };
  
  return (
    <>
      <button onClick={() => buscarPokemon()} type="button">Buscar Pokemon</button>
      <ul>
        {personajes.map((pokemon) =>
          <li>{pokemon.name}</li>
        )}
      </ul>
    </>
  );
}

export default App;