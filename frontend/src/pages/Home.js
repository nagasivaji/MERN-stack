// imporing Hooks 
import { useEffect, useState } from 'react';

//Importing Components
import WorkoutDetails  from './../components/WorkoutDetails'
import WorkoutForm from './../components/WorkoutForm';

function Home(){

    // Use State
    const [workouts, setWorkouts] = useState(null);
    const [refresh, setRefresh] = useState(true);

    // Use Effect for fetching data from the server
    useEffect(()=>{
        const fetchWorkouts = async () => {
            await fetch('api/workouts')
            .then((response)=>{
                console.log("Response received from Server");
                return response.json();
            }).then((data)=>{
                console.log("JSON data :", data);
                setWorkouts(data);
            })
            .catch((err)=>{
                console.log("Error while fetching data:",err);
            });
        };

        fetchWorkouts();
    }, [refresh]);


    function handleRefresh(){
        setRefresh(!refresh);
    }

    return(
        <div className='home'>
            <div className="workoutes">
                {workouts && workouts.map((workout) =>(
                    <WorkoutDetails 
                    
                    key={workout._id}
                    workout={workout}
                    refresh = {handleRefresh}
                    />
                ))}
            </div>
            <WorkoutForm
                refresh = {handleRefresh}
            />
        </div>
    );
}

export default Home;