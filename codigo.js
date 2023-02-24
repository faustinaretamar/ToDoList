let input = document.querySelector(".input")
let botonagregar = document.querySelector(".boton-agregar")
let container = document.querySelector(".container")
input.addEventListener("click", function () {
    input.value = ""
})
class Item {
    constructor(nuevaTarea){
        this.crearDiv(nuevaTarea)
    }
    crearDiv(nuevaTarea){
        let inputagregado = document.createElement("input")
        inputagregado.type ="text"
        inputagregado.disabled= true
        inputagregado.classList.add("item-input")
        inputagregado.value =  input.value 
       
        let divagregado = document.createElement("div")
        divagregado.classList.add("item")

         let botonE = document.createElement("button")
        botonE.innerHTML= "<i class='fas fa-lock'></i>"
        botonE.classList.add("boton-editar")
        
        

        let botonR = document.createElement("button")
        botonR.innerHTML= "<i class='fas fa-trash'></i>"
        botonR.classList.add("boton-remover")

        divagregado.appendChild(inputagregado)
        divagregado.appendChild(botonE)
        divagregado.appendChild(botonR)
        container.appendChild(divagregado)

        let a = true
        botonE.addEventListener("click", function () {
            a= !a
            if (a == true){
                botonE.innerHTML= "<i class='fas fa-lock'></i>"
                inputagregado.disabled=true
            } if (a == false) {
                botonE.innerHTML= "<i class='fas fa-lock-open'></i>"
                inputagregado.disabled=false
            }
        })
        botonR.addEventListener("click", function () {
            //container.removeChild(divagregado)
            divagregado.remove()
        })
        return inputagregado
    }
   
    
} 

    //console.log (`este tonto es ${inputagregado.value}`)


    botonagregar.addEventListener("click", function(){


        if (Boolean(input.value)== true){
            new Item (input.value)
        } else if (Boolean(input.value) == false ) {
             console.log("nao nao")
        }
        //if (input.value == true){}
    } )

    //console.log(boo)