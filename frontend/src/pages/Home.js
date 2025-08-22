import React, { useEffect, useState } from 'react'
import  WorkoutDetails  from '../components/WorkoutDetails';
import WorkoutForm from '../components/WorkoutForm';

export const Home = () => {
    const [workouts, setWorkouts] = useState([]);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        document.title = 'Home - Workout App';
        const fetchWorkouts = async () => {
            try {
                const response = await fetch('http://localhost:4000/api/workouts');
                const json = await response.json();
                
                if (response.ok) {
                    setWorkouts(json);
                    setError(null);
                } else {
                    setError('Could not fetch workouts');
                }
            } catch (err) {
                setError('Server not responding');
                console.error('Error:', err);
            }
        }
        fetchWorkouts();
    }, []);

    return (
        <div className='home'>
            {error && <div className="error">{error}</div>}
            <div className='workouts'>
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails key={workout._id} workout={workout} />
                ))}
            </div>
            <WorkoutForm />
        </div>
    )
}
