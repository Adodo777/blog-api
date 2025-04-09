const { array } = require('joi');
const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleMediaSchema = new Schema(
    {
        url: {
            type: Array,
            required: true
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

module.exports = mongoose.model('ArticleMedia', articleMediaSchema);