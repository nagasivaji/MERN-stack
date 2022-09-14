// Import required modules
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

// Importing Mongoose Models
const Workout = require('./models/WorkoutModel');


// Importing workout routes from routes folder
const workoutRoutes = require('./routes/workouts');


const app = express();


// Middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

//Routs
// app.get('/', (req, res) => {  
//     res.send("Hello, world!!!");
// });

// http://localhost:8000/api/workouts           ->      http://localhost:8000/
// http://localhost:8000/api/workouts/hello     ->      http://localhost:8000/hello
// Real API's we have to type in browser        ->      Normal API's called in 'routes/workouts.js'


// Divering apis getting from browser to required routes file i.e 'routes/workoutroutes.js'
app.use('/api/workouts', workoutRoutes);




// Listen for request
app.listen(process.env.PORT, () => {
    console.log('Listening on port '+process.env.PORT+'!');

});

