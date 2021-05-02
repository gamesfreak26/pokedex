import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
import { useState, useEffect } from 'react';

function PokemonList() {
    
  const uri = "https://pokeapi.co/api/v2/generation/1"

  const [generation1, setGeneration1] = useState(null)

  useEffect(() => {
    fetchData()
  }, [])
    
  const fetchData = async () => {
    const response = await axios.get(uri)
    setGeneration1(response.data)
    console.log(response.data)
  }
  
  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

    return (
    <div className="container">
      <h1>Pokemon</h1>
      <p>Choose from the following pokemon:</p>
      <h3>Generation 1</h3>
      <div className="pokemon-list">
        {generation1 && generation1.pokemon_species.map((pokemon, index) => {
          return <div><a href={pokemon.name} key={index}>{Capitalize(pokemon.name)}</a><br /></div>
        })}
      </div> 
    </div>
        
    )

    
}

export default PokemonList;