class elementsManager {
    changerMot() {
        // on récupere le mot
        element_mot_a_changer.innerText = randomized_words[index_courant].mot;

        // on récupere la couleur associée au mot
        element_mot_a_changer.style.color = randomized_words[index_courant].couleur.hexa;
    }

    desactiverBoutonsCouleurs() {
        for (let i = 0; i < boutons_couleurs.length; i++) {
            boutons_couleurs[i].disabled = true;
        }
    }

    activerBoutonsCouleurs() {
        for (let i = 0; i < boutons_couleurs.length; i++) {
            boutons_couleurs[i].disabled = false;
        }
    }

    desactiverNextBouton() {
        next_bouton.disabled = true;
    }

    activerNextBouton() {
        next_bouton.disabled = false;
    }

    getPositionElementById(elementId) {
        const element = document.getElementById(elementId);
        const boundingRect = element.getBoundingClientRect();
        const positionX = boundingRect.left + window.scrollX;
        const positionY = boundingRect.top + window.scrollY;

        return { x: positionX, y: positionY };
    }
}


