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


/*

welcome[0].addEventListener('mouseover', () => {
    welcome[0].src = "./data/joke.png"
    welcomesub[0].innerText = "넝~담~"
})

welcome[0].addEventListener('mouseout', () => {
    welcome[0].src = "./data/welcome.png"
    welcomesub[0].innerText = "자네 지금 웃음이 나오나?"
})

for (i = 0; i < 4; i++) {
    menu[i].addEventListener('mouseover', () => {
        hover = 1;
        count += 1
    });

    menu[i].addEventListener('mouseout', () => {
        hover = 0;
    });
} */


        

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

hiddenBox[0].addEventListener('mouseenter', () => {
    credit[0].style.visibility = 'visible'
})

hiddenBox[0].addEventListener('mouseleave', () => {
    credit[0].style.visibility = 'hidden'
})


        



/*setInterval(function () {
    document.body.style.cursor = "url(./data/" + count % 7 + ".png) 22 22, auto";
    for (i = 0; i < 4; i++) {
        menu[i].style.cursor = "url(./data/" + count % 7 + ".png) 22 22, auto"
    }
}, 10);*/
