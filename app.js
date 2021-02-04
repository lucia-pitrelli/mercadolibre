const express = require("express");
const path = require("path");

const app = express();

app.listen(3000);

//middlewares -static folder define las carpetas que va a leer (imagenes, css, js, videos)
const staticFolder = path.resolve(__dirname, "./public");
app.use(express.static(staticFolder));

//rutas
app.get("/", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/home.html"));
});

app.get("/register", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/register.html"));
});

app.get("/logIn", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./views/logIn.html"));
});
