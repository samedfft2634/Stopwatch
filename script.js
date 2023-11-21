const stopWatch = document.getElementById("stopWatch");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");
//sound effect
const playSound = document.getElementById("playSound");
const stopSound = document.getElementById("stopSound");
const resetSound = document.getElementById("resetSound");

let [hours, minutes, seconds, mseconds] = [0, 0, 0, 0];

let setStopWatch;
let flag = true;

const stopWatchUpdate = () => {
	mseconds += 1;
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
	stopWatch.innerText = `${hours < 10 ? "0" + hours : hours}:${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}:${mseconds < 10 ? "0" + mseconds : mseconds} 
    `;
};

play.addEventListener("click", () => {
	if (flag) {
		setStopWatch = setInterval(stopWatchUpdate, 10);
		flag = false;
		playSound.play();
	}

});

stop.addEventListener("click", () => {
	clearInterval(setStopWatch);
	flag = true;
	stopSound.play();
});

reset.addEventListener("click", () => {
	clearInterval(setStopWatch);
	[hours, minutes, seconds, mseconds] = [0, 0, 0, 0];
    flag = true
	stopWatch.innerText = "00:00:00:00";
	resetSound.play()
});

const updateClock = ()=>{
	const dateBody = document.getElementById("date")
	const timeBody = document.getElementById("time")
	//
	const date = new Date();
	const day = date.getDate().toString().padStart(2, "0");
	const month = (date.getMonth() + 1).toString().padStart(2, "0");
	const year = date.getFullYear().toString().slice(-2);
	dateBody.innerText = `${day}/${month}/${year}`
	dateBody.style.fontFamily = "Digital"	
	//
	const hour = date.getHours()
	const minute = date.getMinutes()
	timeBody.innerText = `${hour}.${minute< 10 ? "0"+ minute : minute}`
	timeBody.style.fontFamily = "Digital"	
}
updateClock()
setInterval(updateClock,1000)