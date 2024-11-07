// Ich bin einzeiliger Kommentar

/*
    Mehrzeiliger Kommentar
*/

// So wenig Kommentare wie möglich, so viele wie nötig
// Wollen eigentlich, dass unser Code für uns spricht

// Können Texte, variablen Zahlen usw direkt in der Konsole der dev-Tools des Browsers eingeben

// Dafür sprechen wir die Konsole an
console.log("Hallo Welt!"); // einfache Ausgabe
console.error("Da lief was schief"); // Wird als Fehler ausgegeben
console.info("Ich bin eine Information");

// Variable definieren

// Moderne Varianten: 
let firstName = "Max";
// Identifier muss mit Buchstaben, _ oder $ beginnen
// Identifier ist Case Sensitive
let age = 18;
// Variablen die mit let definiert wurden dürfen verändert werden

// Alternative zu let:
const lastName = "Mustermann";
// Funktioniert wir let, kann aber nicht neuzugewiesen werden

// Wie gebe ich diese Variablen in der Konsole aus?
console.log(firstName);

// Mit weiterem String kombinieren:
console.log("Hallo " + firstName + " " + lastName); // Concat

// Interpolierter String:
console.log(`Hallo ${firstName} ${lastName}`);

// Primitives in JS
// Sind eigentlich reine Daten
// sind von einem Wrapper Objekt umgeben, damit weiterhin alles ein Objekt ist in JS

// String Zeichenfolge
// Strings werden von "" oder von '' akzeptiert
console.log("Hallo");
console.log('Hallo');

// Wenn wir Anführungszeichen im String benutzen wollen:
console.log('Er sagt: "Hallo Welt"');
console.log("Er sagt: 'Hallo Welt'");

// Geht nicht:
// console.log("Er sagt: "Hallo Welt"");
// Wenn wir die selben Anführungszeichen wie zum definieren des Strings benutzen wollen:
// Der Backslash ist der "Escape-Character" symbolisiert, dass der nachfolgende Buchstabe/Character als Text
// verwendet wird
console.log("Er sagt: \"Hallo Welt\"");

// number
// Jeglicher Zahlenwert, egal ob mit oder ohne Komma
let zahl = 12;
let auchZahl = -12.5;
// Maximaler Wert 1.797693134.......e+206

// Arithemtische Operatoren:
// + Plus
// - Minus
// * Mal
// / Geteilt
// Können mit dem Zuweisungsoperator kombiniert werden
// zahl = zahl * 4;
zahl *= 4;

// % Modulo Teilung mit Rest
console.log(254.6 * 13 % 4);
console.log(23 % 7);

// ++ Inkrement
// -- Dekrement
// Wenn man das inkrement/dekrement vor die Zahl stellt, dann wird die Zahl vor der eigentlichen operation erhöht
// bzw erniedrigt
// Wenn es danach steht wird es erst die eigentliche Operation durchgeführt
console.log(auchZahl++);
console.log(auchZahl);
let auchZahl2 = auchZahl
console.log(++auchZahl2);
console.log(auchZahl);

// boolean
// true/false 
let alleAnwesend = true;
let kursEnde = false;
// Wird meistens für Vergleiche und if-Blöcke verwendet

// null
// ist die absichtliche Zuweisung keines Wertes
// Bedeutet die Abwesenheit von Daten
let nichts = null;

// undefined
let test;
// Bedeutet, dass die Variable definiert, aber nie initialisiert wurde

// NaN
// Not a Number
// Für ungültige Mathematische Operationen
console.log(test + 50);

// typeof
console.log(typeof (firstName));
console.log(typeof (test));

// Scopes
// Unterschied zwischen let, const und var

let x;
var y;
const z = 5;

// 1. Unterschied: const muss sofort mit einem Wert init. werden
// var und let können später init. werden
x = 15;
y = 12;

// 2. Unterschied: var legt ein globales Objekt an
// let hingegen nicht

// 3. Unterschied: hoisting
w = 15;
console.log(w);
var w;
// Wenn wir das mit let machen wird dies NICHT funktionieren

// 4. Unterschied:
// var kennt den Blockscope nicht
// let schon

{
    let block1 = "Hallo!";
    var block2 = "Bye!";
    console.log(block1);
    console.log(x);
    console.log(block2);
}

//console.log(block1); // Hier scheitert der Aufruf, da block1 nur innerhalb des blockes bekannt ist
console.log(block2); // Das funktioniert, da var den Blockscope nicht kennt

// Scopes in JS:
// Globaler Scope => Variable ist im gesamten Script aufrufbar
// Function Scope => Variable ist innerhalb der gesamten Funktion bekannt
// Block Scope => Variable ist nur in dem Block in dem sie definiert wurde aufrufbar


/*
    Übung:
    
    1. Variablen und Datentypen
        - Erstelle eine Variable vorname und weise ihr deinen Vornamen als String zu
        - ERstelle eine Variable alter und setzte sie auf dein Alter.
        - Erstelle eine Konstante land und setze sie auf den Namen deines Heimatlandes.
        - Verwende die Konsole, um eine Begrüßung auszugeben, die vorname, alter und land 
          kombiniert. Nutze dafür String-Interpolation
    
    2. Operatoren
        - Erstelle eine Variable jahr und setze sie auf das aktuelle Jahr
        - Berechne das Geburtsjahr, indem du alter und jahr abziehst. Speichere in einer Variable geburtsjahr
          und gib es aus.
        - Nutze den Modulo-Operator, um zu überprüfen, ob dein Alter eine gerade oder ungerade Zahl ist
          und gib eine Nachricht aus z.B. "Mein Alter ist eine gerade Zahl"
        

    3. Datentypen und typeof
        - Gib den Datentypen von vorname,alter, land und geburtsjahr mit typeof in der Konsole aus.
        - Erstelle eine neue Variable lieblingszahl, aber weise ihr noch keinen Wert zu. Gib dann den Typ
          der Variable lieblingszahl in der Konsole aus.

    4. Bonus:
        - Erweitere das Script, um interaktive Eingaben von prompt zu akzeptieren und gebe dem Benutzer
        die Möglichkeit, seinen Namen und sein Alter einzugeben.
*/
