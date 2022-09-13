// Import required modules
const express = require('express');

const app = express();

//Routs
app.get('/', (req, res) => {  
    res.send("Hello, world!!!");
});


app.listen(8000, () => {
    console.log('Listening on port 8000!');
});