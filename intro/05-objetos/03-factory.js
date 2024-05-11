/**
 * Las factory functions son funciones que nos permiten crear objetos de manera dinámica. En lugar de tener que definir un objeto literal, podemos definir una función que devuelva un objeto con las propiedades que necesitamos.
 */
function crearUsuario(nombre, correo){
    return {
        nombre: nombre,
        correo: correo,
        activo: true,
        recuperarClave: function() {
            console.log('Recuperando clave...');
        },
    }
}

let usuario1 = crearUsuario('Nicolas', 'blabla@aaa');
let usuario2 = crearUsuario('Juan', 'juan@aaa');

console.log(usuario1);
console.log(usuario2);