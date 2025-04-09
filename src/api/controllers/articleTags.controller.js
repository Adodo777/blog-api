const ArticleTagService = require('../services/articleTag.service');

// get all tags
const getArticleTags = async (req, res) => {
    const articleTags = await ArticleTagService.getArticleTags();
    res.status(200).json(articleTags);
}

// get tag by name
const getArticleTagByName = async (req, res) => {
    try {
        const articleTag = await ArticleTagService.getArticleTagByName(req.params.name);
        res.status(200).json(articleTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create tag
const createArticleTag = async (req, res) => {
    try {
        const data = req.body;
        const articleTag = await ArticleTagService.createArticleTag(data);
        res.status(200).json(articleTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update tag
const updateArticleTag = async (req, res) => {
    try {
        const data = req.body;
        const articleTag = await ArticleTagService.updateArticleTag(req.params.id, data);
        res.status(200).json(articleTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete tag
const deleteArticleTag = async (req, res) => {
    try {
        const articleTag = await ArticleTagService.deleteArticleTag(req.params.id);
        res.status(200).json(articleTag);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}


module.exports = {
    getArticleTags,
    getArticleTagByName,
    createArticleTag,
    updateArticleTag,
    deleteArticleTag
}