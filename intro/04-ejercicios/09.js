
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

function toCollection(arr){
   let collection = [];
   for (idx in arr){
       let elemento = arr[idx];
       collection[idx] = elemento[1];
       collection[idx].id = elemento[0];
   }
   return collection;
}

let resultado = toCollection(pares);
console.log(resultado); 