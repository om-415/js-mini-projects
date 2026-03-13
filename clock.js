function updateClock(){
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes= now.getMinutes();
    let hours = now.getHours();

    // degree calculation
    let secondsDeg = now.getSeconds() * 6;
    let minuteDeg = now.getMinutes()* 6 + seconds * 0.1;
    let hourDeg = now.getHours()*30 + minutes *0.5;
    document.querySelector(".second").style.transform = `translate(-50%) rotate(${secondsDeg}deg)`
    document.querySelector(".minute").style.transform = `translate(-50%) rotate(${minuteDeg}deg)`
    document.querySelector(".hour").style.transform = `translate(-50%) rotate(${hourDeg}deg)`

}
setInterval(updateClock, 1000);
updateClock();