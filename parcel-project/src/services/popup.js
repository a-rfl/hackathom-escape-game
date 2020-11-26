import $ from 'jquery';
import { enigmes } from '../data/enigmes';

// (String, String) => void
// Fonction qui vérifie l'état de la réponse et change le contenu de la popup en fonction
export const verifyResponse = (val, objet) => {
  enigmes.forEach((enigme) => {
    if (enigme.objet === objet) {
      let bonneReponse = false;
      enigme.bonneReponse.forEach((reponse) => {
        if (val === reponse) {
          bonneReponse = true;
        }
      });
      if (bonneReponse) {
        // Chaque la popup contenant l'éngime
        $(`#enigme-${enigme.objet}`).hide();
        // Affiche la popup contenant le résultat
        $('body').append(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text win">bonne réponse !</p>
          </div>`);
      } else {
        // Chaque la popup contenant l'éngime
        $(`#enigme-${enigme.objet}`).hide();
        // Affiche la popup contenant le résultat
        $('body').append(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text lose">mauvaise réponse...</p>
            <button class="btn-essai">Réessayer</button>
          </div>`);
        // Lors du clique sur le bouton "Réessayer", la popup enigme se remontre
        $('.btn-essai').on('click', () => {
          $('.resultat-enigme').remove();
          $(`#enigme-${enigme.objet}`).show();
        });
      }
      // Permet de fermer la popup
      $('.close').on('click', () => {
        $('.popup').remove();
      });
    }
  });
};

// function activeEnigma(enigmaName) {
//   showEnigma(getEnigma(Pointer_stringify(enigmaName)));
// }
// function getEnigma(enigmaName) {
//   return enigmaName.split('-')[1];
// }

// (String) => void
// Fonction qui permet de générer une popup avec une énigme en fonction de l'objet séléctionné
export const showEnigma = (objet) => {
  enigmes.forEach((enigme) => {
    console.log($(`#enigme-${enigme.objet}`));
    if ($(`#enigme-${enigme.objet}`).length === 0) {
      let popupEnigme = `<div class="enigme popup" id="enigme-${enigme.objet}"><i class="far fa-times-circle close"></i>`;
      if (enigme.objet === objet) {
        popupEnigme += `<p class="text-enigme">${enigme.enonce}</p>`;
        if (enigme.reponsesProposees.length === 0) {
          popupEnigme += '<input type="text" class="ipt-enigme"/>';
        } else {
          enigme.reponsesProposees.forEach((proposition) => {
            popupEnigme += `<div class="reponse-enigme ipt-enigme" id="${proposition}">${proposition}</div>`;
          });
        }
        popupEnigme += '<button class="btn-enigme">C\'est mon dernier mot</button></div>';
        $('body').append(popupEnigme);
      }
    }

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

    // Vérification de la réponse au clique sur un bouton
    $('.btn-enigme').on('click', () => {
      if ($('.ipt-enigme').hasClass('active')) {
        verifyResponse($('.active').text(), 'clé');
      } else {
        console.log($('.ipt-enigme').val());
        verifyResponse($('.ipt-enigme').val(), 'chapeau');
      }
    });
  });
};
