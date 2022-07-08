const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/** Instanciate the schema for your models, refer to 
 *  Schema definition from the official documentation
 *  https://mongoosejs.com/docs/guide.html#definition
 */
const exempleSchema = new Schema({
    // You dont need to define Id as mongoose does it by default.
    // You can either declare the type directly or define more options as such
    title: {
        type: String,
        required: [true, "Title is required"],
        unique: false, 
        minlength: [5, "Title should have at least 5 characters."],
        maxlength: [50, "Title can't exceed 50 characters."]
    },
    body: {
        type: String,
        required: [true, "Please enter your message."],
        unique: false,
        minlength: [10, "Message should have at least 10 characters."],
        maxlength: [250, "Message can't exceed 250 characters."]
    }
}, {
    timestamps: true // add createdAt & updatedAt
});

module.exports = mongoose.model("Exemple", exempleSchema);