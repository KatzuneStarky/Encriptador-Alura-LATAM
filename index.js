// Variable que trae
var input = document.getElementById("textoEncriptado");
var tablaEncriptada = document.getElementById("tablaEncriptada");
var tablaDesencriptada = document.getElementById("tablaDesencriptada");
var imagen = document.getElementById("imagen")
var titulo = document.getElementById("titulo")
var txt = document.getElementById("txt")

function soloMinusculas() {
    var valor = input.value;
    var minSinAcentos = /^[a-z\s]+$/;

    if (!minSinAcentos.test(valor)) {
        input.value = valor.replace(/[^a-z\s]/g, "");
        swal ("Oops", "No puedes usar mayusculas ni acentos", "error")
    }
}

function encriptarVocales() {
    var valor = input.value;
    var encriptaciones = {
        a: "ai",
        e: "enter",
        i: "imes",
        o: "ober",
        u: "ufat",
    };    

    var palabras = valor.split(" ");

    if(input.value.length === 0){
        swal ("Oops", "El campo esta vacio", "error")
    }else{
        imagen.src = "https://cdn-icons-png.flaticon.com/512/1253/1253804.png"
        titulo.innerText = "Texto encriptado completamente"
        txt.innerText = ""
    }

    for (var i = 0; i < palabras.length; i++) {
        var palabraEncriptada = palabras[i].replace(/[aeiou]/gi, function (match) {
            return encriptaciones[match.toLowerCase()] || match;            
        });  
        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        celda.textContent = palabraEncriptada;
        fila.appendChild(celda);
        tablaEncriptada.appendChild(fila);          
    }        

    input.value = ""   
}

function desencriptarVocales() {
    var valor = input.value;

    var desencriptaciones = {
        ai: "a",
        enter: "e",
        imes: "i",
        ober: "o",
        ufat: "u",
    };

    var palabras = valor.split(" ");

    if(input.value.length === 0){
        swal ("Oops", "El campo esta vacio", "error")
    }else{
        imagen.src = "https://cdn-icons-png.flaticon.com/512/1253/1253804.png"
        titulo.innerText = "Texto desencriptado completamente"
        txt.innerText = ""
    }

    for (var i = 0; i < palabras.length; i++) {
        var palabraEncriptada = palabras[i].replace(/ai|enter|imes|ober|ufat/gi, function (match) {
            return desencriptaciones[match.toLowerCase()] || match;            
        });  
        var fila = document.createElement("tr");
        var celda = document.createElement("td");
        celda.textContent = palabraEncriptada;
        fila.appendChild(celda);
        tablaDesencriptada.appendChild(fila);      
    }

    input.value = ""   
}