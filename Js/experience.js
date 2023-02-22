let index_courant = 0;
let randomized_words = [];
let resultat_collection;
let resultat_courant;
let start_timer;
const elements_manager = new elementsManager();


function initialisationExperience() {
    resultat_collection = new resultatCollection(initSujet())
    initRandomWords();
    elements_manager.desactiverBoutonsCouleurs();
}

function debutManche() {
    // si c'est le début, on change le texte du bouton demarrer
    if (index_courant === 0) {
        next_bouton.innerText = "Suivant"
    }

    // on initialise le résultat
    resultat_courant = new resultat(
        randomized_words[index_courant].id,
        elements_manager.getPositionElementById("bouton-next"),
        elements_manager.getPositionElementById(randomized_words[index_courant].couleur.nom)
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
    if (index_courant === randomized_words.length) {
        console.log(resultat_collection);
        // TODO enver vers la page de remerciement
    }
}


function verifierCouleur(value) {
    if (value !== randomized_words[index_courant].couleur.nom) {
        resultat_courant.mauvaiseReponse();
    }

    finDeLaManche();
}

function initRandomWords() {
    randomized_words = [...mots_couleurs];
    randomized_words.sort(() => Math.random() - 0.5);
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
        position_x : event.clientX,
        position_y : event.clientY
    };

    // ajout de la position courante du curseur au résultat courant
    resultat_courant.addPositionCurseur(position);
}

function startTimer() {
    start_timer = Date.now();
}

function stopTimer() {
    return  Date.now() - start_timer;
}