let seconds = 3600;

setInterval(() => {
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;

    document.getElementById("timer").innerText =
        hrs + " : " + mins + " : " + secs;

    if(seconds > 0){
        seconds--;
    }
}, 1000);
