//main sounds
const creeper = new Audio("creeper.mp3")
const happy = new Audio("happy.mp3")
const wow = new Audio("wow.mp3")
const fail = new Audio("spongebob-fail.mp3")
const jet2 = new Audio("jet2.mp3")
const later = new Audio("later.mp3")
const amongus = new Audio("among-us.mp3")
const kid = new Audio("kid.mp3")
const oof = new Audio("oof.mp3")
const chicken = new Audio("chicken-banana.mp3")
const doh = new Audio("doh.mp3")
const naplan = new Audio("naplan.mp3")
//meme sounds 
const sixSeven = new Audio("67.mp3")
const vineBoom = new Audio("vine-boom.mp3")
const getOut = new Audio("get-out.mp3")
const android = new Audio("boop.mp3")
const goofy = new Audio("goofy-laugh.mp3")


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
