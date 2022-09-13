const express = require('express');

const router = express.Router();

// router.get('/', (req,res)=>{
//     res.send("Home");
// });

// router.get('/hello', (req, res)=>{
//     res.send("Hello");
// });


router.get('/', (req,res)=>{
    res.send("Get All Workouts");
});


router.get('/:id', (req,res)=>{
    res.send("Get Single Workout");
});


router.post('/', (req,res)=>{
    res.send("Post a new Workout");
});

router.delete('/:id', (req,res)=>{
    res.send("Delete a Workout");
});


router.patch('/:id', (req,res)=>{
    res.send("Update a Workout");
});





module.exports = router;