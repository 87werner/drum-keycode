//Drum sounds
const boom = document.getElementById("boom")
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openHat = document.getElementById("openhat")
let ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tink = document.getElementById("tink")
const tom = document.getElementById("tom")

//Drum Kit
let mainRide = document.getElementById("mainRide")
let mainTom = document.getElementById("mainTom")
let mainTomCase = document.getElementById("mainTomCase")


document.addEventListener("keydown", (e) => {
    console.log(e)
    console.log(e.keyCode)
    if(e.which == 65){
        boom.pause()
        boom.play()
    }else if(e.which == 83){
        clap.play()
    } else if(e.which == 68){
        hihat.play()
    }else if(e.which == 70){
        kick.play()
    } else if(e.which == 71){
        openHat.play()
    }else if(e.which == 72){
        mainRide.style.animation = "wobble 0.5s linear"
        setTimeout(() => {
            mainRide.style.removeProperty("animation")
        }, 100)
        ride.pause()
        ride.currentTime = 0
        ride.play();
    }else if(e.which == 74){
        snare.play()
    }else if(e.which == 75){
        tink.play()
    }else if(e.which == 76){
        mainTomCase.style.animation = "tom 0.5s linear"
        mainTom.style.animation = "tom 0.5s linear"
        setTimeout(() => {
            mainTom.style.removeProperty("animation")
            mainTomCase.style.removeProperty("animation")
        }, 100)
        tom.pause()
        tom.currentTime = 0
        tom.play();
    } 
    
})