/**
 * Ejericio 6
 * Crear algoritmo que devuelva la cantidad de números positivos en un array
 */
let array = [-5, -100, 15, 74, 25, 48];

function cuantosPositivos(arr) {
    let contador = 0;
    for (numero of arr){
        if (numero > 0) {
            contador++;
        }
    }
    return contador;
}
let resultado = cuantosPositivos(array);
console.log(resultado);