const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = Schema(
    {
        email: {type: String, required: true},
        title: {type: String, required: true},
        tourDesc: {type: String, require: true},
        body: {type: String, required: true},
        location: {type: String, required: true},
        costs: {type: String, required: true},
    }, 
    {
        timestamps: true
    }
);

const Note = mongoose.model("Note", NoteSchema);

module.exports = Note;

//db.products.insertOne( { item: "card", qty: 15 } );