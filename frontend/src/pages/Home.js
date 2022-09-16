// imporing Hooks 
import { useEffect, useState } from 'react';


function Home(){

    // Use Effect for fetching data from the server
    useEffect(()=>{
        const fetchWorkouts = async () => {
            await fetch('/api/workouts')
            .then((data)=>{
                console.log("Data: ",data);
            })
            .catch((err)=>{
                console.log("Error :",err);
            });
        };

        fetchWorkouts();
    }, []);

    return(
        <h1>Home page</h1>
    );
}

export default Home;