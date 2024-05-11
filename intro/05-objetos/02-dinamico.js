/**
 * const realmente no protege el objeto, sino que protege la referencia a la que apunta, es decir, no se puede cambiar la referencia (el tipo de dato) pero sí se pueden modificar las propiedades del objeto.
 */
const usuario = {id: 1};

// Agregar propiedades
usuario.nombre = 'Nicolas';
usuario.guardar = function() {
    console.log('Guardando usuario...');
};
usuario.guardar();

delete usuario.nombre;
delete usuario.guardar;
console.log(usuario);

/*
Si queremos que un objeto no pueda ser modificado, podemos usar Object.freeze(objeto) para congelarlo. Esto previene que se agreguen, modifiquen o eliminen propiedades del objeto. Sin embargo, no previene que se modifiquen las propiedades de los objetos anidados.
*/
const usuario2 = Object.freeze({
    id: 1,
    nombre: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 123,
    },
    activo: true,
    recuperarClave: function() {
        console.log('Recuperando clave...');
    }
});

// Agregar propiedades/modificar propiedades
usuario2.nombre = 'Juan'; // No se permite
usuario2.apellido = 'Perez'; // No se permite

console.log(usuario2);

/**
 * Si solo queremos prevenir que se agreguen o eliminen propiedades, pero permitir que se modifiquen, podemos usar Object.seal(objeto).
 */
const usuario3 = Object.seal({
    id: 1,
    nombre: 'Nicolas',
    direccion: {
        calle: 'Queen st',
        numero: 123,
    },
    activo: true,
    recuperarClave: function() {
        console.log('Recuperando clave...');
    }
});

// Agregar propiedades/modificar propiedades
usuario3.nombre = 'Juan'; // Permitido
usuario3.apellido = 'Perez'; // No permitido

console.log(usuario3);