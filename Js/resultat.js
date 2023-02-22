class resultat {
    constructor(id_mot, position_start, position_reponse) {
        this.id_mot = id_mot;
        this.positions_curseurs = [];
        this.position_start = position_start;
        this.position_reponse = position_reponse;
        this.erreur = false;
        this.timer = null;
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