class resultatCollection {
    constructor(sujet) {
        this.sujet = sujet;
        this.resultat = [];
    }

    addResultat(resultat) {
        this.resultat.push(resultat);
    }

    addListName(bloc) {
        this.liste = bloc;
    }
}