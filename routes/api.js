const express = require('express');
const router = express.Router();
const posts = require('../model/posts');
const cors = require('cors')

router.get("/all", (req, res)=>{
    res.json(JSON.stringify(posts.getAll()));
})

router.use(express.json());
router.post("/new", (req, res)=>{
    let title = req.body.title;
    let description = req.body.description;
    posts.newPost(title, description);
    res.send("Post Adicionado")
})
module.exports = router;