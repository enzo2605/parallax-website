let slides, index = 0, btnRight;
slides = document.querySelectorAll('.slide');

function slider() {
    index++;

    if(index == slides.length) 
        index = 1;

    slides[index].style.display = 'block';
}

btnRight = document.querySelector('.arrow');

btnRight.addEventListener('click', function () {
    slider();
}, false);