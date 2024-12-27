import { useCallback } from "react";

const StartTimer = ({onStart}) => {
    const handleClick = useCallback(() => {
        onStart();
    }, []);

    return (
        <button onClick={handleClick}>Start</button>
    );
}

export default StartTimer;