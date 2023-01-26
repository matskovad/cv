let offset = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider__next').addEventListener('click', function(){
    offset = offset + 283;
    if (offset > 2300){
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider__prev').addEventListener('click', function(){
    offset = offset - 283;
    if (offset > 0){
        offset = 2300;
    }
    sliderLine.style.left = -offset + 'px';
});
const sliderLine2 = document.querySelector('.slider-line2');

document.querySelector('.slider__next2').addEventListener('click', function(){
    offset = offset + 550;
    if (offset > 2200){
        offset = 0;
    }
    sliderLine2.style.left = -offset + 'px';
});

document.querySelector('.slider__prev2').addEventListener('click', function(){
    offset = offset - 550;
    if (offset > 0){
        offset = 2200;
    }
    sliderLine2.style.left = -offset + 'px';
});