
// abrir login

function abrir(){
    document.getElementById("vent").style.display="block";
    document.getElementById("register").style.display="none";
}
function cerrar(){
    document.getElementById("vent").style.display="none";
}

function register(){
    document.getElementById("register").style.display="block";
    document.getElementById("vent").style.display="none";
}
function cancelar(){
    document.getElementById("register").style.display="none";
    document.getElementById("vent").style.display="block";
}
function cerrarRegister(){
    document.getElementById("register").style.display="none";
}

function mostrar(){
    var x= document.getElementById("contraseña")
    var y= document.getElementById("mostrar")
    var z= document.getElementById("mostrar1")
    if (x.type ==='password') {
        x.type = "text";
        z.style.display = "block";
        y.style.display = "none";
    }else{
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none";
    }
}
function mostrarR(){
    var x= document.getElementById("contra")
    var y= document.getElementById("mostra")
    var z= document.getElementById("mostra1")
    if (x.type ==='password') {
        x.type = "text";
        z.style.display = "block";
        y.style.display = "none";
    }else{
        x.type = "password";
        y.style.display = "block";
        z.style.display = "none";
    }
}

data=[]
var capturar = function(){
    let datos = document.getElementsByClassName("data");
    arrayGuardar=[];
    for (var i = 0; i < datos.length; i++) {    
        arrayGuardar[i] = datos[i].value;
    } 
    data.push(arrayGuardar)
    console.log (data);     
}

var consulta = function(){
    let datos = document.getElementsByClassName("data");
    if(data.indexOf(datos[2].value==false) || data.indexOf(datos[3].value==false))
    {
        alert("Los datos estan mal o no existe prro");
    }else{
        alert("nice papu");
    }
    
}
