const express = require("express");
const router = express.Router();
const { Like } = require("../Model/Like");
const { Dislike } = require("../Model/Dislike");
const { Post } = require("../Model/Post.js");
const { User } = require("../Model/User.js");
const { Reple } = require("../Model/Reple.js");

//=================================
//             Likes DisLikes
//=================================

router.post("/getLikes", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId };
    } else {
        variable = { repleId: req.body.repleId };
    }

    Like.find(variable).exec((err, likes) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, likes });
    });
});

router.post("/getDislikes", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId };
    } else {
        variable = { repleId: req.body.repleId };
    }

    Dislike.find(variable).exec((err, dislikes) => {
        if (err) return res.status(400).send(err);
        res.status(200).json({ success: true, dislikes });
    });
});

router.post("/upLike", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId, author: req.body.author };
    } else {
        variable = { repleId: req.body.repleId, author: req.body.author };
    }

    const like = new Like(variable);
    //save the like information data in MongoDB
    like.save((err, likeResult) => {
        if (err) return res.json({ success: false, err });
        //In case disLike Button is already clicked, we need to decrease the dislike by 1
        Dislike.findOneAndDelete(variable).exec((err, disLikeResult) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true });
        });
    });
});

router.post("/unLike", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId, author: req.body.author };
    } else {
        variable = { repleId: req.body.repleId, author: req.body.author };
    }

    Like.findOneAndDelete(variable).exec((err, result) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
    });
});

router.post("/unDisLike", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId, author: req.body.author };
    } else {
        variable = { repleId: req.body.repleId, author: req.body.author };
    }

    Dislike.findOneAndDelete(variable).exec((err, result) => {
        if (err) return res.status(400).json({ success: false, err });
        res.status(200).json({ success: true });
    });
});

router.post("/upDisLike", (req, res) => {
    let variable = {};
    if (req.body.postId) {
        variable = { postId: req.body.postId, author: req.body.author };
    } else {
        variable = { repleId: req.body.repleId, author: req.body.author };
    }

    const disLike = new Dislike(variable);
    //save the like information data in MongoDB
    disLike.save((err, dislikeResult) => {
        if (err) return res.json({ success: false, err });
        //In case Like Button is already clicked, we need to decrease the like by 1
        Like.findOneAndDelete(variable).exec((err, likeResult) => {
            if (err) return res.status(400).json({ success: false, err });
            res.status(200).json({ success: true });
        });
    });
});

module.exports = router;
