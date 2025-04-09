const ArticleTagModel = require('../models/articleTags.model');

// get all tags
const getArticleTags = async () => {
    const articleTags = await ArticleTagModel.find({});
    return articleTags;
}

// get tag by name
const getArticleTagByName = async (name) => {
    const articleTag = await ArticleTagModel.findOne({ name });
    return articleTag;
}

// create tag
const createArticleTag = async (data) => {
    const articleTagExists = await getArticleTagByName(data.name);
    if (articleTagExists) {
        throw new Error('Tag already exists');
    }
    const articleTag = await ArticleTagModel.create(data);
    return articleTag;
}

// update tag
const updateArticleTag = async (id, data) => {
    const articleTagExists = await getArticleTagById(id);
    if (!articleTagExists) {
        throw new Error('Tag not found');
    }
    const articleTagUpdated = await ArticleTagModel.findByIdAndUpdate(id, data, { new: true });
    return articleTagUpdated;
}

// delete tag
const deleteArticleTag = async (id) => {
    const articleTagExists = await getArticleTagById(id);
    if (!articleTagExists) {
        throw new Error('Tag not found');
    }
    const articleTagDeleted = await ArticleTagModel.findByIdAndDelete(id);
    return "Tag successfully deleted";
}


module.exports = {
    getArticleTags,
    getArticleTagByName,
    createArticleTag,
    updateArticleTag,
    deleteArticleTag
}