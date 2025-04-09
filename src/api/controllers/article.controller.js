const ArticleService = require('../services/article.service');


// get all articles
const getAllArticles = async (req, res) => {
    try {
        const articles = await ArticleService.getAllArticles();
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get article by id
const getArticleById = async (req, res) => {
    try {
        const article = await ArticleService.getArticleById(req.params.id);
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get article by slug
const getArticleBySlug = async (req, res) => {
    try {
        const article = await ArticleService.getArticleBySlug(req.params.slug);
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get articles by category
const getArticlesByCategory = async (req, res) => {
    try {
        const articles = await ArticleService.getArticlesByCategory(req.params.category);
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get articles by tag
const getArticlesByTag = async (req, res) => {
    try {
        const articles = await ArticleService.getArticlesByTag(req.params.tag);
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get articles by author
const getArticlesByAuthor = async (req, res) => {
    try {
        const articles = await ArticleService.getArticlesByAuthor(req.params.author);
        res.status(200).json(articles);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create article
const createArticle = async (req, res) => {
    try {
        const data = req.body;
        const article = await ArticleService.createArticle(data);
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update article
const updateArticle = async (req, res) => {
    try {
        const data = req.body;
        const article = await ArticleService.updateArticle(req.params.id, data);
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete article
const deleteArticle = async (req, res) => {
    try {
        const article = await ArticleService.deleteArticle(req.params.id);
        res.status(200).json(article);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getAllArticles,
    getArticleById,
    getArticleBySlug,
    getArticlesByCategory,
    getArticlesByTag,
    getArticlesByAuthor,
    createArticle,
    updateArticle,
    deleteArticle
}