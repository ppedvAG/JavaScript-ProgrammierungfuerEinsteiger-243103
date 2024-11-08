/*
Übung: Bestellformular für ein Café
Beschreibung: Dein Ziel ist es, ein Bestellformular für ein Café zu erstellen,
das Kunden erlaubt, ihre Bestellungen online aufzugeben. Du wirst HTML, CSS und JavaScript nutzen, 
um Felder zu validieren und Feedback zu geben, wenn bestimmte Eingaben nicht korrekt sind.

Struktur des Formulars: Das Formular enthält folgende Eingabefelder:

Name des Kunden (Pflichtfeld)
Tischnummer (nur Zahlen, optional)
Getränkeauswahl (mit Dropdown-Liste)
Sonderwünsche (Textfeld, max. 200 Zeichen)
Bestellmenge (Zahl, nur Werte von 1 bis 10)
Bestätigungsfeld (Checkbox: „Ich bestätige meine Bestellung“)


1. HTML-Struktur
Erstelle die HTML-Struktur für das Formular, setze grundlegende Validierungen 
(wie required, maxlength, min, und max), und nutze für das Layout <label>, <input>, <select>, 
und <textarea>-Elemente.

2. CSS-Styling
Erstelle das Styling für das Formular und füge Klassen für Fehler-Feedback hinzu:
Hebe Felder, die nicht korrekt ausgefüllt sind, farblich hervor.
Gestalte das Formular benutzerfreundlich und visuell ansprechend.

3. JavaScript-Validierung
Verwende JavaScript, um die Validität der Felder zu prüfen und dynamische Fehlermeldungen 
anzuzeigen. Hier einige spezifische Validierungsbedingungen:

Wenn der Name nicht eingegeben wurde, soll eine Fehlermeldung „Bitte deinen Namen eingeben!“ angezeigt werden.
Wenn die Bestellmenge nicht im Bereich von 1 bis 10 liegt, soll eine Nachricht wie „Bestellmenge 
muss zwischen 1 und 10 liegen!“ angezeigt werden.
Wenn die Checkbox „Ich bestätige meine Bestellung“ nicht aktiviert ist, zeige eine Meldung 
an, dass die Bestellung nur abgeschickt werden kann, wenn sie bestätigt wurde.

name.addEventListener("blur", validateName);

*/