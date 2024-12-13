import React from 'react'
import './pokemondata.css'

const Pokemondata = (p)=> {
    return(
    <p>
    <img 
    src ={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
    alt = ''> 
    </img>
    <br />
    id: {p.id} <br></br>
    name: {p.name}<br></br>
    type: {p.type}<br></br>
    base: {p.base}<br></br>
    </p>)
} 

export default Pokemondata