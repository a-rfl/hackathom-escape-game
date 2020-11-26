mergeInto(LibraryManager.library, {​​

  showEnigma : function (objet) {
    let popupEnigme = '<div class="enigme"><i class="far fa-times-circle"></i>';
    enigmes.forEach((enigme) => {
      if (enigme.objet === objet) {
        popupEnigme += `<p class="text-enigme">${enigme.enonce}</p>`;
        if (enigme.reponsesProposees.length === 0) {
          popupEnigme += '<input type="text" class="ipt-enigme"/>';
        } else {
          enigme.reponsesProposees.forEach((proposition) => {
            popupEnigme += `<div class="reponse-enigme ipt-enigme">${proposition}</div>`;
          });
        }
        popupEnigme += '<button class="btn-enigme">C\'est mon dernier mot</button></div>';
        document.body.innerHTML += popupEnigme;
      }
    });
  }

}​​);