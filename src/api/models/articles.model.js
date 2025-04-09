const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleSchema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        category: {
            type: [Schema.Types.ObjectId],
            ref: 'ArticleCategory',
            required: true
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    },
    { 
        timestamps: true 
    }
);

module.exports = mongoose.model('Article', articleSchema);