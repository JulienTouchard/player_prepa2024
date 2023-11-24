console.log("hello");
var playPause = document.getElementById("playPause");
var imgPlayPause = document.getElementById("imgPlayPause");
var forward = document.getElementById("forward");
var backward = document.getElementById("backward");
var current = 0

// declaration de tableaux
var musics = [
    "./assets/audio/its-bigger-than-hip-hop-dead-prez.mp3",//0
    "./assets/audio/Gorillaz - Dare HD.mp3",//1
    "./assets/audio/Missy Elliott - Work It [Official Music Video].mp3"//2
]
// renvoie la taille (nombre d'entrées d'un tableau)
console.log(musics.length);
var covers = [
    "./assets/img/cover/coverDeadPrez.jpg",//0
    "./assets/img/cover/Gorillaz - Dare HD.jpg",//1
    "./assets/img/cover/workit-MissyElliott.jpg"//2
]
var mp3 = new Audio(musics[current]);
var lecture = false;
playPause.addEventListener("click", () => {
    if (lecture === false) {
        mp3.play();
        lecture = true;
        imgPlayPause.src = "./assets/img/pause-solid.svg";
    } else {
        mp3.pause();
        lecture = false;
        imgPlayPause.src = "./assets/img/play-solid.svg";
    }
})
forward.addEventListener("click", () => {
    current = current+1
    mp3.pause();
    lecture = false;
    imgPlayPause.src = "./assets/img/play-solid.svg";
    mp3 = new Audio(musics[current]);
    mp3.play();
    lecture = true;
    imgPlayPause.src = "./assets/img/pause-solid.svg";

})