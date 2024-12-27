import { useCallback } from "react";

const StartTimer = ({onReset}) => {
    const handleClick = useCallback(() => {
        onReset();
    }, []);

    return (
        <button onClick={handleClick}>Reset</button>
    )
}

export default StartTimer;