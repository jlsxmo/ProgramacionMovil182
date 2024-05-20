//función
/*
function suma(a, b) {
    return a + b;
}

console.log(suma(2, 3)); // 5*/

//FatArrow function versión simplificada
const suma = (a, b) => a + b;

/* También se puede escribir así:
const suma = (a, b) => {
    return a + b;   
}
*/
console.log(suma(2, 3)); // 5

const usuarios = {
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
};