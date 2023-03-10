const express = require('express');
const path = require('path');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
const config = require('./server/config/key.js');

app.use(express.static(path.join(__dirname, './client/build')));
app.use('/server/file', express.static('./server/file'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/post', require('./server/Router/post.js'));
app.use('/api/user', require('./server/Router/user.js'));
app.use('/api/reple', require('./server/Router/reple.js'));
app.use('/api/like', require('./server/Router/like.js'));

app.listen(port, () => {
    mongoose
        .connect(config.mongoURI)
        .then(() => {
            console.log(`Example app listening at http://localhost:${port}`);
            console.log('Connecting MongoDB...');
        })
        .catch((err) => {
            console.log(`${err}`);
        });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
});



// "dev": "concurrently \"npm run backend\" \"npm run start --prefix client\""