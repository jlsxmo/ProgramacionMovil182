/**
 * Crear array de longitud N, y que sus elementos sean los números del 1 al N.
 */
let longitud = 20;

function crearArray(n){
   let array = [];

   if (n < 1){
       return array;
   }

   for (let i = 0; i < n; i++){
       array[i] = i + 1;
   }
   return array;
}

let resultado = crearArray(longitud);
console.log(resultado);