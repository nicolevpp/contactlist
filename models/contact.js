// requerimos la dependencia de mongoose para poder trabajar con mongodb

const mongoose = require('mongoose');

// Creo la trabla o schema del modelo que tiene las propiedades, se especifica si es string, booleano, numero, ect

const contactSchema = new mongoose.Schema({
    contactname: String,
    phone: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
});

// Configuro la respuesta del usuario borrando el id, la version y la contraseña

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

// Le damos un nombre y lo asignamos a una propiedad

const Contact = mongoose.model('Contact', contactSchema);

// Lo exportamos

module.exports = Contact;