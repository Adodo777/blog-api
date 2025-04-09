const mongoose = require('mongoose');

const { Schema } = mongoose;

const articleTagsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('ArticleTags', articleTagsSchema);