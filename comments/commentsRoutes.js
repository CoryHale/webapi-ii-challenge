const express = require('express');
const db = require('../data/db');

const router = express.Router();

router.get('/:id', (req, res) => {     // Working
    const {id} = req.params;

    db.findPostComments(id)
        .then(comments => {
            console.log(comments)
            if (comments.length !== 0) {
                res.status(200).json(comments);
            } else {
                res.status(404).json({ success: false, error: 'The post with the specified ID does not exist.' });
            }
        })
        .catch(err => {
            res.status(500).json({ success: false, error: 'The comments information could not be retrieved.', err });
        });
});

router.post('/:id', async (req, res) => {        // Working
    const commentInfo = {...req.body, post_id: req.params.id}
    
    try {
        if (!commentInfo.text) {
            res.status(400).json({ success: false, error: 'Please provide text for the comment.' });
        } else {
            const comment = await

            db.insertComment(commentInfo)
                res.status(201).json({ success: true, comment });
                
        }
    }
    catch(err) {
        if (err.errno === 19) {
            res.status(404).json({ success: false, error: 'The post with the specified ID does not exist.' })
        } else {
        res.status(500).json({ success: false, error: 'There was an error while saving the comment to the database.', err });
        }
    };
});

module.exports = router;