// Importing Mongoose Models
const Workout = require('../models/WorkoutModel');


// get all workouts
const getAllWorkoutes = async (req, res) => {

    await Workout.find().then((data) => {
        console.log("All Workots : ",data);
        res.send(data);
    }).catch((err)=>{
        console.log("Error while getting all workouts:");
        res.send(err)
    });
};



// get single workout
const getWorkout = async (req, res) => {
    const id = req.params.id;

    await Workout.find({_id:id}).then((workout)=>{
        if(workout.length === 0)
            console.log("No workout found");
        else
            console.log("Workout : ", workout);
        
        res.send(workout);
    }).catch((err)=>{
        console.log("Error while getting workout:", err);
        res.send(err);
    });
};



// create a new workout
const createWorkout = async (req, res) => {
    //console.log("IN POST request");  
    //console.log(req.body);       

    const {title, reps, load} = req.body;

    const workout = new Workout({
        title: title,
        reps: reps,
        load: load
    });

    await workout.save().then((data) =>{
        console.log("Workout saved successfully:",data);
        res.send(data);
    }).catch((err)=>{
        console.log("Error while saving workout:", err);
        res.send(err.message);
    });
};



// delete a single workout
const deleteWorkout = async (req, res) =>{
    const id = req.params.id;
    
    await Workout.deleteOne({_id:id}).then((data)=>{
        console.log(data);
    }).catch((err)=>{
        console.log(err);
    });

    res.send("Deleted workout");
};



// update a single workout
const updateWorkout = async(req, res) => {
    const id = req.params.id;
    const {title, reps, load} = req.body;

    // console.log(id);
    // console.log(req.query);
    Workout.updateOne({_id:id}, {title:title, reps:reps, load:load}).then((data) =>{
        console.log(data);
    }).catch((err) =>{
        console.log(err);
    });

};



// Exporting this controller functions....
module.exports = {
    createWorkout,
    getAllWorkoutes,
    getWorkout,
    deleteWorkout,
    updateWorkout
}
