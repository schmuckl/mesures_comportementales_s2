form = document.getElementById("formulaire-entree");

form.addEventListener('submit', function (event) {
    // prevent the form from submitting
    let daltonien_field = document.getElementById("yes");
    if (daltonien_field.checked) {
        event.preventDefault();
        document.getElementById("warning-daltonien").style.display = "block";
        document.getElementById("questionnaire-entree").style.display = "none";
    }
});

function checkDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("warning-device").style.display = "block";
        document.getElementById("questionnaire-entree").style.display = "none";
    }
}
