console.log("hola mundo!");
//Paso 1: Calcular totalvar total = 0;

productos = [];
var total = 0;

var montoTxt = document.getElementById("monto");

var totalMsg = document.getElementById("totalMsg");

var descTxt = document.getElementById("descripcion");

var ticket = document.getElementById("ticket");


function calcularTotal() {
    //obtener el monto del campo de texto    monto = montoTxt.value;
    var monto = 0;
    var producto = descTxt.value;
    monto = montoTxt.value;
    monto = parseInt(monto); //resolviendo conflicto de ionic -- revisar error    total = total + monto;    
    
    productos.push({producto, monto});

    total = total + monto;
    console.log(total);
    console.log(productos);


    ticket.innerHTML = "Productos : "
    productos.forEach(item => {
        ticket.innerHTML += "<br><ion-item><ion-label>"+item.producto+" $"+item.monto+"</ion-label></ion-item>"
    });
    //Imprimir en pagina

    totalMsg.innerHTML = "Total : " + total;
} 
