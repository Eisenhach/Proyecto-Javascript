const botonesAgregarCarrito = document.querySelectorAll(".agregar-carrito");

botonesAgregarCarrito.forEach((boton) => {
  boton.addEventListener("click", () => {
    let cantidadCarrito = parseInt(
      document.querySelector(".cantidad-carrito").textContent
    );

    cantidadCarrito++;

    document.querySelector(".cantidad-carrito").textContent = cantidadCarrito;
  });
});
