let count = 0;
let hover = 0;
let menu = document.getElementsByClassName('menu-item');
let menuText = document.getElementsByClassName('menu-link');
let welcome = document.getElementsByClassName('welcome');
let welcomesub = document.getElementsByClassName('welcomesub');
let fuck = document.getElementsByClassName('fuck');
var prim = '#ff4fd6'
let hiddenBox = document.getElementsByClassName('hiddenBox');
let credit = document.getElementsByClassName('credit');


const copys = document.querySelector(".copy");
const copyAlert = document.querySelector(".copyAlert");


const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

const shutterAni = [{
    
        opacity: 1,

            },

    {
        transform: 'rotate(30deg)',
        offset: 0.5
            },

    {
        transform: 'translateY(' + (-100) + 'px)',

        opacity: 0,

        offset: 1
            }
        ];

const timing = {
    duration: 900,
    iterations: 1,
}




menuText[0].addEventListener('mouseover', () => {
    fuck[0].style.visibility = 'visible'
    menuText[0].style.color = 'var(--prim)'

    console.log('sosoo')
})

menu[0].addEventListener('mouseout', () => {
    fuck[0].style.visibility = 'hidden'
    menuText[0].style.color = 'var(--text)'


})
menu[1].addEventListener('mouseover', () => {
    fuck[0].style.visibility = 'visible'
    menuText[1].style.color = 'var(--prim)'

})

menu[1].addEventListener('mouseout', () => {
    fuck[0].style.visibility = 'hidden'
    menuText[1].style.color = 'var(--text)'

})
menu[2].addEventListener('mouseover', () => {
    fuck[0].style.visibility = 'visible'
    menuText[2].style.color = 'var(--prim)'

})

menu[2].addEventListener('mouseout', () => {
    fuck[0].style.visibility = 'hidden'
    menuText[2].style.color = 'var(--text)'

})
menu[3].addEventListener('mouseover', () => {
    fuck[0].style.visibility = 'visible'
    menuText[3].style.color = 'var(--prim)'

})

menu[3].addEventListener('mouseout', () => {
    fuck[0].style.visibility = 'hidden'
    menuText[3].style.color = 'var(--text)'

})


const zzals = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.png", "7.jpg", "8.jpg", "9.jpg", "10.jpg", "11.jpg", "12.png"];

var zzalLen = zzals.length
var num = Array.from({length: zzalLen}, (item, index) => index);
num.sort(() => Math.random() - 0.5);



var chosenImg = zzals[Math.floor(Math.random() * zzals.length)];

var windowWidth = document.body.clientWidth;
var windowHeight = document.body.clientHeight;
var mouseMoveCounter = 0

setInterval(() => mouseMoveCounter++, 1000);


document.body.addEventListener('mousemove', () => {
    mouseMoveCounter = 0;
})
document.body.addEventListener('click', () => {
    mouseMoveCounter = 0;
})

window.addEventListener("resize", function () {
    windowWidth = document.body.clientWidth;
    windowHeight = document.body.clientHeight;
})

const btnImg = document.createElement("img");
btnImg.src = `./data/profile/${chosenImg}`;
btnImg.alt = "main-logo";
const zzal = document.querySelector(".zzal")
zzal.insertAdjacentElement("afterbegin", btnImg);

function zzalcount() {
    chosenImg = zzals[num[mouseMoveCounter%zzalLen]];
    btnImg.src = `./data/profile/${chosenImg}`;
}

function zzalposition(){
    zzal.style.top = Math.random() * windowHeight + "px";
    zzal.style.left = Math.random() * windowWidth + "px";
}


var intervalCount = setInterval(zzalcount, 600);      
var intervalPosition = setInterval(zzalposition, 1000);        



setInterval(function (){
    var counts = mouseMoveCounter

    if(counts>=4){
                zzal.style.visibility ="visible"                

    }
    
    if(counts<4){
        
        zzal.style.visibility ="hidden"

    }
    
}, 100)







let current = 1;
var imgSize = images[0].clientWidth;

window.addEventListener("resize", function () {
    imgSize = images[0].clientWidth;
})



slider.style.transform = `translateX(${-imgSize}px)`;


slider.addEventListener('transitionend', () => {
    if (images[current].classList.contains('first-img')) {
        slider.style.transition = 'none';
        current = images.length - 2;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if (images[current].classList.contains('last-img')) {
        slider.style.transition = 'none';
        current = images.length - current;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
})


const next = () => {
    if (current >= images.length - 1) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
}


let auto = setInterval(next, 2000);

slider.addEventListener('mouseleave', () => {
    auto = setInterval(next, 2000)
})

slider.addEventListener('mouseenter', () => {
    clearInterval(auto)
})

prevBtn.addEventListener('click', () => {
    if (current <= 0) return;
    clearInterval(auto);
    auto = setInterval(next, 2000);

    slider.style.transition = '400ms ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;



})


nextBtn.addEventListener('click', () => {
    if (current >= images.length - 1) return;
    slider.style.transition = '400ms ease-in-out transform';
    current++;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
    clearInterval(auto);

    auto = setInterval(next, 2000);


})







function copyToClipboard(val) {
    const t = document.createElement("textarea");
    document.body.appendChild(t);
    t.value = val;
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
}

function copy() {
copyToClipboard('https://drive.google.com/drive/folders/1XE3Xg_4xXskUGk55hKuqU_3aqL8a876W?usp=sharing');
    copyAlert.animate(shutterAni, timing);
    console.log('soso?')
}
