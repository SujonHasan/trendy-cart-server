const mongoose = require('mongoose');

const {Schema, ObjectId} = mongoose;

const categoryModel = new Schema({
    _id: {
        type: ObjectId,
        required: false,
        ref: 'shop_category'
    },
    name: {
        type: String,
        required: false, 
        default: null
    }
}, {_id: false})

const schema = ({
    name: {
        type: String,
        required: true
    },
    category: {
        type: categoryModel,
        required: true
    }

}, {timestamps: true})

const schema.methods.toJSON = function (){

    let obj = this.toObject();

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const SubCategoryModel = mongoose.model('shop_sub_category', schema);

module.exports = {SubCategoryModel};