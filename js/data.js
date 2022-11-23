"use strict";

let almacenCarrito = [];

const simples = [];

simples[0] = [];
simples[0]["Nombre"] = "Pappardelle";
simples[0]["Precio"] = 600;
simples[0]["Descripcion"] = "Caja por 500g.";
simples[0]["Imagen"] = "pappardelle.png";

simples[1] = [];
simples[1]["Nombre"] = "Fettuccine";
simples[1]["Precio"] = 600;
simples[1]["Descripcion"] = "Caja por 500g.";
simples[1]["Imagen"] = "fettuccine.png";

simples[2] = [];
simples[2]["Nombre"] = "Spaguetti";
simples[2]["Precio"] = 600;
simples[2]["Descripcion"] = "Caja por 500g.";
simples[2]["Imagen"] = "spaguetti.png";

simples[3] = [];
simples[3]["Nombre"] = "Cavatellis";
simples[3]["Precio"] = 600;
simples[3]["Descripcion"] = "Sabor frutado, amargo y con cuerpo denso";
simples[3]["Imagen"] = "cavatellis.PNG";

const salsas = [];

salsas[0] = [];
salsas[0]["Nombre"] = "Pesto";
salsas[0]["Precio"] = 600;
salsas[0]["Descripcion"] = "Por 250g.";
salsas[0]["Imagen"] = "pesto.png";

salsas[1] = [];
salsas[1]["Nombre"] = "Queso crema de cajú";
salsas[1]["Precio"] = 600;
salsas[1]["Descripcion"] = "Por 250g.";
salsas[1]["Imagen"] = "cremaCaju.png";

salsas[2] = [];
salsas[2]["Nombre"] = "Fileto";
salsas[2]["Precio"] = 600;
salsas[2]["Descripcion"] = "Por 250g.";
salsas[2]["Imagen"] = "fileto.png";

salsas[3] = [];
salsas[3]["Nombre"] = "Rosa";
salsas[3]["Precio"] = 600;
salsas[3]["Descripcion"] = "Por 250g.";
salsas[3]["Imagen"] = "rosa.png";
salsas[3]["Id"] = 7;

const rellenas = [];

rellenas[0] = [];
rellenas[0]["Nombre"] = "Anolini";
rellenas[0]["Precio"] = 600;
rellenas[0]["Descripcion"] =
  "Caja por 500g. Relleno de cabutia, hongos de pino y almendras tostadas.";
rellenas[0]["Imagen"] = "anolini.png";

rellenas[1] = [];
rellenas[1]["Nombre"] = "Rabiol";
rellenas[1]["Precio"] = 600;
rellenas[1]["Descripcion"] =
  "Caja por 500g. Relleno de kinchi, batata y maní tostado.";
rellenas[1]["Imagen"] = "rabiol.png";

rellenas[2] = [];
rellenas[2]["Nombre"] = "Trifungi";
rellenas[2]["Precio"] = 600;
rellenas[2]["Descripcion"] =
  "Caja por 500g. Relleno de 3 tipos de hongos y queso crema de cajú.";
rellenas[2]["Imagen"] = "trifungi.png";

rellenas[3] = [];
rellenas[3]["Nombre"] = "Scarpinocc";
rellenas[3]["Precio"] = 600;
rellenas[3]["Descripcion"] =
  "Caja por 500g. Relleno de papa, cebolla caramelizada y hongos.";
rellenas[3]["Imagen"] = "scarpinocc.png";

rellenas[4] = [];
rellenas[4]["Nombre"] = "Capellacci";
rellenas[4]["Precio"] = 600;
rellenas[4]["Descripcion"] = "Caja por 500g. Relleno de ricota, verdeo y nuez.";
rellenas[4]["Imagen"] = "cappellacci.png";

rellenas[5] = [];
rellenas[5]["Nombre"] = "Corazón";
rellenas[5]["Precio"] = 600;
rellenas[5]["Descripcion"] =
  "Caja por 500g. Relleno de remolacha, batata y queso crema de cajú.";
rellenas[5]["Imagen"] = "corazon.png";

const merchandising = [];

merchandising[0] = [];
merchandising[0]["Nombre"] = "Remera de Mujer";
merchandising[0]["Precio"] = 600;
merchandising[0]["Descripcion"] =
  "Medidas. Talle XS: ancho 38 cm, largo 43 cm. Talle S: ancho 40 cm, largo 44 cm. Talle M: ancho 42 cm, largo 45 cm.";
