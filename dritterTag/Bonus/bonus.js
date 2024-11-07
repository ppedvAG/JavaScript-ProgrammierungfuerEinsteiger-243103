// Funktion um Cookies zu erstellen, anzuzeigen und zu löschen:
// document.cookie gibt uns einen String zurück in dem alle cookies enthalten sind und mit ; getrennt werden
// cookies werden in Schlüssel = Wert-Paaren gespeichert
// sind ein prop vom Document
function setCookie(cookieName, cookieValue, expireDays = 0) {
    const currentDate = new Date().getTime();
    // Gibt uns die nötigen Millisekunden an um das entsprechende Datum zu generieren
    const expireDate = new Date().setTime(currentDate + (expireDays * 24 * 60 * 60 * 1000));
    // Erstellt das Datum und fügt es in den String ein
    const expiration = `expires=${new Date(expireDate).toUTCString()};`;
    console.log(expiration);
    // Hier wird der Cookie gesetzt
    document.cookie = `${cookieName}=${cookieValue};${expiration}`;
}

function getCookies() {
    const cookies = document.cookie;
    document.querySelector("#output").innerText = cookies;
}

function deleteCookie(cookieName) {
    // Wenn wir einen Cookie löschen wollen, müssen wir das expiration Date auf ein Datum in der Vergangenheit setzen
    document.cookie = `${cookieName}=; expires=${new Date(0).toUTCString()}`;
}

const showCookie = document.querySelector("#showCookies");
showCookie.addEventListener("click", getCookies);

const deleteCookies = document.querySelector("#deleteCookies");
deleteCookies.addEventListener("click", () => {
    deleteCookie("consent");
});

const consentCookies = document.querySelector("#consent");
consentCookies.addEventListener("click", () => {
    setCookie("consent", "yes", 50);
    document.querySelector(".cookie-banner").style.display = "none";
});

function showBanner() {
    const cookies = document.cookie;
    if (cookies.includes("consent")) {
        document.querySelector(".cookie-banner").style.display = "none";
    }
    else {
        document.querySelector(".cookie-banner").style.display = "block";
        document.querySelectorAll(".cookie-banner");
    }
}

// Event wird ausgelöst, sobald die Seite fertig geladen hat
window.addEventListener("load", showBanner);

deleteCookies.addEventListener("click", showBanner);