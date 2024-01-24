
    const pintarCarrito = () => {
    modalContainer.innerHTML = ""; /*necesito que se cierre el carrito y se limpie*/
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header";
    modalHeader.innerHTML = `
        <h1 class="modal-header-tittle">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "❌";
    modalbutton.className = "modal-header-button";
/* Necesito que el modal desaparezca */
    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none"; 
    });

    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div")
        carritoContent.className = "modal-content"
        carritoContent.innerHTML = `
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $</p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
    `;

    modalContainer.append(carritoContent)

    let eliminar = document.createElement("span");

    eliminar.innerText = "❌";
    eliminar.className = "delete-producto";
    carritoContent.append(eliminar);

    eliminar.addEventListener("click", eliminarProducto);
    });



    const total = carrito.reduce ((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalbuying = document.createElement("div")
    totalbuying.className = "total.content"
    totalbuying.innerHTML = `total a pagar: ${total} $`;
    modalContainer.append(totalbuying);
};

verCarrito.addEventListener("click", pintarCarrito);

const eliminarProducto = () => {
    const foundId = carrito.find((element) => element.id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoCounter();
    pintarCarrito();
};

const carritoCounter = () =>  {
    cantidadCarrito.style.display = "block";
    cantidadCarrito.innerText = carrito.length;
}