const express = require('express');
const router = express.Router();
const articleController = require('../controllers/article.controller');
const authMiddleware = require('../middleware/auth.middleware');
const articleValidation = require('../validations/article.validation');
const validate = require('../middleware/validate');

router.use(authMiddleware);

router.get('/', articleController.getAllArticles);
router.get('/:id', articleController.getArticleById);
router.post('/', validate(articleValidation.createArticleValidation), articleController.createArticle);
router.put('/:id', validate(articleValidation.updateArticleValidation), articleController.updateArticle);
router.delete('/:id', articleController.deleteArticle);

module.exports = router;