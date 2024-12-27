function formatTime (seconds: number){
    const pad = (num) => String(num).padStart(2, "0"); // JS method to ensure two digits for each component
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
}

export default formatTime;