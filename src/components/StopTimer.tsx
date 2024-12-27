import { useCallback } from "react";

const StartTimer = ({onStop}) => {
    const handleClick = useCallback(() => {
        onStop();
    }, []);

    return (
        <button onClick={handleClick}>Stop</button>
    )
}

export default StartTimer;