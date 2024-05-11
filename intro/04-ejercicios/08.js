/**
 * Ejercicio 08
 * Crear algoritmo que tome un array de objetos y devuelva un array de pares
 */
let array = [{
    id: 1,
    name: 'Nicolas'
}, {
    id: 2,
    name: 'Santiago'
}, {
    id: 3,
    name: 'Valentina'
}];

let pares = [
    [1, {id: 1, name: 'Nicolas'}],
    [2, {id: 2, name: 'Santiago'}],
    [3, {id: 3, name: 'Valentina'}]
]

function toPairs(){
    let pairs = [];
    for (idx in array){
        let elemento = array[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;    
}

let resultado = toPairs(array);
console.log(resultado); 