import React, { useState, useEffect } from 'react';
import PokemonList from './PokemonList';
import axios from 'axios'

function App() {

  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [previousPageUrl, setPreviousPageUrl] = useState("")



  useEffect(() => {
    axios.get(currentPageUrl).then(res => {
      setNextPageUrl(res.data.next)
      setPreviousPageUrl(res.data.previous)
      setPokemon(res.data.results.map(p => p.name))
    })
  }, [currentPageUrl])



  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
