import $ from 'jquery';
import { enigmes } from '../data/enigmes';

// (String) => void
// Fonction qui permet de générer une popup avec une énigme en fonction de l'objet séléctionné
export const showEnigma = (objet) => {
  let popupEnigme = '<div class="enigme popup"><i class="far fa-times-circle close"></i>';
  enigmes.forEach((enigme) => {
    if (enigme.objet === objet) {
      popupEnigme += `<p class="text-enigme">${enigme.enonce}</p>`;
      if (enigme.reponsesProposees.length === 0) {
        popupEnigme += '<input type="text" class="ipt-enigme"/>';
      } else {
        enigme.reponsesProposees.forEach((proposition) => {
          popupEnigme += `<div class="reponse-enigme">${proposition}</div>`;
        });
      }
      popupEnigme += '<button class="btn-enigme">C\'est mon dernier mot</button></div>';
      $('body').append(popupEnigme);
    }
  });
};

// (String, String) => void
// Fonction qui vérifie l'état de la réponse et change le contenu de la popup en fonction
export const verifieReponse = (val, objet) => {
  enigmes.forEach((enigme) => {
    if (enigme.objet === objet) {
      if (val.toLowerCase() === enigme.bonneReponse) {
        // Chaque la popup contenant l'éngime
        $('.enigme').hide();
        // Affiche la popup contenant le résultat
        $('body').append(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text win">bonne réponse !</p>
          </div>`);
      } else {
        // Chaque la popup contenant l'éngime
        $('.enigme').hide();
        // Affiche la popup contenant le résultat
        $('body').append(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text lose">mauvaise réponse...</p>
            <button class="btn-essai">Réessayer</button>
          </div>`);
        // Lors du clique sur le bouton "Réessayer", la popup enigme se remontre
        $('.btn-essai').on('click', () => {
          $('.resultat-enigme').hide();
          $('.enigme').show();
        });
      }
      // Permet de fermer la popup
      $('.close').on('click', () => {
        $('.popup').hide();
      });
    }
  });
};
