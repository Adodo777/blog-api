const articleCategoryController = require('../controllers/articleCategory.controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

router.get('/', articleCategoryController.getArticleCategories);
router.get('/:name', articleCategoryController.getArticleCategoryByName);
router.post('/', articleCategoryController.createArticleCategory);
router.put('/:id', articleCategoryController.updateArticleCategory);
router.delete('/:id', articleCategoryController.deleteArticleCategory);

module.exports = router;