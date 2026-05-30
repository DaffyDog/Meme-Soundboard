//main sounds
const creeper = new Audio("public/Sounds/creeper.mp3")
const happy = new Audio("public/Sounds/happy.mp3")
const wow = new Audio("public/Sounds/wow.mp3")
const fail = new Audio("public/Sounds/spongebob-fail.mp3")
const jet2 = new Audio("public/Sounds/jet2.mp3")
const later = new Audio("public/Sounds/later.mp3")
const amongus = new Audio("public/Sounds/among-us.mp3")
const kid = new Audio("public/Sounds/kid.mp3")
const oof = new Audio("public/Sounds/oof.mp3")
const chicken = new Audio("public/Sounds/chicken-banana.mp3")
const doh = new Audio("public/Sounds/doh.mp3")
const naplan = new Audio("public/Sounds/naplan.mp3")
const dog = new Audio("./WhatTheDogDoin.mp3")
//meme sounds 
const sixSeven = new Audio("public/Sounds/Meme/67.mp3")
const vineBoom = new Audio("public/Sounds/Meme/vine-boom.mp3")
const getOut = new Audio("public/Sounds/Meme/get-out.mp3")
const android = new Audio("public/Sounds/Meme/boop.mp3")
const goofy = new Audio("public/Sounds/Meme/goofy-laugh.mp3")
const fah = new Audio("public/Sounds/Meme/fah.mp3")

//HTML ELEMENTS
const input = document.getElementById("Code")
const idioticSet = document.getElementById("IdioticSet")
const memeSet = document.getElementById("MemeSet")

function playCreeper() {
    creeper.play()
    console.log("Creeper aw man...")
}
function playHappyCat() {
   happy.play()
   console.log("Happy Happy Happy")
}
function playWow() {
   wow.play()
   console.log("Wow!!")
}
function playFail() {
   fail.play()
   console.log("Fail")
}
function playJet2() {
   jet2.play()
   console.log("Nothing Beats A Jet 2 Holiday")
}
function playLater() {
    later.play()
    console.log("A few moments later")
}
function playAmongUs() {
    amongus.play()
    console.log("Imposter")
}
function playKid() {
    kid.play()
    console.log("ever since i was a kid i am steve")
}
function playOof() {
    oof.play()
    console.log("oof")
}
function playChickenBanana() {
    chicken.play()
    console.log("Chicken Banana")
}
function playDoh() {
    doh.play()
    console.log("D'oh")
}
function playNAPLAN() {
    naplan.play()
    console.log("RIP")
}
function playDog() {
    dog.play()
    console.log("What The Dog Doin?")
}

//meme set:

function play67() {
    sixSeven.play()
    console.log("67")
}
function playBoom() {
    vineBoom.play()
    console.log("BOOOOOM!")
}
function playAndroid() {
    android.play()
    console.log("Boop")
}
function playGoofy() {
    goofy.play()
    console.log("HAHAHA")
}
function playGetOut() {
    getOut.play()
    console.log("GET OUT!")
}
function playFah() {
    fah.play()
    console.log("FAHHHHHH")
}

function request() {
    input.style.display = "block"
}

function init() {
    input.style.display = "none"
    idioticSetHide()
    memeSetHide()
}

//extra soundsets!

function idioticSetShow() {
    idioticSet.style.display = "block"
}

function idioticSetHide() {
    idioticSet.style.display = "none"
}

function  memeSetShow() {
    memeSet.style.display = "block"
}

function  memeSetHide() {
    memeSet.style.display = "none"
}

input.addEventListener('input', function(event) {
    const value = event.target.value; 
    if (value==="(:") {
        console.log("Idiotic Set unlocked")
        idioticSetShow()
        alert("Idiotic Set Unlocked!")
    } else if (value==="meme") {
        console.log("Meme Set unlocked")
        memeSetShow()
        alert("Meme Set Unlocked!")
    }
});

init()
