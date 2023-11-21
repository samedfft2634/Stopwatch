const stopWatch = document.getElementById("stopWatch");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

let [hours, minutes, seconds, mseconds] = [0, 0, 0, 0];

let setStopWatch;
let flag = true;

const stopWatchUpdate = () => {
	mseconds += 10;
	if (mseconds >= 100) {
		mseconds = 0;
		seconds++;
	}
	if (seconds >= 60) {
		seconds = 0;
		minutes++;
	}
	if (minutes >= 60) {
		minutes = 0;
		hours++;
	}
	stopWatch.innerText = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${mseconds} 
    `;
};

play.addEventListener("click", () => {
	if (flag) {
		setStopWatch = setInterval(stopWatchUpdate, 100);
		flag = false;
	}
});

stop.addEventListener("click", () => {
	clearInterval(setStopWatch);
	flag = true;
});

reset.addEventListener("click", () => {
	clearInterval(setStopWatch);
	[hours, minutes, seconds, mseconds] = [0, 0, 0, 0];
    flag = true
	stopWatch.innerText = "00:00:00:00";
});
