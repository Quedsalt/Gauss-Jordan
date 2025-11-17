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
let fila1 = []
let fila2 = []
let fila3 = []

// Matrices objetivo
let matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]
let matrizIdentidad = [1, 0, 0, 0, 1, 0, 0, 0, 1]

let paso = 0
const maxPasos = 20

//operacion en funcion resultado para evitar problemas
function resultado() {
    while (!arraysIguales(matrizFinal, matrizIdentidad) && paso < maxPasos) {
        paso++

        if (fila1[0] !== 1 && fila1[0] !== 0){ // Se agrega verificación para evitar dividir por 0
            let factor = 1 / fila1[0]

            for(let i = 0; i < 4; i++){
                fila1[i] *= factor
            }
        }

        if (fila2[0] !== 0){
            let factor = -fila2[0] / fila1[0]

            for (let i = 0; i < 4; i++){

                fila2[i] += factor * fila1[i]
            }
        }

        if (fila3[0] !== 0){
            let factor = -fila3[0] / fila1[0]
            for (let i = 0; i < 4; i++){
                fila3[i] += factor * fila1[i]
            }
        }

        if (fila2[1] !== 1 && fila2[1] !== 0){
            let factor = 1 / fila2[1]
            for(let i = 0; i < 4; i++){
                fila2[i] *= factor
            }
        }

        if (fila1[1] !== 0){
            let factor = -fila1[1] / fila2[1]

            for (let i = 0; i < 4; i++){
                fila1[i] += factor * fila2[i]
            }
        }

        if (fila3[1] !== 0){
            let factor = -fila3[1] / fila2[1]

            for (let i = 0; i < 4; i++){
                fila3[i] += factor * fila2[i]
            }
        }

        if (fila3[2] !== 1 && fila3[2] !== 0){
            let factor = 1 / fila3[2]
            for(let i = 0; i < 4; i++){
                fila3[i] *= factor
            }
        }

        if (fila1[2] !== 0){
            let factor = -fila1[2] / fila3[2]

            for (let i = 0; i < 4; i++){
                fila1[i] += factor * fila3[i]
            }
        }

        if (fila2[2] !== 0){
            let factor = -fila2[2] / fila3[2]

            for (let i = 0; i < 4; i++){
                fila2[i] += factor * fila3[i]
            }
        }

        // Actualiza la matriz para la condición del bucle
        matrizFinal = [...fila1.slice(0, 3), ...fila2.slice(0, 3), ...fila3.slice(0, 3)]
    }
    // Imprime resultados
    document.getElementById('output').innerHTML = 
    `X: ${fila1[3]}<br>Y: ${fila2[3]}<br>Z: ${fila3[3]}`
}

function recopilarMatriz() {
    const filas = document.querySelectorAll('#tablaMatriz tr')

    fila1 = []
    fila2 = []
    fila3 = []

    for (let i = 0; i < filas.length; i++) {
        const inputsDeEstaFila = filas[i].querySelectorAll('input[type="number"]')
        
        const valoresFilaActual = []

        inputsDeEstaFila.forEach(input => {
            const valorNumerico = parseInt(input.value, 10)
            
            if (!isNaN(valorNumerico)) {
                valoresFilaActual.push(valorNumerico)
            } else {
                // Manejar error si un input está vacío o no es un número
                console.warn(`Valor inválido encontrado en la fila ${i + 1}`)
                valoresFilaActual.push(0)//poner un 0 por defecto si no reconoce un numero
            }
        })

        if (i === 0) {
            fila1 = valoresFilaActual
        } else if (i === 1) {
            fila2 = valoresFilaActual
        } else if (i === 2) {
            fila3 = valoresFilaActual
        }
    }

    const elementoRecopilarMatrizButton = document.getElementById("recopilarMatrizButton")

    elementoRecopilarMatrizButton.style.display = "none"

    resultado()
}

function generarMatriz() {

    const elementoMatriz = document.getElementById("matrizContainer")
    const elementoButtonGenerarMatriz = document.getElementById("buttonGenerarMatriz")
    const elementoRestablecer = document.getElementById("Restablecer")

    elementoButtonGenerarMatriz.style.display = "none"
    elementoMatriz.style.display = "block"
    elementoRestablecer.style.display = "block"
}

//profe si llega a leer esto odio a Gauss Jordan