const mongoose = require("mongoose");
const esquemaVeterinaria = mongoose.Schema({
    nombre: {
        type: String,
        required: true,
    },
    edad: {
        type: Number,
        required: true,
    },
    especie: {
        type: String,
        required: true,
    },
    procedimiento: {
        type: String,
        required: true,
    },
    raza: {
        type: String,
        required: false,
    },
    fecha: {
        type: Date,
        required: false,
    },
    historialClinico: {
        type: String,
        required: true,
    }
});
module.exports = mongoose.model("Veterinaria", esquemaVeterinaria);
