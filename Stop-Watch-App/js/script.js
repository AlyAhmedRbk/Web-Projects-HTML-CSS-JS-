let displayTime = document.getElementById("displayTime");
let [sec, min, hours] = [0,0,0];
let timer = null;


function stopWatch(){
    sec++;
    if(sec == 60){
        sec = 0;
        min++;

        if(min == 60){
            min = 0;
            hours++;
        }
    }
    
    if(hours<10){
        var h="0"+hours;
    }else{
        h=hours;
    }
    if(min<10){
        var m="0"+min;
    }else{
        m=min;
    }
    if(sec<10){
        var s="0"+sec;
    }else{
        s=sec;
    }
    displayTime.innerHTML = h+":"+m +":"+s;
}


function startWatch(){
    if(timer !== null){
        clearInterval(timer);    
    }
    timer = setInterval(stopWatch,1000);
}

function watchStop(){
    clearInterval(timer);
}

function resetWatch(){
    clearInterval(timer);
    [hours, min, sec] = [0, 0, 0];
    displayTime.innerHTML = "00:00:00"
}