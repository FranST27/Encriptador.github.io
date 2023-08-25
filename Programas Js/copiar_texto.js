
var botonCopiar = document.querySelector(".copiar");

function copiar(){

    let copiarTexto = document.querySelector(".texto-desencriptar");

    copiarTexto.select();

    document.execCommand("copy");

    alert("Su texto fue copiado correctamente",copiar);

    botonCopiar.style.visibility = "hidden";
    bloque.style.visibility="visible";
    
    }  
    
document.querySelector(".copiar").addEventListener("onclick", copiar);
