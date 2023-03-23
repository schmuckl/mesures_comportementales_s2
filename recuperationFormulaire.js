function initSujet() {
    checkRgpd();
    let age = recuperationAge();
    let genre = recuperationGenre();
    let daltonien = recuperationDaltonien();
    let droitier = recuperationDroitier();

    return new sujet(age, genre, daltonien, droitier)
}

function checkRgpd() { // recuperation de la tranche d'age du sujet
    let params = (new URL(document.location)).searchParams;
    if (!params.get('validationExp')) {
        window.location.href = 'debutExperience.html';
    }
}

function recuperationAge() { // recuperation de la tranche d'age du sujet
    let params = (new URL(document.location)).searchParams;
    if (!params.get('age')) {
        window.location.href = 'debutExperience.html';
    }
    return params.get('age');
}

function recuperationDroitier() { // recuperation de la tranche d'age du sujet
    let params = (new URL(document.location)).searchParams;
    if (!params.get('droitier')) {
        window.location.href = 'debutExperience.html';
    }
    return params.get('droitier');
}

function recuperationGenre() { // Récupération du genre de la personne
    let params = (new URL(document.location)).searchParams;
    if (!params.get('genre')) {
        window.location.href = 'debutExperience.html';
    }
    return params.get('genre');
}

function recuperationDaltonien() { // Récupération du genre de la personne
    let params = (new URL(document.location)).searchParams;
    if (!params.get('daltonien') || params.get('daltonien') === "yes") {
        window.location.href = 'debutExperience.html';
    }
    return params.get('daltonien') === "yes";
}
