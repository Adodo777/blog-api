const ArticleCategoryModel = require('../models/articleCategory.model');

// get all article categories
const getArticleCategories = async () => {
    const articleCategories = await ArticleCategoryModel.find({});
    return articleCategories;
}

//get article category by name
const getArticleCategoryByName = async (name) => {
    const articleCategory = await ArticleCategoryModel.findOne({ name });
    return articleCategory;
}

// create article category
const createArticleCategory = async (data) => {
    const articleCategoryExists = await getArticleCategoryByName(data.name);
    if (articleCategoryExists) {
        throw new Error('Article category already exists');
    }
    const articleCategory = await ArticleCategoryModel.create(data);
    return articleCategory;
}

// update article category
const updateArticleCategory = async (id, data) => {
    const articleCategoryExists = await getArticleCategoryById(id);
    if (!articleCategoryExists) {
        throw new Error('Article category not found');
    }
    const articleCategoryUpdated = await ArticleCategoryModel.findByIdAndUpdate(id, data, { new: true });
    return articleCategoryUpdated;
}

// delete article category
const deleteArticleCategory = async (id) => {
    const articleCategoryExists = await getArticleCategoryById(id);
    if (!articleCategoryExists) {
        throw new Error('Article category not found');
    }
    const articleCategoryDeleted = await ArticleCategoryModel.findByIdAndDelete(id);
    return "Article category successfully deleted";
}

module.exports = {
    getArticleCategories,
    getArticleCategoryByName,
    createArticleCategory,
    updateArticleCategory,
    deleteArticleCategory
}