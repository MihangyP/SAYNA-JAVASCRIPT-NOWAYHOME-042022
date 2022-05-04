
//Effet de survol sur les bouttons
//on recupère tous les boutons

const bouttons = document.getElementsByClassName('btn');




for(let i = 0; i < bouttons.length ; i++) { // on parcours tous les bouttons
    let btn = bouttons[i];
    btn.addEventListener('mouseover', function () { // Lorsqu'on survole le boutton, la fonction anonyme est appelée
        //on recupère le background et la couleur de chaque bouttons
       let bg = window.getComputedStyle(btn).getPropertyValue('background-color'); //on assigne à la variable bg la valeur de la proriété background-color du boutton
        if(bg === 'rgb(255, 255, 255)') { // si bg est blanc, 
            btn.style.background = 'inherit'; // on change le bg en inherit
            btn.style.color = 'white'; // on change la couleur du texte en blanc
            btn.style.borderColor = 'white'; // on change les bordures en blanc
            btn.style.fontWeight = '600'; // on change le texte en plus épais
            btn.classList.add('surbrillance'); // il y a une effet de surbrillace
        } else {
            btn.style.background = 'white';
            btn.style.color = '#b11313';
            btn.style.fontWeight = '600';
            btn.classList.add('surbrillance');
        }

    })
    btn.addEventListener('mouseout', function () { // lorsque le survole est passé, on revient à la sitution de base
        //on recupère le background et la couleur de chaque bouttons
       let bg = window.getComputedStyle(btn).getPropertyValue('background-color');
        if(bg === 'rgb(255, 255, 255)') {
            btn.style.background = 'inherit';
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
            btn.style.fontWeight = '400';
            btn.classList.remove('surbrillance');
        } else {
            btn.style.background = 'white';
            btn.style.color = '#b11313';
            btn.style.fontWeight = '400';
            btn.classList.remove('surbrillance');
        }

    })

}

//fin effet sur les bouttons

//Effet de survole  sur les icones au footer

let icons = document.getElementsByClassName('icons');
console.log(icons);
for(let i = 0; i < icons.length; i++) {
    let icon = icons[i];
    icon.addEventListener('mouseover', function () {
      
    });
} 


//Apparition avec un fade in de gauche à droite avec tous les titres 

//on utilise l'API Intersection Observer
const ratio = .4;
const options = {
    root: null,
    rootMargin: '0px',
    threshold: ratio // dès que 10% du titre est visible, on déclenche l'animation fade in
  }
  
  const fadeIn = function (entries, observer) {
      entries.forEach(function (entry) {
          if(entry.intersectionRatio > ratio) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
          }
      }) 
  }

  const observer = new IntersectionObserver(fadeIn, options);
  document.querySelectorAll('.reveal').forEach(function(r) {
    observer.observe(r);
  });

//..
// Effet fade in (opacité de 0% à 100%) pour les sous-titres

const fadeIn2 = function (entries, observer2) {
    entries.forEach(function (entry) {
        if(entry.intersectionRatio > ratio) {
              entry.target.classList.add('sousTitre-visible');
              observer2.unobserve(entry.target);
        }
    }) 
}

const observer2 = new IntersectionObserver(fadeIn2, options);
document.querySelectorAll('.sous-titre').forEach(function(s) {
  observer2.observe(s);
});


//effet surlingné sur les menus
const menus =  document.querySelectorAll('.menu');
for(let i = 0; i < menus.length ; i++) {
    const menu = menus[i];
    menu.addEventListener('mouseover', function () {
        menu.classList.add('menu-lineThought');
    })
    menu.addEventListener('mouseout', function () {
        menu.classList.remove('menu-lineThought');
    })
}

//effet hover sur les icons du footer

const iconsFoot = document.querySelectorAll('.media .fa-brands');
for(let i = 0; i < iconsFoot.length ; i++) {
    let icon = iconsFoot[i];
    icon.addEventListener('mouseover', function () {
        icon.style.color = 'white';
    })
    icon.addEventListener('mouseout', function () {
        icon.style.color = 'black';
    })
}

