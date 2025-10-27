
//Search
let searchBtn = document.querySelector("#search"); //search button

searchBtn.addEventListener('click', newPokemon)

async function newPokemon() {
    try {

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`) 

        if(!response.ok){
            throw new Error("Could not fetch resource")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        let pokemonType_1 = data.types[0].type.name
        let pokemonType_2 = data.types[1]?.type.name
        
        const imgElement = document.getElementById("pokemonSprite")
        const card = document.getElementById("card");
    

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";

        console.log(data)
        console.log(pokemonType_1)
        console.log(pokemonType_2)

        const typeContainer = document.getElementById("typeContainer");
        //clears result
        typeContainer.innerHTML = "";

        
        // Loop through each type and create type badge
         data.types.forEach(t => {
            const typeName = t.type.name;
            const typeDiv = document.createElement("div");
            typeDiv.classList.add("type", typeName);
            typeDiv.textContent = typeName;
            typeContainer.appendChild(typeDiv);
        });
        
        card.style.display = "block";
    
    }
    catch(error) {
        alert("Pokemon not found")
        console.error(error)
    }
}

