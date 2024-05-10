function suma(a, b) // a y b son argumentos
{
    console.log(arguments); // arguments es un objeto que contiene todos los argumentos que se pasaron a la función
    return a + b;
}

let resultado = suma(5, 6); // 5 y 6 son parámetros
console.log(resultado);