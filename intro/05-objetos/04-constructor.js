/* Funciones Constructoras
Las funciones constructoras son funciones que nos permiten crear un objeto con las propiedades que le indiquemos. Para crear un objeto con una función constructora, debemos usar la palabra reservada new seguida del nombre de la función. Por convención, el nombre de una función constructora debe empezar con mayúscula.
*/

function Usuario(nombre, correo){
    this.nombre = nombre;
    this.correo = correo;
    this.activo = true;
    this.recuperarClave = function() {
        console.log('Recuperando clave...');
    };
}

let usuario1 = new Usuario('Nicolas', 'blabla@aaa');

console.log(usuario1);