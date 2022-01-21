/* Definan 2 objetos para modelar el proceso de compra de una plataforma de comercio electrónico:
Artículo: representa el producto que se está comprando y tiene los siguientes atributos:
nombre
descripción
precio
cantidad
fotografía URL
Venta: representa una instancia de venta y tiene los siguientes atributos
artículos (lista de artículos)
total
ID del cliente
correo electrónico del cliente
Implementen los objetos Artículo y Venta usando JavaScript. */
let articulo = {
    nombre: "calcetines",
    descripcion: "Para el frio",
    precio: 180,
    cantidad: 1,
    foto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL9HQQXnhQHStazg_OFNPWLprOooHi_ibP3BJfte0caaAhwLRQdqnSzrFcCQ0sqdXgvXM&usqp=CAU"
}

let venta = {
    articulos: ["Calcetines", "Chamarra", "Pantalón"],
    total: 800,
    idCliente: "001",
    email: "ejemplo@correo.com"
}

console.log("Adquirió " + " " + articulo.nombre + "con el precio de " + " " + articulo.precio);
console.log("El cliente con el id: " + " " + venta.idCliente + " consumión un total de " + venta.total);