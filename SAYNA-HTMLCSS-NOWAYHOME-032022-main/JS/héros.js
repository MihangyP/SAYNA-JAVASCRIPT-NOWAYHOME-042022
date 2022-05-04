
//effet zoom sur les images
const images = document.getElementsByClassName('zoom');
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseover', function () {
        images[i].classList.add('zoom-active');
    })
}
for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('mouseout', function () {
        images[i].classList.remove('zoom-active');
    })
}

//slider sur les images dans la partie Avengers

const imgSlide = document.querySelectorAll('.slider img');
const nbSlide = imgSlide.length;
const suivant = document.querySelector('.suivant')
const précédent = document.querySelector('.précédent')
let count = 0;

function slideSuivant () {
    imgSlide[count].classList.remove('active');

    if(count < nbSlide - 1) {
        count++;
    } else {
        count = 0
    }

    imgSlide[count].classList.add('active');
}

suivant.addEventListener('click', slideSuivant);

function slidePrécédent () {
    imgSlide[count].classList.remove('active');

    if(count > 0) {
        count--;
    } else {
        count = nbSlide - 1;
    }

    imgSlide[count].classList.add('active');
}

précédent.addEventListener('click', slidePrécédent);