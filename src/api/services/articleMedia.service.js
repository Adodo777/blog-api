const ArticleMediaModel = require('../models/articleMedia.model');

// get all article medias
const getArticleMedias = async () => {
    const articleMedias = await ArticleMediaModel.find({});
    return articleMedias;
}

// get article media by id
const getArticleMediaById = async (id) => {
    const articleMedia = await ArticleMediaModel.findById(id);
    return articleMedia;
}

// get article media by article id
const getArticleMediasByArticleId = async (articleId) => {
    const articleMedias = await ArticleMediaModel.find({ article: articleId });
    return articleMedias;
}

// create article media
const createArticleMedia = async (data) => {
    const articleMedia = await ArticleMediaModel.create(data);
    return articleMedia;
}

// update article media 
const updateArticleMedia = async (id, data) => {
    const articleMediaExists = await getArticleMediaById(id);
    if (!articleMediaExists) {
        throw new Error('Article media not found');
    }
    const articleMediaUpdated = await ArticleMediaModel.findByIdAndUpdate(id, data, { new: true });
    return articleMediaUpdated;
}

// delete article media
const deleteArticleMedia = async (id) => {
    const articleMediaExists = await getArticleMediaById(id);
    if (!articleMediaExists) {
        throw new Error('Article media not found');
    }
    await ArticleMediaModel.findByIdAndDelete(id);
    return "Article media successfully deleted";
}

module.exports = {
    getArticleMedias,
    getArticleMediasByArticleId,
    getArticleMediaById,
    createArticleMedia,
    updateArticleMedia,
    deleteArticleMedia
}