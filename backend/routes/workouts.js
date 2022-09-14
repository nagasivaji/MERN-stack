const express = require('express');

// Importing Mongoose Models
const Workout = require('../models/WorkoutModel');

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
router.post('/', async (req,res)=>{
    const {title, reps, load} = req.query;

    try{
        const workout = new Workout({
            title: title,
            reps: reps,
            load: load
        });

        const response = await workout.save();
        console.log("Workout saved");
    }catch(err){
        console.log("Error while saving workout");
    };

    res.send("Posted a new Workout");
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