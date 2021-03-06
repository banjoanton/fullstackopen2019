const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

blogsRouter.get('/blogs', async (request, response, next) => {
    try {
        const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 });
        response.json(blogs);
    } catch (exception) {
        next(exception);
    }
});

blogsRouter.post('/blogs', async (request, response, next) => {
    const blogBody = request.body;

    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET);
        if (!request.token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' });
        }

        const user = await User.findById(decodedToken.id);

        const blog = new Blog({
            title  : blogBody.title,
            author : blogBody.author,
            url    : blogBody.url,
            likes  : blogBody.likes === undefined ? 0 : blogBody.likes,
            user   : user._id
        });

        const result = await blog.save();
        user.blogs = user.blogs.concat(result._id);
        await user.save();
        response.json(result.toJSON());
    } catch (exception) {
        next(exception);
    }
});

blogsRouter.delete('/blogs/:id', async (request, response, next) => {
    const id = request.params.id;

    try {
        const decodedToken = jwt.verify(request.token, process.env.SECRET);
        if (!request.token || !decodedToken.id) {
            return response.status(401).json({ error: 'token missing or invalid' });
        }

        console.log(decodedToken);

        const blog = await Blog.findById(id);

        if (!blog) {
            return response.status(400).json({ error: 'blog does not exist' });
        }

        if (blog.user.toString() === decodedToken.id.toString()) {
            await Blog.findByIdAndDelete(id);
        } else {
            return response.status(401).json({ error: 'wrong user' });
        }

        response.status(200).json(blog);
    } catch (error) {
        next(error);
    }
});

blogsRouter.put('/blogs/:id', async (request, response, next) => {
    const blogBody = request.body;

    const newBlog = {
        likes    : blogBody.likes,
        comments : blogBody.comments
    };

    try {
        const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, newBlog, { new: true });
        response.json(updatedBlog.toJSON());
    } catch (error) {
        next(error);
    }
});

module.exports = blogsRouter;
