// Importing the module
const mongoose = require('mongoose');

// Create and connecting to the database
mongoose.connect("mongodb://localhost:27017/WorkoutsDB", { useNewUrlParser: true });

// Modeling the collection 
const workoutSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    reps:{
        type: Number,
        required: true
    },
    load:{
        type: Number,
        required: true
    }
}, {timestamps: true});


// Creating collection Object
const Workout = mongoose.model('Workout', workoutSchema);

// Exporting this collection
module.exports  = Workout;