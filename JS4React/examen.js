// Ejercicio 1
const numeros = [9,2,8,7,5,6,6,1,3,4,2,8,1,7,6];

/* Crea una función asíncrona que recorra el arreglo numeros y genere uno nuevo
llamado pares que contenga solo los pares de arreglo numeros */

async function obtenerPares(){
    const pares = numeros.filter((numero) => {
        return numero % 2 === 0;
    });
    return pares;
}

console.log(numeros);
console.log(obtenerPares());

// Ejercicio 2
estudiantes = [ { name: 'Mane', age: 15 }, { name: 'Andrea', age: 22 }, { name: 'Alma', age: 19 }, {
    name: 'Emma', age: 29 }, { name: 'Maria ', age: 13 },{ name: 'Luis', age: 16 },{ name: 'Yair', age: 21 },];

/* Crea una función asíncrona que recorra el arreglo estudiantes y que guarde en un
nuevo arreglo solo los nombres de los estudiantes que tienen mas de 18 años */ 

async function obtenerMayores(){
    const mayores = estudiantes.filter((estudiante) => {
        return estudiante.age > 18;
    }).map((estudiante) => {
        return estudiante.name;
    });
    return mayores;
}
console.log(estudiantes);
console.log(obtenerMayores());