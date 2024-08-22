const mongoose = require('mongoose');

const {Schema} = mongoose;

const schema = new Schema({
    name: {
        type: String,
        required: true
    }
}, {timestamps: true})

schema.methods.toJSON = function(){
    let obj = this.toObject()

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const CategoryModel = mongoose.model('shop_category', schema);

module.exports = {CategoryModel}