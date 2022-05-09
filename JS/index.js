// Mouse
for (let i=0;i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
    /*
    metodo con sentencia if 
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
        //Lo mismo que lo siguiente 
        //document.querySelectorAll(".drum")[i].style.color="#E09510";
        this.style.color="#E09510";
    }
    */
   // Otro mentodo con switch
        let letra=this.innerHTML;
        makeSound(letra);
        buttonAnimation(letra);
})}
// Teclado
document.addEventListener("keypress",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})


function makeSound(key){
    let nombre; 
    switch (key) {
        case "w":
            nombre="sounds/crash.mp3";
            break;
        case "a":
            nombre="sounds/kick-bass.mp3";
            break;
        case "s":
            nombre="sounds/snare.mp3";
            break;
        case "d":
            nombre="sounds/tom-1.mp3";
            break;
        case "j":
            nombre="sounds/tom-2.mp3";
            break;
        case "k":
            nombre="sounds/tom-3.mp3";
            break;
        case "l":
            nombre="sounds/tom-4.mp3";
            break;
        default:console.log(key);

    }
    var audio=new Audio(nombre);
    audio.loop=false;
    audio.play();
}

// Animación de botones generando un efecto de sombra 
function buttonAnimation(currentKey){

    let activeButton=document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // setTimeout genera un temporizador siendo elprimer elemento la funcion a ejecutar y despues
    //el tiempo del efecto.
    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100)

}