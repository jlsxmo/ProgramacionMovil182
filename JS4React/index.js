//función
/*
function suma(a, b) {
    return a + b;
}

console.log(suma(2, 3)); // 5*/

//FatArrow function versión simplificada
//const suma = (a, b) => a + b;

/* También se puede escribir así:
const suma = (a, b) => {
    return a + b;   
}
*/
/*
console.log(suma(2, 3)); // 5

const usuario = {
    nombre: 'Ivan',
    apellido: 'Guerra',
    edad: 36,
    direccion: {
        pais:'Mexico',
        ciudad:'Qro',
        calle:'La misma 123',
    },
    amigos: ['Alex', 'Carlos'],
    estatus: true,
    enviaCorreo: enviarCorr=()=> 'enviando...'
};


// Propiedades de un objeto
//console.log(usuario);
//console.log(usuario.nombre);
//console.log(usuario.direccion.calle);
//console.log(usuario.amigos);

// Métodos de un objeto
console.log(usuario.enviaCorreo());
*/
/*
// Trabajo con el DOM
const titulo = document.createElement('h1');
titulo.innerText = 'Soy un título creado con JS';
document.body.append(titulo);

const boton = document.createElement('button');
boton.innerText = 'Presioname';
document.body.append(boton);

boton.addEventListener('click', function() {
    //console.log('Evento click ejecutado');
    titulo.innerText = 'Evento click ejecutado';
    alert('Exito');
});
*/
// Trabajo con Arreglos
const nombres = ['alan', 'Isa', 'Pablo', 'Juan Luis'];
/*
// for clásico
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

// forEach
nombres.forEach(function(nombre) {
    console.log(nombre);
});*/
/*
// Map sirve para recorrer un arreglo y devolver un nuevo arreglo
const array2 = nombres.map(function(nombre) {
    console.log(nombre);
    return nombre;
});
console.log(nombres);
console.log(array2);
*/
/*
// Función find: Ubicar elementos en un arreglo
const resultado = nombres.find(function(nombre) {
    if (nombre === 'Pablo') {
        return nombre;
    }
});
console.log(resultado);
*/

/*
// Función filter: Recorre el arreglo filtrando resultado en otro
const resultado = nombres.filter(function(nombre) {
   if (nombre != 'Pablo') {
       return nombre;
   }
});
console.log(resultado);
console.log(nombres);
*/

/*
// Función Concat: Concatena arreglos sin importar el tipo de dato
const edades = [78, 89, 12, 8, 10, 15];
console.log(nombres.concat(edades));

// Spread Operator: Permite concatenar arreglos de una forma más sencilla
console.log(...nombres, ...edades);
*/


// Módulos: Import & Export
// Importar
//import { suma, resta } from "./calculadora.js";
import * as calc from "./calculadora.js";

console.log(calc.suma(45, 54));
console.log(calc.resta(45, 5));
