// pop up sur les formulaires
//pas fini
const form = document.getElementById('infos');
const pop = document.getElementsByClassName('pop');
const annule = document.querySelector('.pop .annuler')
form.addEventListener('submit', function (e) {
    e.preventDefault();
    form.style.display = 'none';
    pop.classList.add('visible');
})

//effet hover sur les boutons des réseaux sociaux

const sociaux = document.querySelectorAll('.media a');
console.log(sociaux);
for(let i = 0; i < sociaux.length; i++) {
    let social = sociaux[i];
    social.addEventListener('mouseover', function () {
        social.style.background = 'white';
        social.style.color = 'blue';
        social.style.fontWeight = 'bold';
        social.style.transition = '.3s';
    })
    social.addEventListener('mouseout', function () {
        social.style.background = 'inherit';
        social.style.color = 'white';
        social.style.fontWeight = 'normal';
        social.style.transition = '.3s';
    })
}

//defilement horizontale de l'image spiderman

