// Importing the module
const mongoose = require('mongoose');

// Create and connecting to the database
mongoose.connect("mongodb://localhost:27017/WorkoutsDB", { useNewUrlParser: true });

// Modeling ....
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


// Creating Object for the model
const Workout = mongoose.model('Workout', workoutSchema);

// Exporting this model
module.exports  = Workout;
