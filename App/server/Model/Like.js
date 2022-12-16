const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema(
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
    { collection: "likes", timestamps: true },
);

const Like = mongoose.model("Like", likeSchema);

module.exports = { Like };
