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