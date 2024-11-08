document.getElementById("creditForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Verhindert das normale Absenden

    // Werte aus den Eingabefeldern abrufen
    const creditAmount = document.getElementById("creditAmount").value;
    const email = document.getElementById("email").value;

    // Werte in den Local Storage speichern
    localStorage.setItem("creditAmount", creditAmount);
    localStorage.setItem("email", email);

    // Zur nächsten Seite weiterleiten
    window.location.href = "seite2.html";
});
