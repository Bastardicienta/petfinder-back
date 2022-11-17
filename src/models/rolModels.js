const mongoose = require('mongoose');

const rolSchema = new mongoose.Schema(
    {
    name: {type: String, required: true},
    slug: {type: String, required: true},
    image: {type: String, required: true},
    description: {type: String, required: true},
    },
    {
        timestamps: true,
    }
)

const Rol = mongoose.model('Rol', rolSchema);
module.exports = rolSchema;
