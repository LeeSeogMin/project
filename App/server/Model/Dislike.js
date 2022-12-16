const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dislikeSchema = new mongoose.Schema(
    {
        content: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        postId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
        },
        repleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reple",
        },
    },
    { collection: "dislikes", timestamps: true },
);

const Dislike = mongoose.model("Dislike", dislikeSchema);

module.exports = { Dislike };
