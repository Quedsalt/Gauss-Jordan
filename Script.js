let indice = 0 // lo usare para pedir los indices de los arrays
let indicePivots = 0
let n1 // el numero  a multiplicar la fila

//FILAS 
//Entre menor sea el valor de la fila mas alto esta fila 1 es superior a las filas 1 y 2 y asi
let fila1 = [1, -1,  3, 13]
let fila2 = [1,  1,  1, 11]
let fila3 = [2,  2, -1,  7]



let matrizIdentidad = [1, 0, 0, 0, 1, 0, 0, 0, 1 ]

let matrizFinal = [ ...fila1.slice(0,3), ...fila2.slice(0,3), ...fila3.slice(0,3)];

let filas = [fila1, fila2, fila3]


let pivot1 = fila1[0]
let pivot2 = fila2[1]
let pivot3 = fila3[2]
let pivots = [pivot1, pivot2, pivot3]

let pivotl = [fila1, fila2, fila3]

let pivot = pivots[indicePivots] //lo posiciona en (1.1) pivot 2 (2.2), pivot 3 (3.3)


let slot1 = fila2[0]
let slot2 = fila3[0]
let slot3 = fila3[1]
let slot4 = fila2[2]
let slot5 = fila1[2]
let slot6 = fila2[1]

let slots = [slot1, slot2, slot3, slot4, slot5, slot6,]

let slot = slots[indice] // lo usare para mejorar el codigo de abajo


while (matrizFinal != matrizIdentidad){
    if (slot === 0) {
        indice += 1 

    }

    while(slot !== 0){
        if(pivot > slot) {
            n1 = pivot / slot
            for (let i = 0; i < fila1.length; i++) {
                fila1[i] *= n1;
            }
            for (i = 0; i < fila1.length; i++) {
                fila1[i] *= -1;
            }
        }
        
    }
}


