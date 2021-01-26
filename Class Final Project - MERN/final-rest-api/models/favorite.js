const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const favoriteSchema = mongoose.Schema({
    userFrom: {
        type: Schema.Types.String,
        ref:'User'
    },
    cardId: {
        type: String
    },
    cardImage: {
        type: String
    },
    cardName: {
        type: String
    },
    cardDescription: {
        type: String
    },
    cardPhone: {
        type: String
    },
    cardAddress: {
        type: String
    },
    cardNumber: {
        type: String
    }
});

const Favorite = mongoose.model('Favorite', favoriteSchema);

module.exports = { Favorite }