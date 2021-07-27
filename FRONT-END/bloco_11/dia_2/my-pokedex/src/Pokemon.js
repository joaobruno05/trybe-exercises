import { Component } from 'react';
import './App.css';

class Pokemon extends Component {
  render() {
    const { name, type, averageWeight: { value, measurementUnit }, image } = this.props.info;
    return (
    <section className='pokemonCard'>
      <div className='pokemonInfo'>
        <p>{ name }</p>
        <p>{ type }</p>
        <p>{ value } { measurementUnit }</p>
      </div>
      <div className='pokemonImage'>
        <img src={ image } alt="pokemons" />
      </div>
    </section>
    )
  }
}

export default Pokemon;