function countdownTimer(totalSeconds){
const countdownInterval = setInterval(function(){
    var days =document.getElementById('days');
const add = Math.floor(totalSeconds / (24 * 60 * 60))
var hours = document.getElementById('hours');
const sub = Math.floor((totalSeconds % (24 * 60 * 60)) / (60 * 60));
var minutes = document.getElementById('minutes');
const div = Math.floor((totalSeconds % (60 * 60) / 60));
var seconds = document.getElementById('seconds');
const mul = totalSeconds % 60;

days.innerHTML = add;
hours.innerHTML = sub;
minutes.innerHTML = div;
seconds.innerHTML = mul;

totalSeconds--;

if(totalSeconds <0){
    clearInterval(countdownInterval);
    totalSeconds = initialTotalSeconds;
    setTimeout(countdownTimer(totalSeconds), 1000);
}
},1000)
}

const initialTotalSeconds = 864000;
countdownTimer(initialTotalSeconds);