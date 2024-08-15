const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'user'
    },
    accessToken: {
        type: String,
        required: true
    },
    revoked: {
        type: Boolean,
        default: false
    },
    expires: {
        type: Date,
        required: true
    }
})

schema.methods.toJSON = function(){

    let obj = this.toObject();

    delete obj.createdAt;
    delete obj.updatedAt;
    delete obj.__v;

    return obj;
}

const OAuthAccessTokenModel = mongoose.model('o_auth_access_token', schema);

module.exports = {
    OAuthAccessTokenModel
}