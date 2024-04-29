const parser = require("body-parser");
const express = require('express');
const app = express();
const port = 3000;
const rutasVeterinaria = require("./routers/veterinaria");
const mongoose = require("mongoose");
require('dotenv').config();
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use("/api", rutasVeterinaria);
app.use(express.json());

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => console.log("Conexión exitosa"))
    .catch((error) => console.log(error));

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
});
