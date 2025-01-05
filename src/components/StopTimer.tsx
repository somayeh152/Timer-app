import { memo } from "react";

const StopTimer = ({onStop}) => {
    return (
        <button onClick={onStop}>Stop</button>
    )
}

export default memo(StopTimer);