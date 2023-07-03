const carrito = [
    {
    id: 198752,
    name: "Tinta DJ27 Color",
    price: 52.95,
    count: 3,
    premium: true
    },
    {
    id: 75621,
    name: "Impresora ticketera PRO-201",
    price: 32.75,
    count: 2,
    premium: true
    },
    {
    id: 54657,
    name: "Caja de rollos de papel para ticketera",
    price: 5.95,
    count: 3,
    premium: false
    },
    {
    id: 3143,
    name: "Caja de folios DIN-A4 80gr",
    price: 9.95,
    count: 2,
    premium: false
    }
   ];


//Ejercicio 1.LISTA COMPRA


console.log ("***Lista De Productos***")


    for (i = 0; i < carrito.length; i++) {
        imprimir(carrito[i])
    }

   function imprimir (producto){
    console.log("id:" + producto.id);
    console.log("name:" + producto.name);
    console.log("price:" + producto.price);
    console.log("count:" + producto.count);
    console.log("premium:" + producto.premium);
   }


//ELIMINAR PRODUCTO


console.log ("***Eliminar Producto***")


let Productos;

   for(var i=0; i < carrito.length; i++){
        if (carrito[i].id === 54657){
            Productos = i;
        }
   }

carrito.splice(Productos, 1);
console.log (carrito);

//Ejercicio 3.Precio Total


console.log ("***Precio Total***")

   let preciototal=0;
   
   for (i = 0; i < carrito.length; i++) {
    
         preciototal += precioProducto(carrito[i])
        
   }

console.log(preciototal)

   function precioProducto(producto){
    return producto.price * producto.count
   }

  
// Ejercicio 4.Productos Prime


console.log("***Productos Prime***")

for(producto of carrito){
    imprimirPrime(producto);
}

    function imprimirPrime(producto){
        if(producto.premium == true){
            console.log(producto.name);
        }

    }