function showTime(){
    var date = new Date();
    var hh = date.getHours();
    var mm = date.getMinutes();
    var ss = date.getSeconds();
    var session = "AM";

    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh-12;
        session = "PM"
    }

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    var time = hh + ":" + mm + ":" + ss + ":" + "AM";

    document.querySelector(".digital-clock").innerText = time;    
    document.querySelector(".digital-clock").innerContent= time; 
    
    setTimeout(showTime, 1000);

}

showTime();