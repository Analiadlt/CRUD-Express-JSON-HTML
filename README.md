# Challenge - CRUD with Express and JSON

## Descripción

Este desafío consiste en desarrollar un sistema CRUD (Create, Read, Update, Delete) para un ecommerce utilizando Express como framework de servidor web y un archivo JSON para almacenar los datos.

## Objetivos

Familiarizarse con la implementación de un servidor web utilizando Express.
Implementar un sistema CRUD que permita la gestión de productos de un ecommerce, utilizando Express y un archivo JSON como base de datos.

## Requisitos

Conocimientos básicos de programación en JavaScript.
Tener instalado Node.js (versión usada 18.12.1) y npm (versión usada 8.19.0).

## Instrucciones

Clonar este repositorio: "https://github.com/Analiadlt/Ecommerce-CRUD-Express-JSON.git".
Instalar con npm install, las siguientes dependencias necesarias para el proyecto:

- bootstrap
- ejs
- express
- morgan
- uuid

Si lo desea, puede crear un archivo data.json con los productos del ecommerce, como ejemplo se adjunta un conjunto de datos al final de este Readme, si no, el archivo se creará al cargar el primer producto través del formulario newProduct.ejs.
Para correr el proyecto, ejecutar: "npm run dev" en consola.
Abrir el front en "http://localhost:5000/".

Para realizar pruebas de los diferentes endpoints del CRUD para comprobar su correcto funcionamiento, utilicé Postman. Además para poder visualizar las acciones, definí un FRONT simple con HTML, Bootstrap y EJS para incorporar código Javascript.

--

## Estructura del archivo JSON

A continuación se muestra un ejemplo de cómo será la estructura del archivo JSON, el id, no será exactamente así, ya que se generará automáticamente con la función uuidv4():

## Json

[
{
"id": "1",
"name": "Naranja",
"description": "Naranja de alta calidad",
"price": 20,
"image": "https://cdn.pixabay.com/photo/2016/02/23/17/40/fruit-1218154_1280.png"
},
{
"id": "2",
"name": "Sombreros",
"description": "Originales sombreros de calidad excepcional.",
"price": 400,
"image": "https://cdn.pixabay.com/photo/2017/06/23/18/25/hat-2435486_1280.png"
},
{
"id": "3",
"name": "Espejo",
"description": "Espejo con marco dorado",
"price": 5.000,
"image": "https://cdn.pixabay.com/photo/2017/08/21/01/03/png-2663750_1280.png"
},
{
"id": "4",
"name": "Esfera de piedra",
"price": "400",
"description": "Hermosa esfera de piedra.",
"image": "https://cdn.pixabay.com/photo/2017/07/27/09/56/sphere-stone-2544690_1280.png"
},
{
"id": "5",
"name": "Reloj",
"price": "500",
"description": "Reloj con números romanos",
"image": "https://cdn.pixabay.com/photo/2016/12/08/11/50/time-1891569_1280.png"
},
{
"id": "6",
"name": "Bicicleta macetero",
"price": "650",
"description": "Hermosa bicicleta antigua transformada en portamacetas.",
"image": "https://cdn.pixabay.com/photo/2017/09/17/02/02/png-2757379_1280.png"
},
{
"id": "c8226dfe-8697-4fd8-b6fe-4b97da4a60eb",
"name": "Partituras clásicas",
"price": "150.000",
"description": "Partituras compuestas para guitarra acústica.",
"image": "https://cdn.pixabay.com/photo/2023/03/25/12/06/music-7875782_1280.jpg"
}
]
