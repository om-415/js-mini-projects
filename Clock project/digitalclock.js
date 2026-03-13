function updateClock(){
    let now = new Date();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if(h < 10) h = '0' + h;
    if(m < 10) m = '0' + m;
    if(s < 10) s = '0' + s;

    document.getElementById('time').innerText = h + ':' + m + ':' + s;
    let options= { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date').innerText = now.toLocaleDateString(undefined, options);
}
setInterval(updateClock,1000);
updateClock();