const BLEU = {
    nom: "bleu",
    hexa: "#0000FF"
};
const VERT = {
    nom: "vert",
    hexa: "#00FF00"
};
const JAUNE = {
    nom: "jaune",
    hexa: "#FFFF00"
};
const ROUGE = {
    nom: "rouge",
    hexa: "#FF0000"
};

const element_mot_a_changer =  document.getElementById("mot-a-changer");
const boutons_couleurs = document.getElementsByClassName("bouton-couleur");
const next_bouton = document.getElementById("bouton-next");

const mots_couleurs_exemple = [
    {
        id: 1,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 2,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 3,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 4,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 5,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 6,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 7,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 8,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }
];


// La paire rouge-vert a 20% de congruent
// La paire bleu-jaune a 80% de congruent
const mots_couleurs_bloc_1 = [
    {
        id: 1,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 2,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 3,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 4,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 5,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 6,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 7,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 8,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 9,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 10,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 11,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 12,
        mot: "bleu",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 13,
        mot: "bleu",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 14,
        mot: "bleu",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 15,
        mot: "bleu",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 16,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 17,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 18,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 19,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 20,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }
];

// La paire rouge-vert a 80% de congruent
// La paire bleu-jaune a 20% de congruent
const mots_couleurs_bloc_2 = [
    {
        id: 1,
        mot: "rouge",
        couleur: ROUGE,
        association: "forte"
    }, {
        id: 2,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 3,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 4,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 5,
        mot: "rouge",
        couleur: VERT,
        association: "faible"
    }, {
        id: 6,
        mot: "vert",
        couleur: VERT,
        association: "forte"
    }, {
        id: 7,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 8,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 9,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 10,
        mot: "vert",
        couleur: ROUGE,
        association: "faible"
    }, {
        id: 11,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 12,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 13,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 14,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 15,
        mot: "bleu",
        couleur: JAUNE,
        association: "faible"
    }, {
        id: 16,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 17,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 18,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 19,
        mot: "jaune",
        couleur: JAUNE,
        association: "forte"
    }, {
        id: 20,
        mot: "jaune",
        couleur: BLEU,
        association: "faible"
    }
];