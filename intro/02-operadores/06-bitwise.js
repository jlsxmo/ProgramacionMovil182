// bit: 0 1
// Byte: 8 bits
// Byte: 00000000 -> 0
// Byte: 00000001 -> 1
// Byte: 00000010 -> 2
// Byte: 00000011 -> 3
// Byte: 00000100 -> 4
// ...

// Operadores Bitwise
// & -> AND
// | -> OR
// ^ -> XOR
// ~ -> NOT
// << -> Desplazamiento a la izquierda
// >> -> Desplazamiento a la derecha
// >>> -> Desplazamiento a la derecha sin signo
// <<< -> Desplazamiento a la izquierda sin signo

console.log(1 | 2) // 00000001 | 00000010 = 00000011 -> 3
console.log(1 | 4) // 00000001 | 00000100 = 00000101 -> 5
console.log(3 | 4) // 00000011 | 00000100 = 00000111 -> 7

console.log(1 & 2) // 00000001 & 00000010 = 00000000 -> 0
console.log(1 & 4) // 00000001 & 00000100 = 00000000 -> 0
console.log(3 & 4) // 00000011 & 00000100 = 00000000 -> 0