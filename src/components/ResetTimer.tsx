import { memo } from "react";

const ResetTimer = ({onReset}) => {
    return (
        <button onClick={onReset}>Reset</button>
    )
}

export default memo(ResetTimer);