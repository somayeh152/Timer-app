import { useState, useEffect, useRef, useCallback } from "react";
import formatTime from './utils/formatTime.ts';
import StartTimer from "./components/StartTimer.tsx";
import StopTimer from "./components/StopTimer.tsx";
import ResetTimer from "./components/ResetTimer.tsx";
import LapsTime from "./components/LapsTime.tsx";

function Timer() {
    const [counter, setCounter] = useState(0);
    const [laps, setLaps] = useState([]);
    const timerRef = useRef(null); // Persistent reference for the timer

    // Start the timer. (if you press it again it should not create another timer)
    const startTimer = useCallback(() => {
        if (!timerRef.current) {
            const interval = setInterval(() => {
                setCounter(prevCounter => prevCounter + 1)
            },1000);
            timerRef.current = interval;
        }
    }, []);

    // Stop the timer, Actually this is a pause button (it just hold the time and when you press start it will continue)
    const stopTimer = useCallback(() => {
        if(timerRef.current){
            clearInterval(timerRef.current);
            timerRef.current = null;
        }
    }, []);

    // Reset the timer - reset time and clean the UI
    const resetTimer = useCallback(() => {
        stopTimer();
        setCounter(0);
        setLaps([]);
    }, []);

    // Add a lap - by click on lap, get the time and show the list of them in UI
    const addLap = () => {
        setLaps((prevLaps) => [...prevLaps, counter]);
    }

    useEffect(() => {
        return () => stopTimer(); // Clean up the timer on unmount
    }, []);

    return (
        <div>
            <h1>Timer: {formatTime(counter)} seconds</h1>
            <StartTimer onStart={startTimer} />
            <StopTimer onStop={stopTimer} />
            <ResetTimer onReset={resetTimer} />
            <LapsTime onLaps={addLap} />
            <ul>
                {laps.map((lap, index) => (
                    <li key={index}>Lap {index + 1}: {formatTime(lap)} seconds</li>
                ))}
            </ul>
        </div>
    );
}

export default Timer;
