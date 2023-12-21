let clicks = 0;
document.querySelector("#info").style.background="white";
document.querySelector("#info").style.color="black";

function contadorClicks(){
    clicks++;
    
    if (clicks === 1){
        document.querySelector("#info").innerHTML="Has pulsado el botón.";
        document.querySelector("#info").style.background="white";
        document.querySelector("#info").style.color="black";
    }
    
    if (clicks === 2){
        document.querySelector("#info").innerHTML="Has vuelto a pulsar el boton!";
        document.querySelector("#info").style.background="white";
        document.querySelector("#info").style.color="black";
    }
    
    if (clicks === 3){
        document.querySelector("#info").innerHTML="Has vuelto a pulsar el boton!";
        document.querySelector("#info").style.background="black";
        document.querySelector("#info").style.color="white";
    }
    
    if (clicks === 4){
        document.querySelector("#info").innerHTML="Pulsa el boton.";
        document.querySelector("#info").style.background="white";
        document.querySelector("#info").style.color="black";
        clicks = 0;
    }
}