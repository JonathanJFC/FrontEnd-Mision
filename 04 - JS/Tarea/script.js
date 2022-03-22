const pokemonContainer = document.querySelector('.pokemon-container')

const fetchPokemon = () => 
{
    const pokeName =  document.getElementById("pokeName");
    let pokeInput =  pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}/`;
    fetch(url).then((res) => 
    {
        if(res.status != "200")
        {
            console.log(res);
            pokeImage("./img/pokeball.png");
        }
        else
        {
            return res.json();
        }        
    }).then((data) => 
    {     
        
        CrearPokemon(data);
    /*     let pokeImg = data.sprites.front_default;
        let pokeNames = data.name;
        let pokeId = data.id;
        const sprite = data.sprites.front_default;
        const { stats, types} = data;

        pokeImage(pokeImg);
        pokeNam(pokeNames);
        pokeIds(pokeId); */
    })
}




//fetchPokemon();

const pokeImage = (url) => 
{
  const pokeImg = document.getElementById("pokeImg"); 
  pokeImg.src = url;
 /*    const sprite = data.sprites.front_default;
    const { stats, types} = data;
    
    pokeImg.setAttribute('src', sprite); */

}  

const pokeNam = (url) => 
{
    const pokeNames = document.getElementById("pokeNombre");
    pokeNames.value = url;
} 

const pokeIds = (url) => 
{
    const pokeId = document.getElementById("pokeId");
    pokeId.value = url;
} 
/*---------------------------------------------------------------------------------------------*/ 

function fetchPokemons(number)
{
    for (let i = 1; i <= number; i++)
    {
        fetchPokemon(i);
    }
}

function CrearPokemon(pokemon)
{
    const card = document.createElement('div');
    card.classList.add('pokemon-block');

    const spriteContainer = document.createElement('div');
    spriteContainer.classList.add('img-container');
    
    const sprite = document.createElement('img');
    /* sprite.src = pokemon.sprites.front_default */
    sprite.src = pokemon.sprites.other.dream_world.front_default


    spriteContainer.appendChild(sprite); 

    const number = document.createElement('p');
    number.textContent = `#${pokemon.id.toString().padStart(3, 0)}`;

    const name = document.createElement('p');
    name.classList.add('name');
    name.textContent = pokemon.name;

    const type = document.createElement('p');
    type.classList.add('type');
    type.textContent = `Tipo  ${pokemon.types[0].type.name}`;

    const hp = document.createElement('p');
    hp.classList.add('hp');
    hp.textContent = `HP ${pokemon.stats[0].base_stats}`;
    
    const experience = document.createElement('p');
    experience.classList.add('experience');
    experience.textContent = `Experencia  ${pokemon.base_experience}`;


    card.appendChild(spriteContainer);
    card.appendChild(number);
    card.appendChild(name);
    card.appendChild(type)
    card.appendChild(hp)
    card.appendChild(experience)

     pokemonContainer.appendChild(card);  
}

const ColorPokemon =
{
    normal:''
}