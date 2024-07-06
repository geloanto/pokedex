const pokemonList = [
    {
      name: "Bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    { name: "Mew", imgSrc: undefined },
  ];
  
  function PokemonCard() {
    const pokemon = pokemonList[0];
  
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