// import './style.scss';
// import $ from 'jquery';

const enigmes = [
  {
    objet: 'stallman',
    enonce: 'vnfsjvnjfnl',
    typeDeReponse: 'input',
    reponsesProposees: [],
    bonneReponse: 'true',
  },
];
// const userName = localStorage.getItem('userName');
// if (userName) {
//   $('section').css('display', 'none');
//   $('canvas').css('display', 'block');
//   console.log(userName);
// }

let error = false;
$('.btn-play').on('click', () => {
  if ($('#name-user').val() !== '') {
    // Récupération du nom entré par l'utilisateur + sauvagarde dans le localStorage
    // localStorage.setItem('userName', JSON.stringify($('#name-user').val()));
    // Passage de la homepage au jeu (balise canvas)
    $('.home').css('display', 'none');
    $('.canvas').css('display', 'block');
  } else if (!error) {
    $('#name-user').css({
      'background-color': '#F97171',
    });
    $('#user-info').append('<p ><i class="fas fa-exclamation-circle error"></i>Aucun nom entré.</p>');
    error = true;
  }
});

// const showEnigma = (objet) => {
//   let popupEnigme = '<div class="enigme"><i class="far fa-times-circle"></i>';
//   enigmes.forEach((enigme) => {
//     if (enigme.objet === objet) {
//       popupEnigme += `<p class="text-enigme">${enigme.enonce}</p>`;
//       if (enigme.reponsesProposees.length === 0) {
//         popupEnigme += '<input type="text" class="ipt-enigme"/>';
//       } else {
//         enigme.reponsesProposees.forEach((proposition) => {
//           popupEnigme += `<div class="reponse-enigme ipt-enigme">${proposition}</div>`;
//         });
//       }
//       popupEnigme += '<button class="btn-enigme">C\'est mon dernier mot</button></div>';
//       document.body.innerHTML += popupEnigme;
//     }
//   });
// };
// const objet = document.getElementById('stallman');

// objet.addEventListener('click', (e) => {
//   showEnigma(e.currentTarget.id);
// });