merchandising[0]["Seleccion"] = true;
merchandising[0]["Imagen"] = "remeraMujer.png";

merchandising[1] = [];
merchandising[1]["Nombre"] = "Remera de Hombre";
merchandising[1]["Precio"] = 600;
merchandising[1]["Descripcion"] =
  "Medidas. Talle S: ancho 46 cm, largo 68 cm. Talle M: ancho 49 cm, largo 69 cm. Talle L: ancho 52 cm, largo 70 cm. Talle XL: ancho 54 cm, largo 72 cm.";
merchandising[1]["Seleccion"] = true;
merchandising[1]["Imagen"] = "remeraHombre.png";

merchandising[2] = [];
merchandising[2]["Nombre"] = "Buzo";
merchandising[2]["Precio"] = 600;
merchandising[2]["Descripcion"] =
  "Medidas. Talle S: ancho 46 cm, largo 68 cm. Talle M: ancho 49 cm, largo 69 cm. Talle L: ancho 52 cm, largo 70 cm. Talle XL: ancho 54 cm, largo 72 cm.";
merchandising[2]["Seleccion"] = true;
merchandising[2]["Imagen"] = "buzo.png";

merchandising[3] = [];
merchandising[3]["Nombre"] = "Bolsa de tela";
merchandising[3]["Precio"] = 600;
merchandising[3]["Descripcion"] = "Medidas: 50 x 45 cm.";
merchandising[3]["Imagen"] = "bolsa.png";

merchandising[4] = [];
merchandising[4]["Nombre"] = "Gorra";
merchandising[4]["Precio"] = 600;
merchandising[4]["Descripcion"] = "Talle único";
merchandising[4]["Imagen"] = "gorra.png";

merchandising[5] = [];
merchandising[5]["Nombre"] = "Taza";
merchandising[5]["Precio"] = 600;
merchandising[5]["Descripcion"] = "Material: cerámica.";
merchandising[5]["Imagen"] = "taza.png";

const vinos = [];

vinos[0] = [];
vinos[0]["Nombre"] = "Vino Barolo";
vinos[0]["Precio"] = 600;
vinos[0]["Descripcion"] =
  "Características: Afrutado, color granate, frutos rojos y regaliz, tempranillo, 12 meses. 750 mL";
vinos[0]["Imagen"] = "vino1.png";

vinos[1] = [];
vinos[1]["Nombre"] = "Tignanello";
vinos[1]["Precio"] = 600;
vinos[1]["Descripcion"] =
  "Características: Ligero, suculento, seco, frutal y ligeramente picante, color rojo intenso. 750 mL";
vinos[1]["Imagen"] = "vino2.png";

vinos[2] = [];
vinos[2]["Nombre"] = "Solaia";
vinos[2]["Precio"] = 600;
vinos[2]["Descripcion"] =
  "Características: Frutal, color rojo violeta intenso, variedad Malbec. 750 mL";
vinos[2]["Imagen"] = "vino3.png";

vinos[3] = [];
vinos[3]["Nombre"] = "The Antipodean";
vinos[3]["Precio"] = 600;
vinos[3]["Descripcion"] = "Características";
vinos[3]["Imagen"] = "vino4.png";

vinos[4] = [];
vinos[4]["Nombre"] = "Saramago";
vinos[4]["Precio"] = 600;
vinos[4]["Descripcion"] = "Características";
vinos[4]["Imagen"] = "vino5.png";

vinos[5] = [];
vinos[5]["Nombre"] = "Pot a Pat";
vinos[5]["Precio"] = 600;
vinos[5]["Descripcion"] = "Características";
vinos[5]["Imagen"] = "vino6.png";

const acompañamientos = [];

acompañamientos[0] = [];
acompañamientos[0]["Nombre"] = "Focaccia";
acompañamientos[0]["Precio"] = 600;
acompañamientos[0]["Descripcion"] = "300 gr";
acompañamientos[0]["Imagen"] = "focaccia.png";

acompañamientos[1] = [];
acompañamientos[1]["Nombre"] = "Queso rallado vegano";
acompañamientos[1]["Precio"] = 600;
acompañamientos[1]["Descripcion"] = "250 gr";
acompañamientos[1]["Imagen"] = "quesoRallado.png";

acompañamientos[2] = [];
acompañamientos[2]["Nombre"] = "Pan de ajo";
acompañamientos[2]["Precio"] = 600;
acompañamientos[2]["Descripcion"] = "300 gr";
acompañamientos[2]["Imagen"] = "panAjo.png";
