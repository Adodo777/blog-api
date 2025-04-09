const UserModel = require('../models/users.model');
const ArticleModel = require('../models/articles.model');
const ArticleCategoryModel = require('../models/articleCategory.model');
const ArticleTagModel = require('../models/articleTags.model');
const ArticleMediaModel = require('../models/articleMedia.model');
const ArticleCommentModel = require('../models/articleComment.model');

// get number of users
const getNumberOfUsers = async () => {
    const users = await UserModel.find({ rule: 'user' }); 
    return users.length;
}

// get number of articles
const getNumberOfArticles = async () => {
    const articles = await ArticleModel.find(); 
    return articles.length;
}

// get number of categories
const getNumberOfCategories = async () => {
    const categories = await ArticleCategoryModel.find(); 
    return categories.length;
}

// get number of tags    
const getNumberOfTags = async () => {
    const tags = await ArticleTagModel.find(); 
    return tags.length;
}

// get number of medias
const getNumberOfMedias = async () => {
    const medias = await ArticleMediaModel.find(); 
    return medias.length;
}

// get number of comments
const getNumberOfComments = async () => {
    const comments = await ArticleCommentModel.find(); 
    return comments.length;
}

module.exports  = {
    getNumberOfUsers,
    getNumberOfArticles,
    getNumberOfCategories,
    getNumberOfTags,
    getNumberOfMedias,
    getNumberOfComments
}
