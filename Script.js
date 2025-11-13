function arraysIguales(arr1, arr2) { //Una IA me hizo este comparador yo no encontre una manera de comparar los Arrays valor por valor sin que se extendiera 9 lineas de codigo cada array (<=a este codigo....)Linea 25
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (Math.abs(arr1[i] - arr2[i]) > 1e-10) return false
  }
  return true
}

//abs devuelve el valor absoluto 

// Filas
let fila1 = [1, -1, 3, 13] //me aprendi esta matriz de me moria
let fila2 = [1, 1, 1, 11]
let fila3 = [2, 2, -1, 7]

let filas = [fila1, fila2, fila3]
let matrizIdentidad = [1, 0, 0, 0, 1, 0, 0, 0, 1]

//esto agarra los 3 primeros numeros de las 3 filas 
let matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]

let paso = 0 //esto lo puse para que while no se volviese un siclo infinoto en caso de que salga errror
const maxPasos = 20

while (!arraysIguales(matrizFinal, matrizIdentidad) && paso < maxPasos) { //(<= a este codigo me refiero) | contexto en la primera linea de codigo
  paso++

  // Paso 1: Hacer ceros debajo del pivote (1,1)
  if (Math.abs(fila2[0]) > 1e-10) {
    let factor = fila2[0] / fila1[0]
    for (let i = 0; i < 4; i++) fila2[i] -= factor * fila1[i]//Haciendo este trabajo descubri que puedo poder todo el codigo for en 1 sola linea
  }
  if (Math.abs(fila3[0]) > 1e-10) {
    let factor = fila3[0] / fila1[0]
    for (let i = 0; i < 4; i++) fila3[i] -= factor * fila1[i]
  }

  // Paso 2: Hacer ceros debajo del pivote (2,2)
  if (Math.abs(fila3[1]) > 1e-10) {
    let factor = fila3[1] / fila2[1]
    for (let i = 0; i < 4; i++) fila3[i] -= factor * fila2[i]
  }

  // Paso 3: sacar pivotes (de abajo hacia arriba)
  if (Math.abs(fila3[2]) > 1e-10 && Math.abs(fila3[2] - 1) > 1e-10) {
    let factor = fila3[2]
    for (let i = 0; i < 4; i++) fila3[i] /= factor
  }
  if (Math.abs(fila2[1]) > 1e-10 && Math.abs(fila2[1] - 1) > 1e-10) {
    let factor = fila2[1]
    for (let i = 0; i < 4; i++) fila2[i] /= factor
  }
  if (Math.abs(fila1[0]) > 1e-10 && Math.abs(fila1[0] - 1) > 1e-10) {
    let factor = fila1[0]
    for (let i = 0; i < 4; i++) fila1[i] /= factor
  }

  // Paso 4: Hacer ceros ENCIMA de los pivotes (de abajo hacia arriba)
  // Encima del pivote (3,3)
  if (Math.abs(fila2[2]) > 1e-10) {
    let factor = fila2[2]
    for (let i = 0; i < 4; i++) fila2[i] -= factor * fila3[i]
  }
  if (Math.abs(fila1[2]) > 1e-10) {
    let factor = fila1[2]
    for (let i = 0; i < 4; i++) fila1[i] -= factor * fila3[i]
  }

  // Encima del pivote (2,2)
  if (Math.abs(fila1[1]) > 1e-10) {
    let factor = fila1[1]
    for (let i = 0; i < 4; i++) fila1[i] -= factor * fila2[i]
  }

  matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]
}


// Redondear resultados

//el  codigo falla si no tiene
const redondear = x => Math.round(x * 1e10) / 1e10//<= esta linea de codigo
//1e10 la puse para poder redondear decimales grandes que le puse a casi todo el codigo(es para eliminar los decimales que me seguian apareciendo cuando redondeaba con el anterior codigo)
console.log("x =", redondear(fila1[3]))
console.log("y =", redondear(fila2[3]))
console.log("z =", redondear(fila3[3]))

//Profe si lee esto odio a Gauss Jordan

/*
nota 12/11/2025 
1.odio a gauss jordan
2.se me olvido que el html y el css estaban echos para otro codigo que hice y no funciono
ahora tengo que modificarlos y no quiero :( 
3.ya mecione que odio a gaus jordan?
4.el metodo utilizado no lo entendi no tengo ni la menor idea de como hice que funcionara
pero funciona
5.hice ya 5 codigos distintos y este fue el unico que funciono
6.Al pricipio le pedi a una IA que me hiciera una calculadora de gauss jordan para guiarme y no entendi ni madres de como funcionaba ese codigo
*/
