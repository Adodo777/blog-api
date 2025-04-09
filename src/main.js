const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();

const connectDB = require('./api/config/database');
const logsMiddlewares = require('./api/middleware/logs.middleware');
const errorMiddleware = require('./api/middleware/error.middleware');

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(logsMiddlewares);
app.use(errorMiddleware);

app.use('/api/auth', require('./api/routes/auth.route'));
app.use('/api/users', require('./api/routes/user.route'));
app.use('/api/articles', require('./api/routes/article.route'));
app.use('/api/articleCategories', require('./api/routes/articleCategory.route'));
app.use('/api/articleTags', require('./api/routes/articleTag.route'));
app.use('/api/articleComments', require('./api/routes/articleComment.route'));
app.use('/api/articleMedias', require('./api/routes/articleMedia.route'));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
