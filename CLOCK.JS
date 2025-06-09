const hourElement = document.getElementById('hour');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const ampmElement = document.getElementById('ampm');

function updateClock(){
    let hour = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();
    let ampm = 'AM';
    if (hour>12){
            hour=hour-12;
            ampm = 'PM'
    }
    if (hour<10){
        hour = "0"+hour;
    }
    if (min<10){
        min="0"+min;
    }
    if (sec<10){
        sec="0"+sec;
    }
    hourElement.innerText=hour;
    minutesElement.innerText=min;
    secondsElement.innerText=sec;
    ampmElement.innerText=ampm;
    setTimeout(()=>{
        updateClock();
    },1000)
}

updateClock();