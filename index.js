// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
//     .then(response =>{
//         if(!response.ok){
//             throw new Error("Unable to fetch the resources", response.status);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data.id))
//     .catch(error => console.error('error fetching',error));
// ;
document.getElementById("pokemonName").addEventListener("keydown", function(e) {
    if(e.key === "Enter"){
        fetchData();
    }
});
fetchData();
async function fetchData() {

    try {
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase().trim();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        // const response = await fetch(`https://pokeapi.co/api/v2/pokemon/pikachu`);
        if (!pokemonName) {
    throw new Error("Please enter a Pokémon name.");
}
        if (!response.ok) {
            alert("Please enter a valid Pokémon name.");
            throw new Error("Unable to fetch the resources", response.status)
        }
        
        // // Check data validity
        // if (!data.sprites?.front_default || !data.stats[1] || !data.abilities[0]) {
        //     throw new Error("Incomplete Pokémon data received from API.");
        // }
        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        // DOM Elements
        const imgElement = document.getElementById("pokemonSprite");
        // const pokemonIdElement = document.getElementById("name");
        const pokeName = document.getElementById("PokeName");
        const pokemonId = document.getElementById("pokemonId");
        const pokemonAttack = document.getElementById("pokemonAttack");
        const pokemonAbility = document.getElementById("pokemonAbility");
        const card = document.getElementById("card");
        card.style.display = "block";
        imgElement.src = data.sprites.front_default;
        imgElement.style.display = "block";
        pokeName.textContent = `${data.name}`;
        pokemonId.textContent = `Pokemon ID: ${data.id}`;
        pokemonAttack.textContent = `Pokemon Attack: ${data.stats[1].base_stat}`;
        pokemonAbility.textContent = `Pokemon Ability: ${data.abilities[0].ability.name}`;
        // pokemonIdElement.textContent = `Pokemon ID: ${data.id}, Name: ${data.name}, Ability: ${data.abilities[0].ability.name}, Attack: ${data.stats[1].base_stat}`;
        console.log(data.id);
    } catch (error) {
        console.error("error", error);
    }
}