// Import required modules
require('dotenv').config();
const express = require('express');

const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routs
app.get('/', (req, res) => {  
    res.send("Hello, world!!!");
});


app.listen(process.env.PORT, () => {
    console.log('Listening on port '+process.env.PORT+'!');
});