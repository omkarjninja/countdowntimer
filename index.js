const startingminutes = 60;
let time = startingminutes * 60;

const countdownele = document.getElementById("countdown");

setInterval(updatecountdown , 1000);

function updatecountdown() {
const minutes = Math.floor(time/60);
let seconds = time % 60;

seconds = seconds < 10 ? '0' + seconds : seconds;


countdownele.innerHTML = `${minutes} : ${seconds}`;
time--;

}
