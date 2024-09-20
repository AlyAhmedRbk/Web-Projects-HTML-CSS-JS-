let progress = document.getElementById("progress");
let song = document.getElementById("song");
let contolIcon = document.getElementById("controlIcon");

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

const playPause = () => {
    if(contolIcon.classList.contains("fa-pause")){
        song.pause();
        contolIcon.classList.remove("fa-pause")
        contolIcon.classList.add("fa-play")
    }else{
        song.play();
        contolIcon.classList.remove("fa-play")
        contolIcon.classList.add("fa-pause")
    }
}

if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    }, 500)
}

progress.onchange = ()=>{
    song.play();
    song.currentTime = progress.value;
    contolIcon.classList.remove("fa-play")
    contolIcon.classList.add("fa-pause")
}