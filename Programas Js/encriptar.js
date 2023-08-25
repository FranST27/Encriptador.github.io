
const inputTexto = document.querySelector(".texto-encriptar");
const mensaje = document.querySelector(".texto-desencriptar");
var botonCopiar = document.querySelector(".copiar");
var imagen = document.querySelector(".imagen");


    function btnencriptar(){

        const textoEncriptado = encriptar(inputTexto.value);
        
        mensaje.value = textoEncriptado;
        
        botonCopiar.style.visibility = "visible";
        inputTexto.value="";
    }



    function encriptar(StringEncritado){

        let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
        
        StringEncritado = StringEncritado.toLowerCase();

        for (let i = 0; i< matrizCodigo.length; i++){
            if(StringEncritado.includes(matrizCodigo[i][0])){
                StringEncritado = StringEncritado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
            }           
        }
           return StringEncritado; 
                            
    }
    
