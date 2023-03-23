let index_courant = 0;
let randomized_words = [];
let resultat_collection;
let resultat_courant;
let start_timer;
let entrainement = true;
let elements_manager = new elementsManager();
const nb_repetition = 6;
let iterator_repetition = 1;

function commencerEntrainement() {
    console.log("Commencer l'entrainement")
    randomized_words = [...mots_couleurs_exemple];
}

function debutMancheEntrainement() {
    if (! entrainement) {
        debutManche();
        return;
    }

    // si c'est le début, on change le texte du bouton demarrer
    if (index_courant === 0) {
        next_bouton.innerText = "Suivant";
    }

    // on change le mot et active/desactive les boutons
    elements_manager.changerMot();
    elements_manager.activerBoutonsCouleurs();
    elements_manager.desactiverNextBouton();
}

function finMancheEntrainement() {
    // on active/desactive les boutons
    elements_manager.desactiverBoutonsCouleurs();
    elements_manager.activerNextBouton();

    // le mot est remis à null avant la prochaine manche
    element_mot_a_changer.innerText = "";
    index_courant++;

    if (index_courant === randomized_words.length) {
        next_bouton.innerText = "Commencer";
        index_courant = 0;
        entrainement = false
        initialisationExperience();
    }
}

function initialisationExperience() {
    resultat_collection = new resultatCollection(initSujet())
    initRandomWords();
    elements_manager.desactiverBoutonsCouleurs();
}

function initRandomWords() {
    if (Math.random() > 0.5) {
        randomized_words = [...mots_couleurs_bloc_1];
        resultat_collection.addListName("bloc_1");
    } else {
        randomized_words = [...mots_couleurs_bloc_2];
        resultat_collection.addListName("bloc_2");
    }

    randomized_words.sort(() => Math.random() - 0.5);
}

function debutManche() {
    // si c'est le début, on change le texte du bouton demarrer
    if (index_courant === 0) {
        next_bouton.innerText = "Suivant";
    }

    // on initialise le résultat
    resultat_courant = new resultat(
        randomized_words[index_courant].id,
        elements_manager.getPositionElementById("bouton-next"),
        elements_manager.getPositionElementById(randomized_words[index_courant].couleur.nom),
        randomized_words[index_courant].mot,
        randomized_words[index_courant].couleur.nom,
        randomized_words[index_courant].association
    );

    // on commence à enregistrer le résultat
    enregistrerPositionCurseur();

    // on change le mot et active/desactive les boutons
    elements_manager.changerMot();
    elements_manager.activerBoutonsCouleurs();
    elements_manager.desactiverNextBouton();
    startTimer();
}

function finDeLaManche() {
    let temps = stopTimer();

    // on arrete l'enregistrement de la position curseur
    desactiverEnregistrementPositionCurseur();

    // on active/desactive les boutons
    elements_manager.desactiverBoutonsCouleurs();
    elements_manager.activerNextBouton();

    // le mot est remis à null avant la prochaine manche
    element_mot_a_changer.innerText = "";
    index_courant++;

    // rajout du timer au resultat
    resultat_courant.addTimer(temps);

    // ajout du resultat à la collection de résultat
    resultat_collection.addResultat(resultat_courant);

    // on vérifie si l'experience est terminée
    if (index_courant === randomized_words.length && iterator_repetition >= nb_repetition) {
        finirExperience();
        console.log(resultat_collection);
    }
    else if (index_courant === randomized_words.length && iterator_repetition < nb_repetition) {
        randomized_words.sort(() => Math.random() - 0.5);
        iterator_repetition++;
        index_courant = 0;
    }
}

async function finirExperience() {
    await sleep(2000);
    // window.location.href = '../html/finExperience.html';
}

function verifierCouleur(value) {
    if (entrainement) {
        finMancheEntrainement();
        return;
    }

    if (value !== randomized_words[index_courant].couleur.nom) {
        resultat_courant.mauvaiseReponse();
    }
    finDeLaManche();
}

// Enregistrer la position du curseur
function enregistrerPositionCurseur() {
    document.addEventListener("mousemove", enregistreDeplacementSouris);
}

// Désactiver l'enregistrement de la position du curseur
function desactiverEnregistrementPositionCurseur() {
    document.removeEventListener("mousemove", enregistreDeplacementSouris);
}

function enregistreDeplacementSouris(event) {
    const position = {
        position_x: event.clientX,
        position_y: event.clientY,
        timer : Date.now()
    };

    // ajout de la position courante du curseur au résultat courant
    resultat_courant.addPositionCurseur(position);
}

function startTimer() {
    start_timer = Date.now();
}

function stopTimer() {
    return Date.now() - start_timer;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}