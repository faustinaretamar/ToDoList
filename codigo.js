//let colores = ["rgb(118, 172, 72)", "rgb(57, 134, 161)", "rgb(250, 53, 108)", "rgb(149, 134, 33)", "rgb(24, 49, 194)", "rgb(255, 49, 194)" ]

let BotonAgain = document.querySelector("#reset")  /// declaracion de espacios html
let cuadrados = document.querySelectorAll(".square")
let espacioG = document.querySelector("#colorDisplay")
let ganaste = document.querySelector("#message")
let botonfacil = document.querySelector("#easyButton")
let botondificil = document.querySelector("#hardButton")
let colorS             /// declaracion de VARIABLES
let colores = []
let dificultad = 6
let colorG    
/*  if (botonfacil.classList.contains('selected')) {
    cuadrados[3].style.display = "none"
    cuadrados[4].style.display = "none"
    cuadrados[5].style.display = "none"
} if (botondificil.classList.contains('selected')) {
    cuadrados[3].style.display = "block"
    cuadrados[4].style.display = "block"
    cuadrados[5].style.display = "block"
} */
botonfacil.addEventListener("click", function(){ // agregamos los eventos a los votones easy y hard
     BotonF()
})
botondificil.addEventListener("click", function(){ // agregamos los eventos a los votones easy y hard
     BotonD()
})
tryagain()
GenerarRC(dificultad) // generamos colores segun la dificultad 
espacioG.textContent = colores[ganadorR(dificultad)] // colocamos el color ganador en el espacio correspondiente
colorG = espacioG.textContent // lo guardamos en la variable color ganador  
for (let i = 0; i <cuadrados.length; i++) {
cuadrados[i].style.backgroundColor = colores[i] 
cuadrados[i].addEventListener("click", function(){
colorS = colores[i]
if (colorS == colorG) {
    ganaste.textContent = "Correcto"
    BotonAgain.textContent = "PLAY AGAIN!"
    if (botonfacil.classList.contains('selected')) {
        cambioC(colorS, 3)
        /* colores[3].style.backgroundColor = "darkgreen"
        colores[4].style.backgroundColor = "darkgreen"
        colores[5].style.backgroundColor = "darkgreen" */
    } else if (botondificil.classList.contains('selected')) {
        cambioC(colorS, 6)
    }
    } else {
        for (let i = 0; i < colores.length; i++) {}
    cuadrados[i].style.backgroundColor = "darkgreen"
    ganaste.textContent = "Intentalo otra vez"
}
}
)}




/////////////////////////////////////////////////////////////////////////
function cambioC(colorS, dificultad ) {
    
    for (let i = 0; i < dificultad; i++) {
        cuadrados[i].style.backgroundColor = colorS
    }
}
function randomColor() {
    let r = Math.floor(Math.random() *255)
    let g = Math.floor(Math.random() *255)
    let b = Math.floor(Math.random() *255)
    return `rgb(${r}, ${g}, ${b})`
}
function GenerarRC (dificultad){
    for (let i = 0; i < dificultad; i++) {
        colores.push(randomColor())
    }
    return colores
}
function ganadorR(dificultad) {
    let c = Math.floor(Math.random()* dificultad)
    return c
}
function tryagain() {
    colores = []
    if (botonfacil.classList.contains('selected')) {
        GenerarRC(3)
        cuadrados[3].style.display = "none"
        cuadrados[4].style.display = "none"
        cuadrados[5].style.display = "none"
    } else if (botondificil.classList.contains('selected')) {
        GenerarRC(6)
        cuadrados[3].style.display = "block"
        cuadrados[4].style.display = "block"
        cuadrados[5].style.display = "block"
    }
     // generamos colores segun la dificultad 
    espacioG.textContent = colores[ganadorR(dificultad)] // colocamos el color ganador en el espacio correspondiente
    colorG = espacioG.textContent // lo guardamos en la variable color ganador 
    for (let i = 0; i <cuadrados.length; i++) {
    cuadrados[i].style.backgroundColor = colores[i] 
}}
BotonAgain.addEventListener("click", function(){
    tryagain()

})
function BotonF (){
    botonfacil.classList.add('selected')
    botondificil.classList.remove('selected')
    dificultad = 3
    colores = []
    tryagain()
    // for (let a = 2; a < 0; a--) {
    //     cuadrados[a].style.backgroundColor = "darkgreen"
    // }  
}

 function BotonD (){
    botonfacil.classList.remove('selected')
    botondificil.classList.add('selected')
     dificultad = 6
     tryagain()
     return dificultad
}
 