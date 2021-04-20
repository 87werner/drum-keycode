//Drum sounds
const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openHat = document.getElementById("openhat")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

console.log(boom)

document.addEventListener("keydown", (e) => {
    console.log(e)
    console.log(e.keyCode)
    if(e.which == 65){
        boom.play()
    }else if(e.which == 83){
        clap.play()
    } else if(e.which == 68){
        hihat.play()
    }else if(e.which == 70){

    } else if(e.which == 71){

    }else if(e.which == 72){

    }else if(e.which == 74){

    }else if(e.which == 75){

    }else if(e.which == 76)
    
    
})