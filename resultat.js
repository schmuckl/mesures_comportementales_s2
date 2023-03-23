class resultat {
    constructor(id_mot, position_start, position_reponse, couleur_mot, valeur_mot, congruance) {
        this.id_mot = id_mot;
        this.positions_curseurs = [];
        this.position_start = position_start;
        this.position_reponse = position_reponse;
        this.erreur = false;
        this.timer = null;
        this.couleur_mot = couleur_mot;
        this.valeur_mot = valeur_mot;
        this.congruance = congruance
    }

    addPositionCurseur(position_curseur) {
        this.positions_curseurs.push(position_curseur);
    }

    mauvaiseReponse() {
        this.erreur = true;
    }

    addTimer(timer) {
        this.timer = timer;
    }
}