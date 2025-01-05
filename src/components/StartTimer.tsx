import { memo } from "react";

const StartTimer = ({onStart}) => {
    return (
        <button onClick={onStart}>Start</button>
    );
}

export default memo(StartTimer);