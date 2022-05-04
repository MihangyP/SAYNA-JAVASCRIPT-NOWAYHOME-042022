
    //effet fade in sur MARVEL


//on utilise l'API Intersection Observer
// const ratio = .4;
// const options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: ratio // dès que 10% du titre est visible, on déclenche l'animation fade in
//   }

// const fadeIn3 = function (entries, observer3) {
//     entries.forEach(function (entry) {
//         if(entry.intersectionRation > ratio) {
//             entry.target.classList.add('marvel-reveal');
//             observer3.unobserve(entry.target);
//         }
//     });
// }
// const observer3 = new IntersectionObserver(fadeIn3, options);
// observer3.observe(document.getElementsByClassName('marvel'));


//effet sur heart(audio)
const heart = document.querySelector('.vide');
const heartPlein = document.querySelector('.plein');
heart.addEventListener('click', function () {
    heart.style.display = 'none';
    heartPlein.classList.add('plein-visible');
})
heartPlein.addEventListener('click', function () {
    heartPlein.classList.remove('plein-visible');
    heart.style.display = 'inline-block';
})


//effet sur l'image spiderman
const spider = document.querySelector('.spider');
window.addEventListener('scroll', function () {
    spider.classList.add('fixe');
})





//les pop-ups
 
const news = document.getElementById('news');
const costume = document.getElementById('costume');
const popUp = document.getElementsByClassName('pop-up');
const popUp1 = popUp[0];
const popUp2 = popUp[1];
const annuler = document.getElementsByClassName('annuler');
const annuler1 = annuler[0];
const annuler2 = annuler[1];
// 1er boutton
costume.addEventListener('submit', function (e) {
    e.preventDefault();
    costume.classList.add('none');
    popUp1.classList.add('block');
})
annuler1.addEventListener('click', function () {
    popUp1.classList.remove('block');
    costume.classList.remove('none');
})

//2eme boutton 
news.addEventListener('submit', function (e) {
    e.preventDefault();
    news.classList.add('none');
    popUp2.classList.add('block');
})


annuler2.addEventListener('click', function () {
    popUp2.classList.remove('block');
    news.classList.remove('none');
})

// effet zoom sur les images

const  imgSpider =  document.getElementsByClassName('card-img-top');


for(let i = 0; i < imgSpider.length; i++) {
    let spider = imgSpider[i];
    spider.addEventListener('mouseover', function () {
       spider.classList.add('scale');
       
       
    })
}
for(let i = 0; i < imgSpider.length; i++) {
    let spider = imgSpider[i];
    spider.addEventListener('mouseout', function () {
       spider.classList.remove('scale');
    })
}

