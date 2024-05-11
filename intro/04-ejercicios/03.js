/**
 * Ejercicio 03
 * Indice validar que no sea menor a cero y que el elemento exista en el array
 */
function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return 'El elemento no existe en el array';
    }
    return arr[idx];
}

let resultado = getbyIdx([1, 2, 3, 4, 5], 2);
console.log(resultado); // 3