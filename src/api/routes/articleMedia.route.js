const articleMediaController = require('../controllers/articleMedia.controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

router.get('/', articleMediaController.getArticleMedias);
router.get('/:id', articleMediaController.getArticleMediaById);
router.get('/article/:id', articleMediaController.getArticleMediasByArticleId);
router.post('/', articleMediaController.createArticleMedia);
router.put('/:id', articleMediaController.updateArticleMedia);
router.delete('/:id', articleMediaController.deleteArticleMedia);

module.exports = router;