let count = 0;
let hover = 0;
let menu = document.querySelector('.menu-link');




setInterval(function () {
    
    console.log(hover)

    count +=1
    document.body.style.cursor = "url(./data/" + count%7 + ".png), auto";
}, 500);
