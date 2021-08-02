var productos = ["Antivirus", "Grafica", "Disco solido", "Ordenador", "Bolso portatil", "Portatil", "Memoria RAM", "Router Tp link", "Mouse logitech Hero"];
 var imgGrandes = ["img/productos/1.png", "img/productos/2.png", "img/productos/3.png", "img/productos/4.png", "img/productos/5.png", "img/productos/6.png", "img/productos/7.png", "img/productos/8.png", "img/productos/9.png"];
 var imgPeque = ["img/productos/1m.png", "img/productos/2m.png", "img/productos/3m.png", "img/productos/4m.png", "img/productos/5m.png", "img/productos/6m.png", "img/productos/7m.png", "img/productos/8m.png", "img/productos/9m.png"];
 const ref =["antivirus", "tarjeta", "discos", "computadora", "arcportatil", "portatil", "ram", "Router", "mouse"];
 var precios = [33, 169, 36, 360, 11, 540, 21, 66, 25];
 var stock = [5, 2, 8, 3, 10, 4, 3, 1, 2];
 var precioTransporte = [6, 12, 20, "gratis"];
 var IVA = 0.18;
 var uniUser;
 const com =["Antivirus", "Tarjeta", "Discos", "Computadora", "Articulos", "Portatil", "RAM", "Router", "Mouse"];

 window.onload = function(){

              let dato =document.getElementById("buscar").value;
              console.log(dato);
              let i = 0;
switch (dato) {
       case "Antivirus":i=0;
              break;
       case "Tarjeta":i=1;
              break;
       case "Discos":i=2;
              break;
       case "Computadora":i=3;
              break;
       case "Articulos":i=4;
              break;
       case "Portatil":i=5;
              break;
       case "RAM":i=6;
              break;
       case "Router":i=7;
              break;
       case "Mouse":i=8;
              break;       
       default:
              break;
}

 //Se cargan los productos dentro del HTML de forna dinamica haciendo uso de los datos de la base de datos, como si de un PHP se tratase:
 var DIVS = document.getElementsByName("DIVS");

 DIVS[i].innerHTML = '<a id="imgG'+i+'" href="' +imgGrandes[i]+ '"><img id="imgP'+i+'" class="imagen" src="' +imgPeque[i]+ '"></a><div class="etiquetas"><b><span id="pro'+i+'">' +productos[i]+ '</span></span></b></div><div class="stock">stock <span id="uni'+i+'">' +stock[i]+ '</span> <p></p> <input class="uniBien" type="number" id="uniUser'+i+'" name="uniUser" value="0" size="4" /><input type="button" id="botonTotal" class="btn-card" class="addCard" value="Comprar '+precios[i]+'€"/></div>';
 

}
