let obj = {};
let obj2 = new Object();

/**
 * new Aray() []
 * new String() '' "" ``
 * new Number() 1 2 3
 * new Boolean() true false
 */

function Usuario(){
    this.nombre = 'Chanchito feliz';
}
let usuario = new Usuario();
console.log(usuario.constructor);

const s1 = "1 + 1";
const s2 = new String("1 + 1");
console.log(eval(s1), eval(s2));

console.log(s2.valueOf());