// Short-Circuit

// Falso: Valores falsy
// false
// 0
// ''
// null
// undefined
// NaN
let nombre = '';
let username = nombre || 'Anónimo';
console.log(username); // Anónimo

function fn1() {
    console.log('Soy función 1');
    return false;
}

function fn2() {
    console.log('Soy función 2');
    return true;
}

let valor = fn1() && fn2();