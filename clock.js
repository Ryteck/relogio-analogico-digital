var hands = {
    hour: document.querySelector('.hour-hand'),
    minute: document.querySelector('.min-hand'),
    second: document.querySelector('.second-hand')
}
var digitalClock = document.querySelector('.digital-clock span');
function setDate()
{
    var date = new Date;
    var sec = date.getSeconds();
    var hour = date.getHours() %12;
    var min = date.getMinutes();
    
    hands.second.style.setProperty('transform' , `rotate(${(sec * 6 ) + 90}deg)`);
    hands.minute.style.setProperty('transform' , `rotate(${(min * 6 )+ 90}deg)`);
    hands.hour.style.setProperty('transform' , `rotate(${(hour * 30 )+ 90}deg)`);



    // override variable for digital clock
    hour = hour < 10 ? `0${hour}` : hour;
    min = min < 10 ? `0${min}` : min;
    sec = sec < 10 ? `0${sec}` : sec;
    // get AM / PM
    var ampm = date.getHours() > 12 ? 'PM' : 'AM' 

    // Push clock text
    digitalClock.textContent = `${hour} : ${min} : ${sec} ${ampm}`;

    // Clock tick sound
    var audio = document.querySelector('audio');
    audio.volume = .3; // reduce audio sound (30%)
    audio.play();
}
setInterval( setDate , 1000);