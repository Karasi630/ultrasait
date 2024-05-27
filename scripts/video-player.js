const video = document.getElementById("myVideo");
const btnPlay = document.getElementById("play");
const btnMute = document.getElementById("mute");

function play(){
	if (video.paused) {
		video.play();
      btnPlay.innerHTML = "Paused";
	}
	else{
		video.pause();
		btnPlay.innerHTML = "Play"
	}
}
function mute(){
	if(video.muted){
		video.muted = false;
		btnMute.innerHTML = "off";
	}
	else {
		video.muted = true;
		btnMute.innerHTML = "on";
	}
}




























