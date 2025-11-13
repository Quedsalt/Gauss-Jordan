//Codigo no funciona no ejecutar

let indiceslot = 0 // lo usare para pedir los indices de los arrays (slots)
let indicePivots = 0 // indice independiente (pivot)
let n1 // el numero  a multiplicar la fila
let respuestaFinal = 0

//FILAS 
//Entre menor sea el valor de la fila mas alto esta fila 1 es superior a las filas 1 y 2 y asi
let fila1 = [1, -1,  3, 13]
let fila2 = [1,  1,  1, 11]
let fila3 = [2,  2, -1,  7]



let matrizIdentidad = [1, 0, 0, 0, 1, 0, 0, 0, 1 ]
let matrizAntesIdentidad = [fila2[0], fila3[0], fila3[1], fila2[2], fila1[2], fila1[1]]
let matrizAntesFinal = [0, 0, 0, 0, 0, 0]

let matrizFinal = 
[
    fila1[0], fila1[1], fila1[2],
    fila2[0], fila2[1], fila2[2],
    fila3[0], fila3[1], fila3[2]
]

let filas = [fila1, fila2, fila3] //optengo los arrays de filas sin tener que poner 1 por 1


let pivot1 = fila1[0] //Los arrays se veian faciles pero no lo son
let pivot2 = fila2[1]
let pivot3 = fila3[2]

let pivot = [pivot1, pivot2, pivot3]  //lo posiciona en (1.1) pivot 2 (2.2), pivot 3 (3.3)
let pivotn = pivot[indicePivots]


let slot1 = fila2[0]
let slot2 = fila3[0]
let slot3 = fila3[1] //estas lineas de codigo me sacaron canas me costo mucho entender como implementar el metodo de gauss en codigo
let slot4 = fila2[2] //creo que no me funciono del todo
let slot5 = fila1[2]
let slot6 = fila2[1]

let slots = [slot1, slot2, slot3, slot4, slot5, slot6,]//creo que mejor voy a pasar de este tipo de variables se vuelve un codigo confuso y muy largo
let slot = slots[indiceslot] // utilizado para cambiar a que slot me dirijo

function arraysIguales(arr1, arr2) { //implemente este codigo de comparacion que hiso una IA pero no se si funcione mi codigo se bugueo re feo
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }
  return true
}

let paso = 0 // Contador para evitar bucles infinitos en caso de error

/*
en los primeros intentos despues de que el error de comparacion de la linea de abajo
  aparecio se me occurrio hacer un codigo algo asi matrizFinal[0] y asi susesibamente 1 por 1
  pero como son 9 cada 1 no se veia el final del codigo y no es un buen codigo mejor cambiarlo a otra cosa
  */
while (!arraysIguales(matrizFinal, matrizIdentidad) && paso < 10) {
  paso++
  
    if (slot === 0) { //creo que este es uno de las pocas lineas de codigo que si funcionan
        indiceslot += 1 
    }

    while(slot !== 0){
        if(pivot > slot) {
            n1 = pivot / slot  //recordar que n1 es el numero al que va multiplicar la fila
            //indicePivots es utilizado para saber que fila del pivot sumaremos
            for (let i = 0; i < filas[indicePivots].length; i++) { //Al parecer asi no funcina los arrays
                filas[indicePivots][i] *= n1
            }
            for (i = 0; i < filas[indicePivots].length; i++) {//enontre una manera de poder ejecutarlo pero se extiendes cantidades absurdas de codigo mejor hago un codigo diferente
                filas[indicePivots][i] *= -1
            }
            //suma la fila del pivot a la del slot
            filas[indicePivots] = filas[indicePivots].map((valor, indice) => valor + filas[indiceslot][indice])
        } else {
            n1 = slot / pivot  //cambia para que de el numero a multiplicar

            //indicePivots es utilizado para saber que fila del pivot sumaremos
            for (let i = 0; i < filas[indicePivots].length; i++) {
                filas[indicePivots][i] *= n1
            }
            for (i = 0; i < filas[indicePivots].length; i++) {
                filas[indicePivots][i] *= -1
            }
            //suma la fila del pivot a la del slot
            filas[indicePivots] = filas[indicePivots].map((valor, indice) => valor + filas[indiceslot][indice])
        }

        //se suponia que esto devia sacar del bucle pero no se como comparar 1 valor a 1 valor de los array en poco codigo
        if (matrizAntesIdentidad ===  matrizAntesFinal) { //al parecer este codigo tampoco funoona este es mi primer trabajo que que utilizo los arrays 
            //diviciones finalas
            fila1 = fila1 / pivot1
            fila2 = fila2 / pivot2
            fila3 = fila3 / pivot3
            //asigna a matriz final el mismo valor que matriz identidad terminando el siclo 
            matrizFinal = [ ...fila1.slice(0,3), ...fila2.slice(0,3), ...fila3.slice(0,3)]
        }
    }
}

//resultado final
respuestaFinal = fila1[3] + fila2[3] + fila3[3] 

console.log(respuestaFinal) //no dio lo que tenia que dar y ahora no se que de por que el codigo no me funciona

//en papel se ve mas bonito
//y funciona aqui no