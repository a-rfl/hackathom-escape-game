// -- DATA --
const enigmes = [
  {
    objet: "curtain",
    titre: "Morphogènese",
    courteHistoire: `TURING : Je me suis intéressé après la guerre à la morphogénèse. On peut définir cette branche de biologie comme étant l"ensemble des lois qui déterminent la structure et la forme des organes et organismes. J'ai proposé dans mon article publié en 1952, "Les bases chimiques de la morphogénèse" un ensemble de trois patterns qui ont été confirmé bien plus tard. Cest différentes structures, appellées maintenant "structures de Turing" sont observables sur différents être vivants tels que les motifs tachetés des guepards ou bien les tentacules de l'hydre.`,
    enonce:
      "Je suis le cadre du serpent mais aussi un guitariste de renom.<br>Je suis la boite à outils la plus legere qui soit, à la main gauche il me manque deux doigts.",
    reponsesProposees: [],
    bonneReponse: ["Django", "django"],
    indice:
      "Je suis un framework qui porte le nom d’un celebre joueur de jazz/manouche.",
    cle: "",
  },
  {
    objet: "bug",
    titre: "Compilateur",
    courteHistoire: `HOPPER : Un jour alors que je travaillais sur Mark II, une mite vint se prendre dans le relais, créant une panne. J'ai reporté l'incident avec amusement en annotant «First actual case of bug being found» soit littéralement, «Premier cas réel de découverte d'insecte»`,
    enonce:
      "Si votre Terminal ne vous obéit pas, je me subsitue à vous.<br>Un superUtilisateur, qu’ en premier l’on place, et de vos commandes, je viendrais à bout.",
    reponsesProposees: [],
    bonneReponse: ["sudo", "$ sudo", "sudo-", "sudo -"],
    indice: `Abréviation de "substitute user do"`,
    cle: "",
  },
  {
    objet: "poetry",
    titre: "Pionnière",
    courteHistoire: `LOVELACE : C'est ma mere qui m'a transmis son penchant pour les mathématiques. Malgrè la grande période de vide dû a mes grossesses et les responsabilités dû à mon statut de femme, je reussirais à assouvir ma passion en travaillant sur le premier programme algorithmique mettant en place la fameuse boucle conditionelle "while". Ce concept informatique nous détache des programmes purement séquentiels que l'on trouve, par exemple, dans les métiers à tisser de Jacquard.`,
    enonce:
      "J’apparais au XVIIIe sciecle dans de multiples domaines.<br>Au XIXe, musique et tissage m’utilisaient sans modération.<br>Mais j’atteinds mon heure de gloire au XXe sciecle, avec la programmation.",
    reponsesProposees: [],
    bonneReponse: [
      "La carte perforée",
      "La carte perforee",
      "carte perforée",
      "carte perforee",
      "la carte perforée",
      "la carte perforée",
    ],
    indice: `"J’fais des trous, des p’tits trous…"`,
    cle: "",
  },
  {
    objet: "richardStallman",
    titre: "My Best Buddy",
    courteHistoire:
      "TORVALDS : Richard a prôné la diffusion de logiciels libres toute sa vie. La lutte continue.",
    enonce: `"Sans toi je n’finis rien;<br>Sans toi après rien ne vient…<br>Ma colonne me tient;<br>La demi, c’est très bien…"`,
    reponsesProposees: [],
    bonneReponse: [";"],
    indice: "Regarde ton clavier",
    cle: "",
  },
  {
    objet: "asteroidPoster",
    titre: "My very own Rolling-Stone",
    courteHistoire: "",
    enonce: `Si ma base est variable, je vaux toujours la même chose.<br>Lorsque 2641 = 23101 = 001001100100001 et que je suis "Torvalds".`,
    reponsesProposees: [],
    bonneReponse: [
      "9793 Torvalds",
      "9793-Torvalds",
      "Torvalds-9793",
      "Torvalds 9793",
    ],
    indice: "Caillou Volant",
    cle: "",
  },
  {
    objet: "mascot",
    titre: "",
    courteHistoire: `- Tux: "I won’t bite",<br>- Linus: "Yes, it will!"`,
    enonce: "",
    reponsesProposees: [],
    bonneReponse: [],
    indice: "",
    cle: "",
  },
  {
    objet: "commodore",
    titre: "Gourou Meditation",
    courteHistoire: ``,
    enonce: `Que fait un geek pour se remonter le moral?`,
    reponsesProposees: [],
    bonneReponse: ["Il se console", "il se console"],
    indice: "Il se console",
  },
  {
    objet: "dart",
    titre: "On ne peut pas être bon en tout...",
    courteHistoire: `Linus a dit: "...le système Mach c'est de la daube.<br>Ca réunit toutes les erreurs de conception possibles et imaginables, ils ont meme réussi à en rajouter quelques-unes...`,
    enonce: `"none : (pas d'enigme) Chez nous, c'est gratuit!"`,
    reponsesProposees: [],
    bonneReponse: [],
    indice: "",
    cle: "",
  },
  {
    objet: "copyleft",
    titre: `J'y crois`,
    courteHistoire: "",
    enonce: `Pourtant pas un héro, je suis loin d'etre zéro.`,
    reponsesProposees: [],
    bonneReponse: ["null", "NULL", "Null"],
    indice: `En Python se dit "None".`,
    cle: "",
  },
  {
    objet: "phone",
    titre: "",
    courteHistoire: "",
    enonce:
      "En ce moment, on me croise tout le temps.<br>Je suis symbole de rassemblement et à l’inverse du chiffrement, je suis irréversible.",
    reponsesProposees: [],
    bonneReponse: ["hash"], // attention fct convertion UPPERCASE ou lowcase de l'input reponse
    indice: "sécurité des mots de passe ou élément d'un micro-blog",
    cle: "",
  },
  {
    objet: "alarmClock",
    titre: "Reveil",
    courteHistoire: "",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "algoCollection",
    titre: "",
    courteHistoire: "",
    enonce:
      "Au risque de me répéter, je n’ai pas d’autre utilité.<br>J’agis avant de réflechir ou bien je réflechis avant d'agir,<br>C'est selon vos conditions.",
    reponsesProposees: [],
    bonneReponse: ["while", "boucle while", "While"],
    indice: "je boucle",
    cle: "",
  },
  {
    objet: "steveJobs",
    titre: "I wan't you Linus ... Nope thank you Stevie !",
    courteHistoire: "",
    enonce: "Comment concilier l’inconciliable ?",
    reponsesProposees: ["En douceur avec TryParse", "En force avec Parse", "En schmet avec JavaScript"],
    bonneReponse: ["En douceur avec TryParse", "En force avec Parse", "En schmet avec JavaScript"],
    indice: "",
    cle: "",
  },
  {
    objet: "graceHopper",
    titre: "Grace Hopper (1906-1992)",
    courteHistoire:
      "Après avoir obtenu mon doctorat en mathématiques à Yale, je me suis enrôlée dans la Navy où je suis restée jusqu'à mes 80 ans. J'y ai été l'une des premières programmatrices de l'ordinateur Mark I, conçu à Harvard. J'ai toujours défendu l’idée qu'il fallait rapprocher le langage des machines au langage humain et c’est cette idée qui m'a inspiré le premier compilateur. Celui-ci va simplement traduire le langage complexe du programme informatique, en langage compréhensible par la machine, jouant ainsi le rôle de médiateur.Ma devise préférée ? « Il vaut mieux devoir s’expliquer après que demander la permission avant ». J'ai confiance en la jeunesse et c'est pourquoi je crois en tes capacités. Trouve les indices que j'ai laissés pour toi dans cet appartement et mène à bien notre mission.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "alanTuring",
    titre: "Alan Turing (1912-1954)",
    courteHistoire:
      "J'ai proposé dès 1936, avant l’apparition des premiers ordinateurs,une machine abstraite, à instructions programmable, dont tous les ordinateurs d’aujourd’hui découlent. Durant la Seconde Guerre mondiale, j’ai aidé le gouvernement anglais en inventant une machine capable de déchiffrer les messages allemands produits par Enigma, réputée incraquable. On dit qu’ainsi la guerre a pu finir avec deux années d’avance ! Je suis fort heureux de constater tous les progrès qui sont faits depuis mes premiers travaux. J’ai toujours eu l’intuition qu’ un jour, on atteindrait des mécanismes si complexes qu’ils échapperaient au statut de simple mécanisme en rivalisant avec l’esprit humain. Reproduire les activités mentales de l’Homme.. Quel projet ! Malheureusement, ce n’est pas encore le cas. Je n’ai pas reçu la reconnaissance escomptée. J’ai dû subir un terrible procès, du a mon homosexualité. Forcé à la castration chimique, déprimé, je suis décédé dans des conditions tragiques.. Je me suis donné pour but de perpétuer les travaux de mon grand ami Christopher Morcom, brillant mathématicien, disparu trop tôt. J’ai ainsi accompli de grandes choses en sa mémoire. À toi d’en faire autant. Trouve les objets m’appartenant dans cette maison, ils te mettront sur la bonne voie.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "adaLovelace",
    titre: "Ada Lovelace(1815-1853)",
    courteHistoire:
      "Née à Londres, je décéderai dans la même ville. Vous connaissez certainement mon père, le célèbre Lord Byron. C’est ma mère qui s'occupera de moi, me destinant à être mathématicienne ou scientifique, ce qui était inhabituel pour une femme à cette époque.J'ai eu la chance de faire la rencontre de Charles Babbage à 17 ans, alors qu'il tentait de construire une machine à calcul qu'il voulait nommer : la machine analytique. J'ai d'ailleurs rédigé une note, dans laquelle je décris comment réaliser un calcul mathématique complexe avec cette machine, décrivant les étapes à réaliser en fonction de la position de ses rouages et comment lui permettre d’arriver à un résultat donné. On peut dire que je suis la première à avoir formalisé le principe de programmation et fait donc de moi la première codeuse au monde ! Je n'ai malheureusement pas survécu à mon cancer, ce qui fait que la machine analytique a probablement perdu sa plus belle chance de voir le jour et, ainsi, de devenir le premier calculateur mécanique avec un siècle d’avance.Il y a dans la pièce où tu te trouves, des objets qui m'appartiennent et qui t'aideront à retrouver ce cher Linus. Je laisse le destin de la programmation entre tes mains...",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "postIt1",
    titre: "",
    courteHistoire:
      "Quand quelqu'un de triste joue aux jeux vidéo pour oublier, on peut dire qu'il se console.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "postIt2",
    titre: "",
    courteHistoire:
      "Quand est ce que Windows ne bug pas ?<br>Quand l'ordinateur est éteint.",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
  {
    objet: "postIt3",
    titre: "",
    courteHistoire: "De quelle couleur sont tes yeux ?<br> #1292f4 et toi ? :)",
    enonce: "",
    reponsesProposees: [],
    bonneReponse: ["", ""],
    indice: "",
    cle: "",
  },
];

let error = false;
$(".btn-play").on("click", () => {
  $(".home").css("display", "none");
  $(".webgl-content").css("display", "block");

  // Option si input pour le nom de l'utilisateur
  // if ($('#name-user').val() !== '') {
  //   // Récupération du nom entré par l'utilisateur + sauvagarde dans le localStorage
  //   localStorage.setItem('userName', JSON.stringify($('#name-user').val()));
  //   // Passage de la homepage au jeu (balise canvas)
  //   $('.home').css('display', 'none');
  //   $('.webgl-content').css('display', 'block');
  //   var unityInstance = UnityLoader.instantiate(
  //     "unityContainer",
  //     "Build/mygame.json",
  //     { onProgress: UnityProgress }
  //   );
  // } else if (!error) {
  //   $('#name-user').css({
  //     'background-color': '#F97171',
  //   });
  //   $('#user-info').append('<p><i class="fas fa-exclamation-circle error"></i>Aucun nom entré.</p>');
  //   error = true;
  // }
});

// -- FUNCTIONS --
function verifyResponse(val, objet) {
  let enigme = enigmes.find((e) => e.objet === objet);

  if (enigme.objet !== undefined && enigme.objet !== null) {
    let bonneReponse = false;
    enigme.bonneReponse.forEach((reponse) => {
      if (val === reponse) {
        bonneReponse = true;
      }
    });
    if (bonneReponse) {
      // Chaque la popup contenant l'énigme
      $(`#enigme-${enigme.objet}`).hide();
      // Affiche la popup contenant le résultat
      $("body").prepend(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text win">bonne réponse !</p>
          </div>`);
    } else {
      // Chaque la popup contenant l'énigme
      $(`#enigme-${enigme.objet}`).hide();
      // Affiche la popup contenant le résultat
      $("body").prepend(`
          <div class="resultat-enigme popup">
            <i class="far fa-times-circle close"></i>
            <p class="resultat-enigme-text lose">mauvaise réponse...</p>
            <button class="btn-essai">Réessayer</button>
          </div>`);
      // Lors du clique sur le bouton "Réessayer", la popup enigme se remontre
      $(".btn-essai").on("click", () => {
        $(".resultat-enigme").remove();
        $(`#enigme-${enigme.objet}`).show();
      });
    }
    // Permet de fermer la popup
    $(".close").on("click", () => {
      $(".popup").remove();
    });
  }
}

window.showEnigma = function (objet) {
  let enigme = enigmes.find((e) => e.objet === objet);
  if ($(`.enigme`).length === 0) {
    if (enigme.objet !== undefined && enigme !== null) {
      let popupEnigme = `<div class="enigme popup" id="enigme-${enigme.objet}"><i class="fas fa-info-circle info"></i><i class="far fa-times-circle close"></i>`;
      popupEnigme += `<p class="titre-enigme">${enigme.titre}</p>`;
      popupEnigme += `<p class="histoire-enigme">${enigme.courteHistoire}</p>`;
      popupEnigme += `<p class="text-enigme">Voici votre énigme :<br/> <br/>${enigme.enonce}</p>`;
      if (enigme.reponsesProposees.length === 0) {
        popupEnigme += '<input type="text" class="ipt-enigme" autofocus/>';
      } else {
        enigme.reponsesProposees.forEach((proposition) => {
          popupEnigme += `<div class="reponse-enigme ipt-enigme" id="${proposition}">${proposition}</div>`;
        });
      }
      popupEnigme += `<p class="infotext" style="display:none;">${enigme.indice}</p>`;
      popupEnigme += `<button class="btn-enigme">C\'est mon dernier mot</button></div>`;

      $("body").append(popupEnigme);
      $(".info").on("click", () => {
        $(".infotext").css("display", "block");
      });
    }
    // Change le style de la réponse sélectionnée en lui ajoutant ou retirant une classe
    const reponses = $(".reponse-enigme");
    for (const reponse of reponses) {
      $(reponse).on("click", function () {
        if ($(this).hasClass("active")) {
          $(this).removeClass("active");
        } else {
          $(".active").removeClass("active");
          $(this).addClass("active");
        }
      });
    }

    // Vérification de la réponse au clique sur un bouton
    $(".btn-enigme").on("click", (e) => {
      if ($(".ipt-enigme").hasClass("active")) {
        verifyResponse($(".active").text(), objet);
      } else {
        verifyResponse($(".ipt-enigme").val(), objet);
      }
    });
  }

  // Permet de fermer la popup
  $(".close").on("click", () => {
    $(".popup").remove();
  });
};

// handles the keyboard input in unity
var gameReady = false;
// Called by Unity in GameControl's start function
function GameControlReady() {
  gameReady = true;
}
function FocusCanvas(focus) {
  if (gameReady) {
    unityInstance.SendMessage("gameControl", "FocusCanvas", focus);
  }
}
