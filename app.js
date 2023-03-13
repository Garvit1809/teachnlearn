const express = require('express');

const app = express();

app.use(express.json({ limit: '10kb' }));

app.get('/', (req,res,next) => {
    console.log(req.protocol);
    res.send('hello')
})

module.exports = app;

// auth complete
// teach card and learning card APIs
// Permanent Gig/Cards
// Specific Cards
// Classroom API
// review Model, APIS

// forum API