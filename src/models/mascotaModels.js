const mongoose = require('mongoose');

const mascotaSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        slug: {type: String, required: true},
        tipo: {type: String, required: true},
        raza: {type: String, required: true},
        sexo: {type: String, required: true},
        fechaPerdida: {type: Date, required: true},
        description: {type: Date, required: true},
        image: {type: String, required: true},
        ubicacion:{type: String, required: true},
    },
    {
        timestamps: true, //Fecha de publicación del registro
    }

);

const Mascota = mongoose.model('Mascota', mascotaSchema);
model.exports = mascotaSchema;