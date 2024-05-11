/**
 * Ejercicio 05
 * Crear algoritmo que devuelva número menor y mayor de un array
 */

let array = [-5, -100, 15, 74, 25, 48];

function getMenorMayor(arr) {
    let menor = array[0];
    let mayor = array[0];

    for (numero of arr){
        menor = menor < numero ? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [menor, mayor];
}

let numeros = getMenorMayor(array);
console.log(numeros); // [1, 5]