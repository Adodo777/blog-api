const ArticleMediaService = require('../services/articleMedia.service');

// get all article medias
const getArticleMedias = async (req, res) => {
    try {
        const articleMedias = await ArticleMediaService.getArticleMedias();
        res.status(200).json(articleMedias);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get article media by id
const getArticleMediaById = async (req, res) => {
    try {
        const articleMedia = await ArticleMediaService.getArticleMediaById(req.params.id);
        res.status(200).json(articleMedia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get article media by article id
const getArticleMediasByArticleId = async (req, res) => {
    try {
        const articleMedias = await ArticleMediaService.getArticleMediasByArticleId(req.params.id);
        res.status(200).json(articleMedias);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create article media
const createArticleMedia = async (req, res) => {
    try {
        const data = req.body;
        const articleMedia = await ArticleMediaService.createArticleMedia(data);
        res.status(200).json(articleMedia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update article media
const updateArticleMedia = async (req, res) => {
    try {
        const data = req.body;
        const articleMedia = await ArticleMediaService.updateArticleMedia(req.params.id, data);
        res.status(200).json(articleMedia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete article media
const deleteArticleMedia = async (req, res) => {    
    try {    
        const articleMedia = await ArticleMediaService.deleteArticleMedia(req.params.id);
        res.status(200).json(articleMedia);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getArticleMedias,
    getArticleMediasByArticleId,
    getArticleMediaById,
    createArticleMedia,
    updateArticleMedia,
    deleteArticleMedia
}