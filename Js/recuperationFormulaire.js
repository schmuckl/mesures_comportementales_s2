function initSujet() {
    checkRgpd();
    let age = recuperationAge();
    let genre = recuperationGenre();
    let daltonien = recuperationDaltonien();

    return new sujet(age, genre, daltonien)
}

function checkRgpd() { // recuperation de la tranche d'age du sujet
    let params = (new URL(document.location)).searchParams;
    if (!params.get('validationExp')) {
        window.location.href = '../html/debutExperience.html';
    }
}

function recuperationAge() { // recuperation de la tranche d'age du sujet
    let params = (new URL(document.location)).searchParams;
    if (!params.get('age')) {
        window.location.href = '../html/debutExperience.html';
    }
    return params.get('age');
}

function recuperationGenre() { // Récupération du genre de la personne
    let params = (new URL(document.location)).searchParams;
    if (!params.get('genre')) {
        window.location.href = '../html/debutExperience.html';
    }
    return params.get('genre');
}

function recuperationDaltonien() { // Récupération du genre de la personne
    let params = (new URL(document.location)).searchParams;
    if (!params.get('daltonien')) {
        window.location.href = '../html/debutExperience.html';
    }
    return params.get('daltonien') === "yes";
}
