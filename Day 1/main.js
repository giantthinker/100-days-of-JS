function currentTime(){

    var time = new Date();

    var hour = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();

    var hr = document.getElementById("hours");
    var min = document.getElementById("minutes");
    var sec = document.getElementById("seconds");

    if(minutes < 10){
        minutes = "0" + minutes;
    }
    min.innerHTML = minutes;

    if(seconds < 10){
        seconds = "0" + seconds;
    }
    sec.innerHTML = seconds;

   if(hour < 10){
       hour = "0" + hour;
   }
    hr.innerHTML = hour;

}
window.onload = setInterval(currentTime, 1000);