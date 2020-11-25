import './style.scss';
import $ from 'jquery';

const userName = localStorage.getItem('userName');
if (userName) {
  $('section').css('display', 'none');
  $('canvas').css('display', 'block');
  console.log(userName);
}

let error = false;
$('.btn-play').on('click', () => {
  if ($('#name-user').val() !== '') {
    // Récupération du nom entré par l'utilisateur + sauvagarde dans le localStorage
    localStorage.setItem('userName', JSON.stringify($('#name-user').val()));
    // Passage de la homepage au jeu (balise canvas)
    $('section').css('display', 'none');
    $('canvas').css('display', 'block');
  } else if (!error) {
    $('#name-user').css({
      'background-color': '#F97171',
    });
    $('#user-info').append('<p ><i class="fas fa-exclamation-circle error"></i>Aucun nom entré.</p>');
    error = true;
  }
});
