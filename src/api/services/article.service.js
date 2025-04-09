const ArticleModel = require('../models/articles.model');

// get article by id
const getArticleById = async (id) => {
    const article = await ArticleModel.findById(id);
    return article;
}

// get article by slug
const getArticleBySlug = async (slug) => {
    const article = await ArticleModel.findOne({ slug });
    return article;
}

//get articles by category
const getArticlesByCategory = async (category) => {
    const articles = await ArticleModel.find({ category });
    return articles;
}

// get articles by author
const getArticlesByAuthor = async (author) => {
    const articles = await ArticleModel.find({ author });
    return articles;
}

//get articles by tag
const getArticlesByTag = async (tag) => {
    const articles = await ArticleModel.find({ tags: tag });
    return articles;
}

// get all articles
const getAllArticles = async () => {
    const articles = await ArticleModel.find();
    return articles;
}

// create article
const createArticle = async (data) => {
    const article = await ArticleModel.create(data);
    return article;
}

// update article
const updateArticle = async (id, data) => {
    const articleExists = await getArticleById(id);
    if (!articleExists) {
        throw new Error('Article not found');
    }
    const articleUpdated = await ArticleModel.findByIdAndUpdate(id, data, { new: true });
    return articleUpdated;
}

// delete article
const deleteArticle = async (id) => {
    const articleExists = await getArticleById(id);
    if (!articleExists) {
        throw new Error('Article not found');
    }
    const articleDeleted = await ArticleModel.findByIdAndDelete(id);
    return "Article successfully deleted";
}

module.exports = {
    getArticleById,
    getArticleBySlug,
    getArticlesByCategory,
    getArticlesByAuthor,
    getArticlesByTag,
    getAllArticles,
    createArticle,
    updateArticle,
    deleteArticle
}
