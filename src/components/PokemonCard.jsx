
  
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
  
  export default PokemonCard;