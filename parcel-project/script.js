import './style.scss';
import $ from 'jquery';
import { showEnigma, verifieReponse } from './src/services/popup';

showEnigma('chapeau');

// Vérification de la réponse au clique sur un bouton
$('.btn-enigme').on('click', () => {
  if ($('.ipt-enigme')) {
    verifieReponse($('.ipt-enigme').val(), 'chapeau');
  } else {
    verifieReponse($('.active').text(), 'chapeau');
  }
});

// Change le style de la réponse sélectionnée en lui ajoutant ou retirant une classe
const reponses = $('.reponse-enigme');
for (const reponse of reponses) {
  $(reponse).on('click', function () {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $('.active').removeClass('active');
      $(this).addClass('active');
    }
  });
}

// Permet de fermer la popup
$('.close').on('click', () => {
  $('.popup').hide();
});
