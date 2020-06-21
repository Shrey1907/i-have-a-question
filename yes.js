var clicks=0;

document.querySelector("body").addEventListener("click",function(){
  if (clicks===0){
    var audio = new Audio("Tum Se Hi (Jab We Met) - Mohit Chauhan - 320Kbps.mp3");
    audio.play();
    clicks=clicks+1;
}
});
