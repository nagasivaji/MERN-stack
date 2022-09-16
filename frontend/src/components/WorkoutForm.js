import { useState } from "react";

function WorkoutForm(){

    // useState for form data

    const [title, setTitle] = useState('');
    const [reps, setReps] = useState('');
    const [load, setLoad] = useState('');
    const [error, setError] = useState(null);

    async function handleSubmit(event){ 
        event.preventDefault();

        const workout = {title, reps, load};
        //console.log(JSON.stringify(workout));

        // Posting the workout
        await fetch('api/workouts', {
            method: 'POST',
            body: JSON.stringify(workout),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then((response) =>{
            console.log("Response received from Server");
            //console.log(response);
            return response.json();
        })
        .then((data) => {
            console.log("JSON data:", data);
            setTitle("");
            setReps("");
            setLoad("");
            setError(null);
        })  
        .catch((err)=>{
            console.log("Error:", err);
            setError("Error while adding new Workout");
        });
    }

    return(
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Workout</h3>

            <label>Excersize Title:</label>
            <input 
                type="text"
                onChange={(event)=>setTitle(event.target.value)}
                value={title}
            />
            
            <label>Load (in Kg):</label>
            <input 
                type="number"
                onChange={(event)=>setLoad(event.target.value)}
                value={load}
            />
            
            <label>Reps:</label>
            <input 
                type="number"
                onChange={(event)=>setReps(event.target.value)}
                value={reps}
            />
            
            <button type="submit">Add Workout</button>
            {error && <div className="error">{error}</div>}
        </form>
    );
}


export default WorkoutForm;