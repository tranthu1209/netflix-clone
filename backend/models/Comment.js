const mongoose =require("mongoose");

const CommentSchema = new mongoose.Schema(
    {
        movieId: {type: String, required: true},
        userId: {type: String, required: true},
        content: {type: String}
    },
    { timestamps: true }
);

module.exports = mongoose.model('Comment', CommentSchema)