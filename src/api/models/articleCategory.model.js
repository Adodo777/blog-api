const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleCategorySchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('ArticleCategory', articleCategorySchema);