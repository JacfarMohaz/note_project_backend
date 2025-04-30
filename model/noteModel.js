const mongoose = require("mongoose")

const noteSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    decription: {
        type: String,
        required: true
    }
},
{timestamps: true}
)

module.exports = mongoose.model("note", noteSchema)

