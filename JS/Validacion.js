var nombre = document.getElementById("name");
var phone = document.getElementById("phone");
var email = document.getElementById("email");
var error =  document.getElementById("error");
error.style.color = "red";


function Enviar(){
    console.log("Enviando");

    var mensajeerror = [];

    if (nombre.value === null / nombre.value === ""){
        
    }
    if (phone.value === null / phone.value === ""){
        
    }
    if (email.value === null / email.value === ""){
        
    }
    error.innerHTML = mensajeerror.join(", ");

      return false;
}