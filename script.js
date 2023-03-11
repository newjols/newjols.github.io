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
const copyAlert = document.querySelector(".copyAlert")

const images = document.querySelectorAll('.slider span');
const sliderContainer = document.querySelector('slider-container');
const slider = document.querySelector('.slider');
const prevBtn = document.querySelector('.leftBtn');
const nextBtn = document.querySelector('.rightBtn');

let current = 1;
var imgSize = images[0].clientWidth;

window.addEventListener("resize", function() {
imgSize = images[0].clientWidth;
})

const shutterAni = [{
                transform: 'translateY(0)',
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


slider.style.transform = `translateX(${-imgSize}px)`;


slider.addEventListener('transitionend', ()=> {
    if(images[current].classList.contains('first-img')){
        slider.style.transition = 'none';
        current = images.length - 2;
        slider.style.transform = `translateX(${-imgSize * current}px)`;
    }
    if(images[current].classList.contains('last-img')){
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

slider.addEventListener('mouseleave', ()=>{
    auto = setInterval(next, 2000)
})

slider.addEventListener('mouseenter', ()=>{
    clearInterval(auto)
})

prevBtn.addEventListener('click',()=>{
    if( current <= 0) return;
     clearInterval(auto);
    auto = setInterval(next, 2000);

    slider.style.transition = '400ms ease-in-out transform';
    current--;
    slider.style.transform = `translateX(${-imgSize * current}px)`;
   


})


nextBtn.addEventListener('click',()=>{
    if( current >= images.length -1 ) return;
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

