const mongoose = require('mongoose');

const {Schema, ObjectId} = mongoose;

const categorySchema = new Schema({

    _id: {
        type: ObjectId,
        required: false,
        ref: 'category'
    },
    name: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const subCategorySchema = new Schema({
    _id: {
        type: ObjectId,
        required: false,
        ref: 'sub_category'
    },
    name: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const descriptionSchema = new Schema({
    short: {
        type: String,
        required: false,
        default: null
    },
    long: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const priceSchema = new Schema({
    discountPrice: {
        type: Number,
        required: false,
        default: 0
    },
    mainPrice: {
        type: Number,
        required: false,
        default: 0
    }
}, {_id: false})

const userSchema = new Schema({

    _id: {
        type: ObjectId,
        required: false,
        ref: 'user'
    },
    firstName: {
        type: String,
        required: false,
        default: null
    },
    lastName: {
        type: String,
        required: false,
        default: null
    },
    email: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const reviewSchema = new Schema({
    user: {
        type: userSchema,
        required: false,
        default: () => ({})
    },
    rating: {
        type: Number,
        required: false,
        default: 0
    },
    comment: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const gallerySchema = new Schema({
    file: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const tagSchema = new Schema({
    name: {
        type: String,
        required: false,
        default: null
    }
}, {_id: false})

const stockSchema = new Schema({

    isAlert: {
        type: Boolean,
        required: false,
        default: false
    },
    amount: {
        type: Number,
        required: false,
        default: 0
    }
}, {_id: false})

const schema = new Schema({

    categories: [{
        type: categorySchema,
        required: false,
        default: []
    }],
    subCategories: [{
        type: subCategorySchema,
        required: false,
        default: []
    }],
    title: {
        type: String,
        required: true,
    },
    productId: {
        type: String,
        required: true
    },
    description:{
        type: descriptionSchema,
        required: false,
        default: () => ({})
    },
    price: {
        type: priceSchema,
        required: false,
        default: () => ({})
    },
    size: [{
        type: String,
        required: false
    }],
    stock: {
        type: Number,
        required: false,
    },
    review: {
        type: reviewSchema,
        required: false,
        default: () => ({})
    },
    gallery: [{
        type: gallerySchema,
        required: false,
        default:  []
    }],
    tags: [{
        type: tagSchema,
        required: false,
        default: []
    }],
    quantity: {
        type: stockSchema,
        required:  false,
        default: () => ({})
    }

}, {timestamps: true})

schema.methods.toJSON = function () {

    let obj = this.toObject();
    
    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const ProductModel  = mongoose.model('product', schema);

module.exports = ProductModel;