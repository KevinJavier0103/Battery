

for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",playSound);
    
    function playSound(){
        if (i==0){
            nombre="sounds/crash.mp3";
        }else if (i==1){
            nombre="sounds/kick-bass.mp3";
        }else if (i==2){
            nombre="sounds/snare.mp3";
        } else if (i==3){
            nombre="sounds/tom-1.mp3";
        }else if (i==4){
            nombre="sounds/tom-2.mp3";
        }else if (i==5){
            nombre="sounds/tom-3.mp3";
        }else if (i==6){
            nombre="sounds/tom-4.mp3";
        }
        var audio=new Audio(nombre);
        audio.loop=false;
        audio.play();
        document.querySelectorAll(".drum")[i].style.color="#E09510";
    }
}