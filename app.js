let carrito = []; // Inicializamos el carrito como un arreglo vacío

// Lista de productos disponibles
const productos = [
  { id: 1, nombre: 'Pan', precio: 1600 },
  { id: 2, nombre: 'Manzana', precio: 500 },
  { id: 3, nombre: 'Huevo', precio: 350 },
  { id: 4, nombre: 'Mermelada', precio: 1500 },
  { id: 5, nombre: 'Mantequilla', precio: 3200 },
];

// Función para mostrar el menú de productos y seleccionar uno
function seleccionarProducto() {
  let menu = "Selecciona el número del producto que deseas comprar:\n";
  productos.forEach(producto => {
    menu += `${producto.id}. ${producto.nombre} - $${producto.precio}\n`;
  });
  menu += "0. Finalizar compra";

  let eleccion = parseInt(prompt(menu));
  return eleccion; // Devolver la elección del usuario
}

// Función para agregar productos al carrito
function pedirCantidad() {
  let cantidad = parseInt(prompt("¿Cuántas unidades deseas comprar?"));
  return cantidad; // Devolver la cantidad ingresada
}

// Función para calcular el total
function calcularTotal() {
  // Usamos reduce para multiplicar el precio por la cantidad y sumar el total
  return carrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

// Función para finalizar la compra y mostrar los detalles en un alert
function finalizarCompra() {
  if (carrito.length === 0) {
    alert("El carrito está vacío. No has seleccionado ningún producto.");
  } else {
    let mensaje = "Compra finalizada.\n\nDetalles de la compra:\n";
    carrito.forEach(item => {
      mensaje += `${item.cantidad} x ${item.nombre} - $${item.precio * item.cantidad}\n`;
    });
    mensaje += `\nTotal a pagar: $${calcularTotal()}`;
    alert(mensaje); // Mostrar el mensaje en una alerta
  }
}

// Función principal para gestionar la compra
function gestionarCompra() {
  let continuar = true;

  while (continuar) {
    let eleccion = seleccionarProducto(); // Mostrar el menú de productos

    if (eleccion === 0) { // El usuario elige finalizar la compra
      continuar = false;
      showMessage();
    } else {
      const productoSeleccionado = productos.find(producto => producto.id === eleccion);

      if (productoSeleccionado) {
        let cantidad = pedirCantidad(); // Pedir la cantidad
        if (!isNaN(cantidad) && cantidad > 0) {
          // Usamos push para agregar el producto al carrito junto con la cantidad
          carrito.push({ ...productoSeleccionado, cantidad }); 
          
          alert(`${cantidad} x ${productoSeleccionado.nombre} agregado(s) al carrito.`);
          alert("Se agregó correctamente.");

          // Preguntar si desea seguir agregando productos
          let seguirAgregando = prompt("¿Deseas seguir agregando productos? (s/n)").toLowerCase();
          if (seguirAgregando === "n") {
            showMessage();
            continuar = false; // Si elige "n", se finaliza el proceso
          }
        } else {
          alert("Cantidad no válida. Inténtalo de nuevo.");
        }
      } else {
        alert("Opción no válida. Inténtalo de nuevo.");
      }
    }
  }

  finalizarCompra(); // Al salir del ciclo, finalizar la compra
}
function showMessage() {
  alert("Gracias por su compra.")
}


// Ejecutar el flujo del programa
gestionarCompra();
