const BLEU = {
    nom: "BLEU",
    hexa: "#0000FF"
};
const VERT = {
    nom: "VERT",
    hexa: "#00FF00"
};
const JAUNE = {
    nom: "JAUNE",
    hexa: "#FFFF00"
};
const ROUGE = {
    nom: "ROUGE",
    hexa: "#FF0000"
};

const element_mot_a_changer =  document.getElementById("mot-a-changer");
const boutons_couleurs = document.getElementsByClassName("bouton-couleur");
const next_bouton = document.getElementById("bouton-next");

const mots_couleurs_exemple = [
    {
        id: 1,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 2,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 3,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 4,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 5,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 6,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 7,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 8,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }
];


// La paire ROUGE-VERT a 20% de congruent
// La paire BLEU-JAUNE a 80% de congruent
const mots_couleurs_bloc_1 = [
    {
        id: 1,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 2,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 3,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 4,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 5,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 6,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 7,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 8,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 9,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 10,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 11,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 12,
        mot: "BLEU",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 13,
        mot: "BLEU",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 14,
        mot: "BLEU",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 15,
        mot: "BLEU",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 16,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 17,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 18,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 19,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 20,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }
];

// La paire ROUGE-VERT a 80% de congruent
// La paire BLEU-JAUNE a 20% de congruent
const mots_couleurs_bloc_2 = [
    {
        id: 1,
        mot: "ROUGE",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 2,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 3,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 4,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 5,
        mot: "ROUGE",
        couleur: VERT,
        association: "faible"
    }, {
        id: 6,
        mot: "VERT",
        couleur: VERT,
        association: "forte"
    }, {
        id: 7,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 8,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 9,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 10,
        mot: "VERT",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 11,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 12,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 13,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 14,
        mot: "BLEU",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 15,
        mot: "BLEU",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 16,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 17,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 18,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 19,
        mot: "JAUNE",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 20,
        mot: "JAUNE",
        couleur: BLEU,
        association: "faible"
    }
];