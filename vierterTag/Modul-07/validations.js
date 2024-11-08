// Contraint Validation API

const passwordInp = document.querySelector("#password")

// Lambdas in JS
function test() {
    return true;
}

const multiply = (x, y) => x * y;
console.log(multiply(5, 5));

passwordInp.addEventListener("focus", function () {

    if (passwordInp.validity.valueMissing) {
        // erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.setCustomValidity("Das Passwort darf nicht leer sein.");
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
        passwordInp.reportValidity();
    }
    else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

document.querySelector("form").addEventListener("submit", function (ev) {
    // Auf die Form angewendet verhindert ev.preventDefault das Neuladen der Seite bei senden der Form
    ev.preventDefault();
})

// Mögliche Validity Props
/*
    patternMismatch - Inhalt stimmt nicht mit pattern überein
    tooLong - Inhalt ist zu lang
    tooShort - Inhalt ist zu kurz
    rangeOverflow - Wert höher ist als im max-Attribut bestimmt
    rangeUnderflow - Wert niedriger ist als im min-Attribut bestimmt
    typeMismatch - Wert ist nicht der richtige Typ, z.B. email ohne @
    valid - Gibt true zurück, wenn alles gültig ist
    valueMissing - Wenn das Input-Element das Attribut required hat und das Feld leer ist

    keyup
*/

passwordInp.addEventListener("keyup", function (ev) {
    if (passwordInp.validity.tooShort) {
        passwordInp.setCustomValidity(`Das Passwort muss mindestens 8 Zeichen lang sein. Gerade hat es ${passwordInp.value.length} Zeichen.`);
        // Erlaubt es uns eine eigene Fehlermeldung zu schreiben
        // Solange diese kein leerer String ist, gilt die form als invalid
        passwordInp.reportValidity();
        // Zeigt uns die Fehlermeldung an wenn das Input-Element ungültig ist
    } else {
        // Entfernen die Error-Message sobald das Input-Feld gültig ist
        passwordInp.setCustomValidity("");
    }
})

const zipCode = document.querySelector("#zipCode");
const country = document.querySelector("#country");

function checkPLZ() {
    let constraints = {
        ch: ['^(CH-)?\\d{4}$', "Schweizerische PLZ müssen aus genau 4 Zeichen bestehen: e.g CH-1064 or 1064"],
        at: ['^(AT-)?\\d{4}$', "Österreichische PLZ müssen aus genau 4 Zeichen bestehen: e.g AT-1064 or 1064"],
        fr: ['^(F-)?\\d{5}$', "Französische PLZ müssen aus genau 5 Zeichen bestehen: e.g F-10645 or 10645"]
    }

    const countryValue = country.value;
    const zipCodeValue = zipCode.value;

    let constraint = new RegExp(constraints[countryValue][0], "");

    if (constraint.test(zipCodeValue)) {
        zipCode.setCustomValidity("");
    }
    else {
        zipCode.setCustomValidity(constraints[countryValue][1]);
        zipCode.reportValidity();
    }
}

zipCode.addEventListener("input", checkPLZ);
country.addEventListener("input", checkPLZ);