// Importing Mongoose Models
const Workout = require('../models/WorkoutModel');


// get all workouts
const getAllWorkoutes = async (req, res) => {

    await Workout.find().then((data) => {
        console.log("All Workots : ", data);
    }).catch((err)=>{
        console.log("Error while getting all workouts:");
    });

    res.send("Got all workouts from DB");
};


// get single workout

const getWorkout = async (req, res) => {
    const id = req.params.id;
    await Workout.find({_id:id}).then((workout)=>{
        console.log("Workout : ", workout);
    }).catch((err)=>{
        console.log("Error while getting workout:", err);
    });

    res.send("Got a workout from DB");
};


// create a new workout
const createWorkout = async (req, res) => {

    const {title, reps, load} = req.query;

    const workout = new Workout({
        title: title,
        reps: reps,
        load: load
    });

    await workout.save().then((data) =>{
        console.log("Workout saved successfully:",data);
    }).catch((err)=>{
        console.log("Error while saving workout:", err);
    });

    res.send("Posted a new Workout");
};

// delete a single workout

// update a single workout



// Exporting this controller functions....
module.exports = {
    createWorkout,
    getAllWorkoutes,
    getWorkout
}
