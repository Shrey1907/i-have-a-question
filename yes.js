var clicks=0;

document.querySelector("body").addEventListener("click",function(){
  if (clicks===0){
    var audio = new Audio("BIN TERE SANAM (Remix)-(MafiaRemix.Com).mp3");
    audio.play();
    clicks=clicks+1;
}
});
