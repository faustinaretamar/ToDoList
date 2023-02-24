let boton = document.querySelector("button")
let input = document.querySelector("input")
boton.addEventListener("click", function () {
    if (Boolean(input.value) == true){
            ciudad = input.value
    cargarCiudad()
    } else {
        alert("No se ha ingresado texto")
    }

})
input.addEventListener("click", function () {
    input.value = ""
})


let ciudad = input.value
function cargarCiudad(data) {
     $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+ ciudad +"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function cargarciudad(data) {
    console.log(data)
    document.querySelector(".container").style.visibility = "visible"
    document.querySelector("#ciudad").textContent = data.name
    document.querySelector("#temperatura").textContent = data.main.temp
    document.querySelector("#grados").innerHTML = '<sup>°C</sup>'
    document.querySelector("#descripcion").textContent = data.weather[0].description
    document.querySelector("#wicon").setAttribute("src", "http://openweathermap.org/img/wn/"+ data.weather[0].icon +"@2x.png")


    console.log(data.weather[0].icon)
})
}


