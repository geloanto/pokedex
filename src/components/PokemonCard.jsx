import PropTypes from 'prop-types';
  
  function PokemonCard({ pokemon }) {
    
  
    return (
        <figure className="card">
        <div className="pokemon-card">
          {pokemon.imgSrc ? (
            <img className="card-img" src={pokemon.imgSrc} alt={pokemon.name} />
          ) : (
            <p>???</p>
          )}
          <figcaption>{pokemon.name}</figcaption>
        </div>
        
            
        
      </figure>
    );
  }
  
  PokemonCard.propTypes = {
    pokemon: PropTypes.shape({
      name: PropTypes.string.isRequired,
      imgSrc: PropTypes.string,
    }).isRequired,
  };
  
  export default PokemonCard;