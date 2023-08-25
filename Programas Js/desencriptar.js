
const inputTextoD = document.querySelector(".texto-desencriptar");
const mensajeD = document.querySelector(".texto-encriptar");
var botonCopiar = document.querySelector(".copiar");
var img = document.querySelector(".imagen");

    function btndesencriptar(){

        const textoDesencriptado = desencriptar(inputTextoD.value);
        mensajeD.value = textoDesencriptado;

        botonCopiar.style.visibility = "visible";
        inputTextoD.value="";
    }


    
    function desencriptar(StringDesencriptar){
        let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
        StringDesencriptar = StringDesencriptar.toLowerCase();

        for (let i = 0; i< matrizCodigo.length; i++){
            if(StringDesencriptar.includes(matrizCodigo[i][0])){
                    StringDesencriptar = StringDesencriptar.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
            }
        }
        return StringDesencriptar;
    }