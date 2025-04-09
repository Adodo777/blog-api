const ArticleCommentService = require('../services/articleComment.service');

// get all article comments
const getArticleComments = async (req, res) => {
    try {
        const articleComments = await ArticleCommentService.getArticleComments();
        res.status(200).json(articleComments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get comment by article id
const getArticleCommentsByArticleId = async (req, res) => {
    try {
        const articleComments = await ArticleCommentService.getArticleCommentsByArticleId(req.params.id);
        res.status(200).json(articleComments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// get comment by author id
const getArticleCommentsByAuthorId = async (req, res) => {
    try {
        const articleComments = await ArticleCommentService.getArticleCommentsByAuthorId(req.params.id);
        res.status(200).json(articleComments);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// create article comment
const createArticleComment = async (req, res) => {
    try {
        const data = req.body;
        const articleComment = await ArticleCommentService.createArticleComment(data);
        res.status(200).json(articleComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// update article comment
const updateArticleComment = async (req, res) => {
    try {
        const data = req.body;
        const articleComment = await ArticleCommentService.updateArticleComment(req.params.id, data);
        res.status(200).json(articleComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

// delete article comment
const deleteArticleComment = async (req, res) => {
    try {
        const articleComment = await ArticleCommentService.deleteArticleComment(req.params.id);
        res.status(200).json(articleComment);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    getArticleComments,
    getArticleCommentsByArticleId,
    getArticleCommentsByAuthorId,
    createArticleComment,
    updateArticleComment,
    deleteArticleComment
}

