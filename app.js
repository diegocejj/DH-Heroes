const express = require("express");
const path = require("path");

const app = express();

const staticFiles = express.static("public");
app.use(staticFiles);

//------------------------------------
// Middle wares
//------------------------------------
// Request

// Funciones -> Middlewares -> 

// Response

//------------------------------------

/*
app.get('/',(req,res) => {
    // envio como respuesta
    res.sendFile(path.join(__dirname, "./index.html"));
});
*/

app.get("/home", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/index.html");
    res.sendFile(fileToSend);
});
app.get("/babbage", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/babbage.html.html");
    res.sendFile(fileToSend);
});
app.get("/berners-lee", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/berners-lee.html");
    res.sendFile(fileToSend);
});
app.get("/clarke", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/clarke.html");
    res.sendFile(fileToSend);
});
app.get("/hamilton", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/hamilton.html");
    res.sendFile(fileToSend);
});
app.get("/hopper", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/hopper.html");
    res.sendFile(fileToSend);
});
app.get("/lovelace", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/lovelace.html");
    res.sendFile(fileToSend);
});
app.get("/turing", (req, res) => {
    // ruta del archivo
    const fileToSend = path.join(__dirname, "/views/turing.html");
    res.sendFile(fileToSend);
});



app.listen(3030, () => {
    console.log(
        "Servidor web corriendo en la direccion",
        "http://localhost:3030/home"
        );
});

