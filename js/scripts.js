$(document).ready(function () {
  "use strict";

  $(".owl-carousel").owlCarousel({
    items: 1,
    margin: 10,
    autoHeight: true,
    autoplay: true,
    autoplayTimeout: 2000,
  });

  $("#myButton").venomButton({
    phone: "Your Phone Number Here",
    chatMessage: "Chat Window Title",
    message: "Escribe tu duda aquí",
    nameClient: "jQuery Script",
    showPopup: true,
    position: "right",
  });

  calcula_resta();

  for (let i = 0; i < simples.length; i++) {
    $("#simples").append(
      '<div class="col-12 col-md-6 col-lg-4">' +
        '<div class="sc-product-item mb-4">' +
        '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
        simples[i]["Imagen"] +
        '" alt="' +
        simples[i]["Nombre"] +
        '">' +
        '<h4 data-name="product_name">' +
        simples[i]["Nombre"] +
        "</h4>" +
        '<p data-name="product_desc">' +
        simples[i]["Descripcion"] +
        "</p>" +
        '<input name="product_price" value="' +
        simples[i]["Precio"] +
        '" type="hidden" >' +
        '<input name="product_id" value="' +
        simples[i]["Id"] +
        '" type="hidden" >' +
        "<div>$ " +
        simples[i]["Precio"] +
        "</div>" +
        '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
        "</div>" +
        "</div>"
    );
  }

  for (let i = 0; i < salsas.length; i++) {
    $("#salsas").append(
      '<div class="col-12 col-md-6 col-lg-4">' +
        '<div class="sc-product-item mb-4">' +
        '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
        salsas[i]["Imagen"] +
        '" alt="' +
        salsas[i]["Nombre"] +
        '">' +
        '<h4 data-name="product_name">' +
        salsas[i]["Nombre"] +
        "</h4>" +
        '<p data-name="product_desc">' +
        salsas[i]["Descripcion"] +
        "</p>" +
        '<input name="product_price" value="' +
        salsas[i]["Precio"] +
        '" type="hidden" >' +
        '<input name="product_id" value="' +
        salsas[i] +
        '" type="hidden" >' +
        "<div>$ " +
        salsas[i]["Precio"] +
        "</div>" +
        '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
        "</div>" +
        "</div>"
    );
  }

  for (let i = 0; i < rellenas.length; i++) {
    $("#rellenas").append(
      '<div class="col-12 col-md-6 col-lg-4">' +
        '<div class="sc-product-item mb-4">' +
        '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
        rellenas[i]["Imagen"] +
        '" alt="' +
        rellenas[i]["Nombre"] +
        '">' +
        '<h4 data-name="product_name">' +
        rellenas[i]["Nombre"] +
        "</h4>" +
        '<p data-name="product_desc">' +
        rellenas[i]["Descripcion"] +
        "</p>" +
        '<input name="product_price" value="' +
        rellenas[i]["Precio"] +
        '" type="hidden" >' +
        '<input name="product_id" value="' +
        rellenas[i] +
        '" type="hidden" >' +
        "<div>$ " +
        rellenas[i]["Precio"] +
        "</div>" +
        '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
        "</div>" +
        "</div>"
    );
  }

  for (let i = 0; i < merchandising.length; i++) {
    if (merchandising[i]["Seleccion"]) {
      $("#merchandising").append(
        '<div class="col-12 col-md-6 col-lg-4">' +
          '<div class="sc-product-item  mb-4">' +
          '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
          merchandising[i]["Imagen"] +
          '" alt="' +
          merchandising[i]["Nombre"] +
          '">' +
          '<h4 data-name="product_name">' +
          merchandising[i]["Nombre"] +
          "</h4>" +
          '<p data-name="product_desc">' +
          merchandising[i]["Descripcion"] +
          "</p>" +
          '<select name="product_size">' +
          '<option value="s">S</option>' +
          '<option value="m">M</option>' +
          '<option value="l">L</option>' +
          '<option value="xl">XL</option>' +
          "</select>" +
          '<input name="product_price" value="' +
          merchandising[i]["Precio"] +
          '" type="hidden" >' +
          '<input name="product_id" value="' +
          merchandising[i] +
          '" type="hidden" >' +
          "<div>$ " +
          merchandising[i]["Precio"] +
          "</div>" +
          '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
          "</div>" +
          "</div>"
      );
    } else {
      $("#merchandising").append(
        '<div class="col-12 col-md-6 col-lg-4">' +
          '<div class="sc-product-item  mb-4">' +
          '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
          merchandising[i]["Imagen"] +
          '" alt="' +
          merchandising[i]["Nombre"] +
          '">' +
          '<h4 data-name="product_name">' +
          merchandising[i]["Nombre"] +
          "</h4>" +
          '<p data-name="product_desc">' +
          merchandising[i]["Descripcion"] +
          "</p>" +
          '<input name="product_price" value="' +
          merchandising[i]["Precio"] +
          '" type="hidden" >' +
          '<input name="product_id" value="' +
          merchandising[i] +
          '" type="hidden" >' +
          "<div>$ " +
          merchandising[i]["Precio"] +
          "</div>" +
          '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
          "</div>" +
          "</div>"
      );
    }
  }

  for (let i = 0; i < acompañamientos.length; i++) {
    $("#acompañamientos").append(
      '<div class="col-12 col-md-6 col-lg-4">' +
        '<div class="sc-product-item mb-4">' +
        '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
        acompañamientos[i]["Imagen"] +
        '" alt="' +
        acompañamientos[i]["Nombre"] +
        '">' +
        '<h4 data-name="product_name">' +
        acompañamientos[i]["Nombre"] +
        "</h4>" +
        '<p data-name="product_desc">' +
        acompañamientos[i]["Descripcion"] +
        "</p>" +
        '<input name="product_price" value="' +
        acompañamientos[i]["Precio"] +
        '" type="hidden" >' +
        '<input name="product_id" value="' +
        acompañamientos[i] +
        '" type="hidden" >' +
        "<div>$ " +
        acompañamientos[i]["Precio"] +
        "</div>" +
        '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
        "</div>" +
        "</div>"
    );
  }

  for (let i = 0; i < vinos.length; i++) {
    $("#vinos").append(
      '<div class="col-12 col-md-6 col-lg-4">' +
        '<div class="sc-product-item mb-4">' +
        '<img class="img-fluid mb-2" data-name="product_image" src="img/productos/' +
        vinos[i]["Imagen"] +
        '" alt="' +
        vinos[i]["Nombre"] +
        '">' +
        '<h4 data-name="product_name">' +
        vinos[i]["Nombre"] +
        "</h4>" +
        '<p data-name="product_desc">' +
        vinos[i]["Descripcion"] +
        "</p>" +
        '<input name="product_price" value="' +
        vinos[i]["Precio"] +
        '" type="hidden" >' +
        '<input name="product_id" value="' +
        vinos[i] +
        '" type="hidden" >' +
        "<div>$ " +
        vinos[i]["Precio"] +
        "</div>" +
        '<button class="sc-add-to-cart btn btn-success">Agregar</button>' +
        "</div>" +
        "</div>"
    );
  }

  $("#smartcart").smartCart({
    cart: JSON.parse(localStorage.getItem("items")),
    cartItemTemplate:
      '<div class="d-flex">' +
      //'<img class="img-fluid" src= " {product_image}" />' +
      '<h3 class="h5 list-group-item-heading">{product_name}</h3>' +
      '<h3 class="h5 list-group-item-heading"> - {product_size}</h3>' +
      "</div>",

    lang: {
      cartTitle: "Mis productos",
      checkout: "Hacer pedido",
      clear: "Borrar",
      subtotal: "Subtotal:",
      cartRemove: "×",
      cartEmpty: "¡Sin productos aún!<br />Comenzá a elegir",
    },
  });

  $("#smartcart").on("cartCleared", function (e) {
    localStorage.clear();
    document.getElementById("quantityProducts").innerHTML = 0;
  });

  $("#smartcart").on("itemRemoved", function (e, item) {
    const carritoEnlocalStorage =
      JSON.parse(localStorage.getItem("items")) || [];

    const listFilter = carritoEnlocalStorage.filter(
      (elem) => elem.unique_key !== item.unique_key
    );

    localStorage.setItem("items", JSON.stringify(listFilter));
    document.getElementById("quantityProducts").innerHTML =
      carritoEnlocalStorage.length - 1;
  });

  $("#smartcart").on("itemAdded", function (e, item) {
    const carritoEnlocalStorage =
      JSON.parse(localStorage.getItem("items")) || [];
    carritoEnlocalStorage.push(item);
    localStorage.setItem("items", JSON.stringify(carritoEnlocalStorage));
    document.getElementById("quantityProducts").innerHTML =
      carritoEnlocalStorage.length;
  });

  $("#smartcart").on("quantityUpdated", function (e, item) {
    const carritoEnlocalStorage =
      JSON.parse(localStorage.getItem("items")) || [];
    if (carritoEnlocalStorage.length > 0) {
      const found = carritoEnlocalStorage.find(
        (element) => element.unique_key === item.unique_key
      );
      if (found) {
        found.product_quantity = found.product_quantity + 1;
        localStorage.setItem("items", JSON.stringify(carritoEnlocalStorage));
      }
    }
  });

  $("#smartcart").on("itemUpdated", function (e, item) {
    const carritoEnlocalStorage =
      JSON.parse(localStorage.getItem("items")) || [];
    if (carritoEnlocalStorage.length > 0) {
      const found = carritoEnlocalStorage.find(
        (element) => element.unique_key === item.unique_key
      );
      if (found) {
        found.product_quantity = found.product_quantity + 1;
        localStorage.setItem("items", JSON.stringify(carritoEnlocalStorage));
      }
    }
  });
});

function search(searchInput, idGeneral) {
  var display, input, filter, table_body, i, txtValue;

  input = document.getElementById(searchInput);
  filter = input.value.toUpperCase();
  divId = document.getElementById(idGeneral);
  div = divId.getElementsByTagName("div");

  for (i = 0; i < div.length; i++) {
    display = "none";
    h4 = div[i].getElementsByTagName("h4");
    if (h4.length > 0) {
      txtValue = h4[0].textContent || h4[0].innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        display = "";
      }

      div[i].style.display = display;
    }
  }
}

function calcula_resta() {
  const carritoEnlocalStorage = JSON.parse(localStorage.getItem("items")) || [];
  document.getElementById("quantityProducts").innerHTML =
    carritoEnlocalStorage.length;
}
