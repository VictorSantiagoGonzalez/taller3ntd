const express = require("express");
const router = express.Router();
const esquemaVeterinaria = require("../models/Veterinaria");

router.post("/veterinaria", (req, res) => {
    const veterinaria = new esquemaVeterinaria(req.body);
    veterinaria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//crear
router.post("/veterinaria", (req, res) => {
    const veterinaria = esquemaVeterinaria(req, body);
    veterinaria
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

});
//Consultar 
router.get("/veterinaria", (req, res) => {
    esquemaVeterinaria.find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//modificar
router.put("/veterinaria/:id", (req, res) => {
    const { id } = req.params;
    const { nombre, edad, especie, procedimiento, raza, fecha, historialClinico } = req.body;
    esquemaVeterinaria
        .updateOne({ _id: id }, {
            $set: { nombre, edad, especie, procedimiento, raza, fecha, historialClinico }
        })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});
//eliminar
router.delete("/veterinaria/:id", (req, res) => {
    const { id } = req.params;
    esquemaVeterinaria
        .findByIdAndDelete(id)
        .then((data) => {
            res.json(data);
        })
        .catch((error) => {
            res.json({ message: error });
        });
});



module.exports = router;


