


function WorkoutDetails(props) {
    //console.log(props.workout);

    async function handleClick (){
        await fetch('api/workouts/'+props.workout._id, {
            method: 'DELETE'
        })
        .then((response) =>{
            console.log("Response received from Server");
            //console.log(response);
            return response;
            //return response.json();
        })
        .then((data) => {
            console.log("JSON data:", data);
            props.refresh();
        })  
        .catch((err)=>{
            console.log("Error:", err);
            console.log("Error while deleting Workout");
        });
    }

    return (
        <div className="workout-details">
            <h4>{props.workout.title}</h4>
            <p><strong>Load (kg): </strong>{props.workout.load}</p>
            <p><strong>Reps: </strong>{props.workout.reps}</p>
            <p>{props.workout.createdAt}</p>
            <span onClick={handleClick}>delete</span>
        </div>
    );
}

export default WorkoutDetails;