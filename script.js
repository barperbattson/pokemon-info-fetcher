window.onload = async function() {
    getPokemon("Bulbasaur");
}

async function getPokemon(pokeId) {
    let url = "https://pokeapi.co/api/v2/pokemon/" + pokeId.toString().toLowerCase();
    
    let res = await fetch(url);
    let pokemon = await res.json();

    console.log(pokemon);

    let pokemonName = pokemon["name"].toUpperCase();
    let pokemonImg = pokemon["sprites"]["front_default"];
    let pokemonTypes = pokemon["types"];

    // Update Pokemon Info

    // The height of a Pokemon is in decimeters 
    // which is 1/10th of a meter 
    // i.e. 1dm = 0.1m

    // The weight of a pokemon is in hectograms 
    // which is 1/100th of a gram
    // i.e. 1hg = 0.01g

    document.getElementById("poke-img").src = pokemonImg;
    document.getElementById("poke-name").innerText = pokemonName;

    // Update Stats

    // This code... is byfar the slopiest, laziest code i have ever written, but it works.
    document.getElementById("height").innerText = `Height: ${pokemon["height"]/10} Meters`;
    document.getElementById("weight").innerText = `Weight: ${pokemon["weight"]/10} Kilograms`;
    document.getElementById("base-xp").innerText = `Base Experience: ${pokemon["base_experience"]}`;
    document.getElementById("typesDiv").innerHTML = "";
    for (let i = 0; i < pokemonTypes.length; i++) {
        let type = document.createElement("span");
        type.innerText = pokemonTypes[i]["type"]["name"].toUpperCase();
        type.classList.add(pokemonTypes[i]["type"]["name"]);
        type.classList.add("type-box");
        document.getElementById("typesDiv").append(type);
    }
}