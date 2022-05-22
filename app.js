let currentMusic = 0;

const music = document.querySelector('#audio');

const seekBar=document.querySelector('seek-bar');
const currentTime=document.querySelector('current-time');
const MusicDuration=document.querySelector('song-duration');
const PlayBtn=document.querySelector('play-btn pause');
const ForwardBtn=document.querySelector('forward-btn');
const BackwardBtn=document.querySelector('backward-btn');


PlayBtn.addEventListener('click', () =>{
    PlayBtn.classList.toggle('pause');
})

//set up music
const setMusic =(i) =>{
    seekBar.value =0;// set range slide value to 0;
}
var modal=document.getElementById("myModal");

var btn=document.getElementById("myBtn");
var span=document.getElementsByClassName("close")[0];

btn.onclick=funtion()
    modal.style.display="block";

span.onclick=function(){
    modal.style.display ="none";
}
window.onclick=function(event){
    if(event.target == modal){
        modal.style.display="none";

    }
}