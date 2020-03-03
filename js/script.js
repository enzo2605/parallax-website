let slides, index = 0, btnRight, btnLeft;

slides = document.querySelectorAll('.slide');
btnRight = document.querySelector('.arrow--right');
btnLeft = document.querySelector('.arrow--left');

/**********************************************************
 *                FUNZIONI
***********************************************************/

function sliderRight() {

    let index = parseInt(btnRight.getAttribute('id'));
    console.log('RIGHT: '+index);

    //se l'indice è uguale alla lunghezza dell'array slides.
    if(index == slides.length-1) {
        //rimuovi la classe 'active' dall'elemento corrente.
        slides[index].classList.remove('active');
        //resetta l'indice
        index = 0;
        slides[index].classList.add('active');
        btnRight.setAttribute('id',index);
    }
    
    //se l'indice è diverso da 0, rimuovi la classe 'active' dall'elemento precedente.
    else {
        //rimuovi la classe 'active' dall'elemento corrente.
        //slides[index].classList.add('slide-left'); 
        slides[index].classList.remove('active'); 
        //aggiungo la classe active all'elemento successivo.
        //slides[index + 1].classList.add('slide-left2'); 
        slides[index+1].classList.add('active');
        
        //aggiorno l'id del bottone destro con il numero della diapositiva corrente che sto visualizzando
        btnRight.setAttribute('id',index+1);
    }
}

function sliderLeft() {

    console.log('LEFT: '+btnRight.getAttribute('id'));

    //leggo il valore dell'id del bottone destro
    let i = btnRight.getAttribute('id');

    if(i == "0") {
        slides[i].classList.remove('active');
        slides[slides.length - 1].classList.add('active');
        //aggiorno l'id del bottone
        btnRight.setAttribute('id',slides.length - 1);
    }

    else {
        slides[i].classList.remove('active');
        slides[i-1].classList.add('active');
        //aggiorno l'id del bottone
        btnRight.setAttribute('id',i-1);
    }
}
/**********************************************************
 *                Listener di eventi
***********************************************************/
btnRight.addEventListener('click', () => {
    sliderRight();
}, false);

btnLeft.addEventListener('click', () => {
    sliderLeft();
}, false);