const router = require('express').Router();
const Comment = require('../models/Comment')
// POST
router.post('/', async (req, res) => {
    const newComment = new Comment(req.body);
    try {
        const savedCommnent = await newComment.save();
        res.status(201).json(savedCommnent)
    } catch (err) {
        res.status(500).json(err)
    }
})


router.get('/', async (req, res) => {
    const movieId = req.query.movieId;
    let comments = []

    try {
        if (movieId) {
            comments = await Comment.aggregate([
                { $match: { movieId: movieId } },
            ]);
        }
        res.status(200).json(comments)
    } catch (err) {
        res.status(500).json(err)
    }

})

module.exports = router;