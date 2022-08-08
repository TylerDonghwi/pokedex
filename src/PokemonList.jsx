import React from 'react'
import './pokemon.css'

export default function pokemonList({ pokemon }) {
    console.log(pokemon.map(p => (
        p
    )))

    return (
        <div>
            {pokemon.map(p => (
                <div className='pokemon' key={p}>{p}</div>
            ))}
        </div>
    )
}
