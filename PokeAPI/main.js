let parrafoDelPokemon1 = document.getElementById('poke1');
let parrafoDelPokemon2 = document.getElementById('poke2');
let parrafoDelPokemon3 = document.getElementById('poke3');

fetch('https://pokeapi.co/api/v2/pokemon/1')
  .then(respuesta => respuesta.json())
  .then(respuestaDePokemon1 => {
    parrafoDelPokemon1.innerHTML = `
      <p>Nombre: ${respuestaDePokemon1.name}</p>
      <p>Peso: ${respuestaDePokemon1.weight}</p>
      <img src=${respuestaDePokemon1.sprites.front_shiny} />
    `;
    // CREAR ELEMENTO HTML LISTA <ul></ul>
    let abilitiesListElement = document.createElement('ul');
    // ITERAMOS EL ARRAY DE abilities DE NUESTRO POKEMON
    respuestaDePokemon1.abilities.forEach(function(ability) {
      // AGREGANDO AL ELEMENTO <ul> CADA HABILIDAD
      // Y CADA HABILIDAD LA METIMOS DENTRO DE UN ELEMENTO <li>
      abilitiesListElement.innerHTML = abilitiesListElement.innerHTML + `
        <li>${ability.ability.name}</li>
      `;
    });
    // METEMOS EL ELEMENTO <ul> Y SUS RESPECTIVOS ELEMENTOS <li>
    // DENTRO DEL PARRAFO PRINCIPAL DONDE YA ESTAN DENTRO EL PARRAFO
    // DEL NOMBRE, PESO Y SU IMAGEN
    parrafoDelPokemon1.appendChild(abilitiesListElement);
  })
  .catch( err => console.log(err))

  fetch('https://pokeapi.co/api/v2/pokemon/18')
  .then(respuesta => respuesta.json())
  .then(respuestaDePokemon2 => {
    console.log(respuestaDePokemon2);
    parrafoDelPokemon2.innerHTML = `
      <p>Nombre: ${respuestaDePokemon2.name}</p>
      <p>Peso: ${respuestaDePokemon2.weight}</p>
      <img src=${respuestaDePokemon2.sprites.other.home.front_default} width=70px/>
    `;
    let abilitiesListElement = document.createElement('ul');
    respuestaDePokemon2.abilities.forEach(function(ability) {
      abilitiesListElement.innerHTML = abilitiesListElement.innerHTML + `
        <li>${ability.ability.name}</li>
      `;
    })
    //EL appendChild ES PARA METER ELEMENTOS "HIJOS" HTML A UN ELEMENTO HTML.
    parrafoDelPokemon2.appendChild(abilitiesListElement);
  })
  .catch( err => console.log(err))

  fetch('https://pokeapi.co/api/v2/pokemon/25')
  .then(respuesta => respuesta.json())
  .then(respuestaDePokemon3 => {
    console.log(respuestaDePokemon3);
    parrafoDelPokemon3.innerHTML = `
      <p>Nombre: ${respuestaDePokemon3.name}</p>
      <p>Peso: ${respuestaDePokemon3.weight}</p>
      <img src=${respuestaDePokemon3.sprites.other.home.front_default} width=70px/>
    `;
    let abilitiesListElement = document.createElement('ul');
    respuestaDePokemon3.abilities.forEach(function(ability) {
      abilitiesListElement.innerHTML = abilitiesListElement.innerHTML + `
        <li>${ability.ability.name}</li>
      `;
    })
    //EL appendChild ES PARA METER ELEMENTOS "HIJOS" HTML A UN ELEMENTO HTML.
    parrafoDelPokemon3.appendChild(abilitiesListElement);
  })
  .catch( err => console.log(err))
