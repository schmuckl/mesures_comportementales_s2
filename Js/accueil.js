function checkDevice() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("warning-device").style.display = "block";
        document.getElementById("questionnaire-entree").style.display = "none";
    }
}
