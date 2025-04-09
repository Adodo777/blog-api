// Modeles de commentaires

const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleCommentsSchema = new Schema(
    {
        content: {
            type: String,
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User'
        },
        article: {
            type: Schema.Types.ObjectId,
            ref: 'Article'
        }
    },
    { 
        timestamps: true
    }
);

module.exports = mongoose.model('ArticleComments', articleCommentsSchema);