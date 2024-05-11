function Punto(x, y) {
  this.x = x;
  this.y = y;
  this.dibujar = function() { console.log('Dibujando...') }
}

const Point = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() { console.log('Dibujando...') }
`);

const p1 = new Punto(1, 2);

console.log(p1);

let punto = {z:7};

Punto.call(punto, 3, 4);
console.log(punto);
Punto.apply(punto, [5, 6]);
console.log(punto);