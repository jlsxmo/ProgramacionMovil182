// Persona de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

// Objeto literal
let personaje = {
    nombre: "Tanjiro", // par llave-valor
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje);
console.log(personaje.nombre);
console.log(personaje["anime"]);

// Modificar propiedades
personaje.edad = 13;

personaje["edad"] = 16;

// Eliminar propiedades
delete personaje.anime;
console.log(personaje);