let index_courant = 0;
let nombre_erreur = 0;
let randomized_words = [];
let resultat_collection = new resultatCollection();
let resultat_courant;
let start_timer;
const elements_manager = new elementsManager();

function verifierCouleur(value) {
    if (value === randomized_words[index_courant].couleur.nom) {
        // TODO enregistrer le déplacement de la souris
    } else {
        nombre_erreur++;
        resultat_courant.mauvaiseReponse();
    }

    finDeLaManche();
}

function finDeLaManche() {
    let temps = stopTimer();
    desactiverEnregistrementPositionCurseur();
    elements_manager.desactiverBoutonsCouleurs();
    elements_manager.activerNextBouton();

    element_mot_a_changer.innerText = "";
    index_courant++;

    resultat_courant.addTimer(temps);

    resultat_collection.addResultat(resultat_courant);

    // on vérifie si l'experience est terminée
    if (index_courant === randomized_words.length) {
        console.log(resultat_collection);
        // TODO enver vers la page de remerciement
    }
}

function initRandomWords() {
    randomized_words = [...mots_couleurs];
    randomized_words.sort(() => Math.random() - 0.5);
}

function debutManche() {
    if (index_courant === 0) {
        next_bouton.innerText = "Suivant"
    }
    resultat_courant = new resultat(
        randomized_words[index_courant].id,
        elements_manager.getPositionElementById("bouton-next"),
        elements_manager.getPositionElementById(randomized_words[index_courant].couleur.nom)
    );

    enregistrerPositionCurseur();

    elements_manager.changerMot();
    elements_manager.activerBoutonsCouleurs();
    elements_manager.desactiverNextBouton();
    startTimer();
}

// Enregistrer la position du curseur
function enregistrerPositionCurseur() {
    document.addEventListener("mousemove", enregistreDeplacementSouris);
}

function enregistreDeplacementSouris(event) {
    const position = {
        position_x : event.clientX,
        position_y : event.clientY
    };

    resultat_courant.addPositionCurseur(position);
}

// Désactiver l'enregistrement de la position du curseur
function desactiverEnregistrementPositionCurseur() {
    document.removeEventListener("mousemove", enregistreDeplacementSouris);
}

function lancerExperience() {
    initRandomWords();
    elements_manager.desactiverBoutonsCouleurs();
}

function startTimer() {
    start_timer = Date.now();
}

function stopTimer() {
    return  Date.now() - start_timer;
}

lancerExperience();