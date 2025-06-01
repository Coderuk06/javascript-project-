let proges = document.getElementById("proges");
let song = document.getElementById("song");
let ctrlIcn = document.getElementById("ctrlIcn");

song.onloadedmetadata = function(){
    proges.max= song.duration;
    proges.value= song.currentTime;
}

function playPause(){
    if(ctrlIcn.classList.contains("fa-pause")){
        song.pause();
        ctrlIcn.classList.remove("fa-pause");
        ctrlIcn.classList.add("fa-play");

    }else{
        song.play();
        ctrlIcn.classList.add("fa-pause");
        ctrlIcn.classList.remove("fa-play");
    }
}

if(song.play()){
    setInterval(()=>{
        proges.value = song.currentTime;
    },5000)
}

proges.onchange = function(){
    song.play();
    song.currentTime = proges.value;
    ctrlIcn.classList.add("fa-pause");
    ctrlIcn.classList.remove("fa-play");
}
