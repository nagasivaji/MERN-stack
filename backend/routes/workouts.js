const express = require('express');

// Importing Mongoose Models
const Workout = require('./models/WorkoutModel');

const router = express.Router();

// router.get('/', (req,res)=>{
//     res.send("Home");
// });

// router.get('/hello', (req, res)=>{
//     res.send("Hello");
// });

// Get all workouts
router.get('/', (req,res)=>{
    res.send("Get All Workouts");
});


// Get a single workout
router.get('/:id', (req,res)=>{
    res.send("Get Single Workout");
});


// post a new Workout
router.post('/', (req,res)=>{
    res.send("Post a new Workout");
});


// delete a workout
router.delete('/:id', (req,res)=>{
    res.send("Delete a Workout");
});


// Update a workout
router.patch('/:id', (req,res)=>{
    res.send("Update a Workout");
});




// Exporting routes to use in server.js file for redirecting routes
module.exports = router;