const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.post('/', (req, res) => {
    const post = req.body;

    db.insert(post)
        .then(posts => {
            if (!post.title || !post.contents) {
                res.status(400).json({ success: false, error: 'Please provide title and contents for the post.' });
            } else {
                res.status(201).json({ success: true, posts });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, error: 'There was an error while saving the post to the database.' });
        });
});

router.post('/:id/comments', (req, res) => {
    const {id} = req.params;
    const comment = req.body;

    db.insert()
})

router.get('/', (req, res) => {
    db.find()
        .then(posts => {
            res.status(200).json(posts);
        })
        .catch(err => {
            res.status(500).json({ success: false, err });
        })
})

module.exports = router;