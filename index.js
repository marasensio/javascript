// Función para calcular el descuento
function desct(tot){
    let rta = 0;
    if(tot > 5000){
        rta = (tot * 10) / 100;
    }
    else{
        rta = 0;
        }
    return rta
    }
// Función para calcular el envio
function envio(delivery){
    let costo = 0;
    if(delivery == 1){
        costo = 1000;
    }
    else{
        costo = 0;
    }
    return costo;
}
// Declaración de variables
let opcion = "si";
let total = 0;
let descuento = 0;
let subtotal = 0;
// Clase Cliente
class Cliente{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    get_cliente(){
        console.log("<---- CLIENTE ---->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("");
    }
}
//Clase Producto
class Producto{
    constructor(id,descripcion,precio,stock){
        this.id = id;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
    }
    get_producto(){
        console.log("Código Producto: ",this.id);
        console.log("Artídulo: ", this.descripcion);
        console.log("Precio: $",this.precio);
        console.log("Cantidad disponible: ",this.stock);
    }
    
    update_stock( cantidad ){
        if( this.stock >= cantidad){
            this.stock = this.stock - cantidad;
            console.log("Quedan ",this.stock,"productos disponibles");
        }
        else{
            console.log("No tenemos tanto stock");
        }
    }

}

let lista_productos = [];
let producto_uno = new Producto(1, "Baileys Irish Cream",4320, 5);
lista_productos.push(producto_uno);
let producto_dos = new Producto(2, "Campari", 1090, 10);
lista_productos.push(producto_dos);
let producto_tres = new Producto(3,"Gin Bombay",6690, 3);
lista_productos.push(producto_tres);
let producto_cuatro = new Producto(4, "Havana Club Añejo", 2570, 5);
lista_productos.push(producto_cuatro);
let producto_cinco = new Producto(5, "Fernet Branca", 1700, 10);
lista_productos.push(producto_cinco);
// Ingreso del cliente y verificación de edad
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let edad = prompt("Ingrese su edad");

let cliente_uno = new Cliente(nombre, apellido, edad);
if (cliente_uno.edad < 18){
    alert("Sos menor de edad, no puedes continuar");
}
else{
    cliente_uno.get_cliente();
    // Menú
    for(;;){
        console.log("<--- Seleccione una opción --->");
        console.log("1. Listar productos");
        console.log("2. Comprar producto");
        console.log("3. Salir");
        let op = prompt("Su opción");
        if (op == 1){
            console.log("<---- PRODUCTOS ---->");
            for( let producto of lista_productos){
            producto.get_producto();
            }
        }
        else if(op == 2){
            while ( opcion == "si"){
            let product = prompt("Indique el codigo del producto a comprar");
            lista_productos[product-1].get_producto();
            let cantidad = prompt("Indique la cantidad");
            cantidad = parseInt(cantidad);
            lista_productos[product-1].update_stock(cantidad);
            console.log("Cantidad solicitada: ",cantidad);
            subtotal= lista_productos[product-1].precio * cantidad;
            console.log("Subtotal: $", subtotal);
            opcion = prompt("Desea agregar otro producto si / no");
            opcion.toLowerCase;
            total = total + subtotal;
            }
            console.log("su compra: $",total);
            descuento = desct(total);
            console.log("Descuento: $", descuento);
            console.log("Total a pagar: $", total - descuento);
            console.log("¿Desea que le enviemos el pedido o lo retira de la tienda?");
            let modalidad = prompt("Escriba 1 - envio  2 - retira");
            modalidad = parseInt(modalidad);
            let costo_envio = envio(modalidad);
            console.log("su opcion: ", modalidad);
            console.log("Costo envio: $", costo_envio);
            console.log("Total: $", total - descuento + costo_envio);
        }
        else if(op == 3){
            break;
        }
    }
    console.log("Su compra");
    

}