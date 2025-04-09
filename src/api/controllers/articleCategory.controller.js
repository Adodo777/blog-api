const ArticleCategoryService = require('../services/articleCategory.service');

// get all article categories
const getArticleCategories = async (req, res) => {
    const articleCategories = await ArticleCategoryService.getArticleCategories();
    res.status(200).json(articleCategories);
}

// get article category by name
const getArticleCategoryByName = async (req, res) => {
    try {
        const articleCategory = await ArticleCategoryService.getArticleCategoryByName(req.params.name);
        res.status(200).json(articleCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create article category
const createArticleCategory = async (req, res) => {
    try {
        const data = req.body;
        const articleCategory = await ArticleCategoryService.createArticleCategory(data);
        res.status(200).json(articleCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update article category
const updateArticleCategory = async (req, res) => {
    try {
        const data = req.body;
        const articleCategory = await ArticleCategoryService.updateArticleCategory(req.params.id, data);
        res.status(200).json(articleCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete article category
const deleteArticleCategory = async (req, res) => {
    try {
        const articleCategory = await ArticleCategoryService.deleteArticleCategory(req.params.id);
        res.status(200).json(articleCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getArticleCategories,
    getArticleCategoryByName,
    createArticleCategory,
    updateArticleCategory,
    deleteArticleCategory
}