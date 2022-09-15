const express = require('express');

// Importing Mongoose Models
// const Workout = require('../models/WorkoutModel');

// Importing Mongoose Models from workoutController
const {
    createWorkout,
    getAllWorkoutes,
    getWorkout
} = require('./../controllers/workoutController');

const router = express.Router();

// router.get('/', (req,res)=>{
//     res.send("Home");
// });

// router.get('/hello', (req, res)=>{
//     res.send("Hello");
// });

// Get all workouts
router.get('/', getAllWorkoutes);


// Get a single workout
router.get('/:id', getWorkout);


// post a new Workout
router.post('/', createWorkout);



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
