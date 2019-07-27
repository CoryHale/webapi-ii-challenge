const express = require('express');

const port = 4000;

const postRoutes = require('./posts/postRoutes');

const server = express();

server.use('/api/posts', postRoutes);

server.listen(port, () => {
    console.log(`server listening on port ${port}`);
});