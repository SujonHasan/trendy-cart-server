const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    },
    photo: {
        type: String,
        required: false,
    },
    description: {
        type: String,
        required: false
    }
}, {timestamps: true})

schema.methods.toJSON = function(){
    let obj = this.toObject()

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const CategoryModel = mongoose.model('category', schema);

module.exports = {CategoryModel}