const ArticleCommentModel = require('../models/articleComments.model');

// get all article comments
const getArticleComments = async () => {
    const articleComments = await ArticleCommentModel.find({});
    return articleComments;
}

// get comment by article id
const getArticleCommentsByArticleId = async (articleId) => {
    const articleComments = await ArticleCommentModel.find({ article: articleId });
    return articleComments;
}

// get comment by author id
const getArticleCommentsByAuthorId = async (authorId) => {
    const articleComments = await ArticleCommentModel.find({ author: authorId });
    return articleComments;
}

// create article comment
const createArticleComment = async (data) => {
    const articleComment = await ArticleCommentModel.create(data);
    return articleComment;
}

// update article comment
const updateArticleComment = async (id, data) => {
    const articleCommentExists = await getArticleCommentById(id);
    if (!articleCommentExists) {
        throw new Error('Article comment not found');
    }
    const articleCommentUpdated = await ArticleCommentModel.findByIdAndUpdate(id, data, { new: true });
    return articleCommentUpdated;
}

// delete article comment
const deleteArticleComment = async (id) => {
    const articleCommentExists = await getArticleCommentById(id);
    if (!articleCommentExists) {
        throw new Error('Article comment not found');
    }
    await ArticleCommentModel.findByIdAndDelete(id);
    return "Article comment successfully deleted";
}

module.exports = {
    getArticleComments,
    getArticleCommentsByArticleId,
    getArticleCommentsByAuthorId,
    createArticleComment,
    updateArticleComment,
    deleteArticleComment
}