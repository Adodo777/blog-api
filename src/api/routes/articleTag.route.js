const articleTagController = require('../controllers/articleTags.controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

router.get('/', articleTagController.getArticleTags);
router.get('/:name', articleTagController.getArticleTagByName);
router.post('/', articleTagController.createArticleTag);
router.put('/:id', articleTagController.updateArticleTag);
router.delete('/:id', articleTagController.deleteArticleTag);

module.exports = router;