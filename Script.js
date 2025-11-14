// Funcion para comparar arrays
function arraysIguales(arr1, arr2){
    if (arr1.length !== arr2.length){
        return false
    }

    for (let i= 0; i <arr1.length; i++){
        if (Math.abs(arr1[i] - arr2[i]) > 1e-10){
            return false
        }
    }

    return true
}

// Filas
let fila1 = [0, 0, 0, 0]
let fila2 = [0, 0, 0, 0]
let fila3 = [0, 0, 0, 0]

// Matrices objetivo
let matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]
let matrizIdentidad = [1, 0, 0, 0, 1, 0, 0, 0, 1]

let paso = 0
const maxPasos = 20

while (!arraysIguales(matrizFinal, matrizIdentidad) && paso < maxPasos) {
    paso++

    // PASO 1: Hacer que fila1[0] sea el pivote (igual a 1)
    if (fila1[0] !== 1 && fila1[0] !== 0){ // Se agrega verificación para evitar dividir por 0
        let factor = 1 / fila1[0]

        for(let i = 0; i < 4; i++){
            fila1[i] *= factor
        }
    }

    // PASO 2: Hacer 0s debajo del pivote 1 (fila2[0] y fila3[0])
    // Hacer fila2[0] = 0
    if (fila2[0] !== 0){
        let factor = -fila2[0] / fila1[0]

        for (let i = 0; i < 4; i++){

            fila2[i] += factor * fila1[i]
        }
    }

    // Hacer fila3[0] = 0
    if (fila3[0] !== 0){
        let factor = -fila3[0] / fila1[0]
        for (let i = 0; i < 4; i++){
            fila3[i] += factor * fila1[i]
        }
    }

    // PASO 3: Hacer que fila2[1] sea el pivote (igual a 1)
    if (fila2[1] !== 1 && fila2[1] !== 0){
        let factor = 1 / fila2[1]
        for(let i = 0; i < 4; i++){
            fila2[i] *= factor
        }
    }

    // PASO 4: Hacer 0s arriba y abajo del pivote 2 (fila1[1] y fila3[1])
    // Hacer fila1[1] = 0
    if (fila1[1] !== 0){
        let factor = -fila1[1] / fila2[1]

        for (let i = 0; i < 4; i++){
            fila1[i] += factor * fila2[i]
        }
    }
    // Hacer fila3[1] = 0
    if (fila3[1] !== 0){
        let factor = -fila3[1] / fila2[1]

        for (let i = 0; i < 4; i++){
            fila3[i] += factor * fila2[i]
        }
    }

    // PASO 5: Hacer que fila3[2] sea el pivote (igual a 1)
    if (fila3[2] !== 1 && fila3[2] !== 0){
        let factor = 1 / fila3[2]
        for(let i = 0; i < 4; i++){
            fila3[i] *= factor
        }
    }

    // PASO 6: Hacer 0s arriba del pivote 3 (fila1[2] y fila2[2])
    // Hacer fila1[2] = 0
    if (fila1[2] !== 0){
        let factor = -fila1[2] / fila3[2]

        for (let i = 0; i < 4; i++){
            fila1[i] += factor * fila3[i]
        }
    }
    // Hacer fila2[2] = 0
    if (fila2[2] !== 0){
        let factor = -fila2[2] / fila3[2]

        for (let i = 0; i < 4; i++){
            fila2[i] += factor * fila3[i]
        }
    }

    // Actualiza la matriz para la condición del bucle
    matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]
}

// Imprimir resultados
function llamarResultado() {
    console.log("X = " + fila1[3])
    console.log("Y = " + fila2[3])
    console.log("Z = " + fila3[3])
}



//profe si llega a leer esto odio a Gauss Jordan