import { Component } from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends Component {
  render() {
    return (
      <div className='pokemon'>
        <h1 className='title'>Pokedex</h1>
        { pokemons.map((info) => (
        <Pokemon key={ info.id } info={ info } />
        ))}
      </div>
    )
  }
}

export default Pokedex;