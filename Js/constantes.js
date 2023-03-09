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

const mots_couleurs = [
    {
        id: 1,
        mot: "rouge",
        couleur: BLEU,
        association: "faible"
    }, {
        id: 2,
        mot: "bleu",
        couleur: BLEU,
        association: "forte"
    }, {
        id: 3,
        mot: "vert",
        couleur: VERT
    }, {
        id: 4,
        mot: "jaune",
        couleur: ROUGE
    }, {
        id: 5,
        mot: "noir",
        couleur: JAUNE
    }, {
        id: 6,
        mot: "patate",
        couleur: JAUNE
    },
];