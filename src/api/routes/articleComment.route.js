const articleCommentController = require('../controllers/articleComments.controller');
const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');

router.use(authMiddleware);

router.get('/', articleCommentController.getArticleComments);
router.get('/:id', articleCommentController.getArticleCommentsByArticleId);
router.get('/author/:id', articleCommentController.getArticleCommentsByAuthorId);
router.post('/', articleCommentController.createArticleComment);
router.put('/:id', articleCommentController.updateArticleComment);
router.delete('/:id', articleCommentController.deleteArticleComment);

module.exports = router;