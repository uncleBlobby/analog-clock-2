
var clockBG = document.getElementById("clockBG");
var ctx = clockBG.getContext("2d");
var radius = clockBG.height /2;
ctx.translate(radius, radius);
ctx.rotate(-90 * Math.PI / 180);
radius = radius * 0.9;

var digitDisplay = document.getElementById("digitDisplay");
var dtx = digitDisplay.getContext("2d");





setInterval(drawClock, 1000);
//showTime();
//currentSeconds();

function currentSeconds(){
    let now = new Date();
    let second = now.getSeconds();
    //console.log(second);
    return second;
}

function currentMinute() {
    let now = new Date();
    let minute = now.getMinutes();
    //console.log(minute);
    return minute;
}

function currentHour() {
    let now = new Date();
    let hour = now.getHours();
    //console.log(hour);
    if (hour > 12){
        hour = hour - 12;
    }
    return hour;
}

function showTime(hour, minute, second){
    dtx.font = "30px Arial";
    if(hour < 10){
        hour = "0" + hour;
    }
    if(minute < 10){
        minute = "0" + minute;
    }
    if(second < 10){
        second = "0" + second;
    }
    //ctx.rotate(90 * Math.PI/180);
    dtx.clearRect(0, 0, 400, 400);
    dtx.fillStyle = "#91491C";
    dtx.fillText(hour + ":" + minute + ":" + second, 135, 200);
}


function drawClock() {
    currentSeconds();
    let second = currentSeconds();
    ctx.clearRect(-200, -200, 400, 400);
    ctx.beginPath();
    ctx.moveTo(radius * 0.5 ,0);
    ctx.arc(0, 0, radius * 0.5, 0, ((2 * (second/60)) * Math.PI));
    ctx.strokeStyle = "#57DADE";
    ctx.lineWidth = 5;
    ctx.stroke();

    currentMinute();
    let minute = currentMinute();
    ctx.beginPath();
    ctx.moveTo(radius * 0.6, 0);
    ctx.arc(0, 0, radius * 0.6, 0, ((2 * (minute/60)) * Math.PI));
    ctx.strokeStyle = "#7DFBFF";
    ctx.lineWidth = 15;
    ctx.stroke();

    currentHour();
    let hour = currentHour();
    ctx.beginPath();
    ctx.moveTo(radius * 0.75, 0);
    ctx.arc(0, 0, radius * 0.75, 0, ((2 * (hour/12)) * Math.PI));
    ctx.strokeStyle = "#2A8E91";
    ctx.lineWidth = 20;
    ctx.stroke();

    showTime(hour, minute, second);

    
}