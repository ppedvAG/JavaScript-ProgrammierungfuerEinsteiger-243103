document.addEventListener("DOMContentLoaded", function () {
    // Werte aus dem Local Storage abrufen
    const creditAmount = localStorage.getItem("creditAmount");
    const email = localStorage.getItem("email");

    // Wenn Werte vorhanden sind, in die Formularfelder einfügen
    if (creditAmount) {
        document.getElementById("creditAmount").value = creditAmount;
    }
    if (email) {
        document.getElementById("email").value = email;
    }
});
