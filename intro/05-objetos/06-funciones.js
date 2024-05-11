function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario;
let usuario = new U('Chanchito feliz');

console.log(usuario);

function of(Fn, arg){
    return new Fn(arg);
}

let usuario1 = of(Usuario, 'Chanchito feliz');
console.log(usuario1);

function returned(){
    return function(){
        console.log('Soy una función');
    }
}

let saludo = returned();
saludo();