import './style.scss';
import $ from 'jquery';
import { showEnigma } from './src/services/popup';

$('.test').on('click', function () {
  showEnigma($(this).attr('id'));
});

// Permet de fermer la popup
$('.close').on('click', () => {
  $('.popup').hide();
});
