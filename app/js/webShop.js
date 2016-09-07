/**
 * Created by Imperia on 01.09.2016.
 */
/* Webshop*/


/*!!!!!!!!!Achtung es funktioniert , ist aber nicht die beste , aber eine funktionierende Variante!!!!!!!!!!!*/


/*Alle Funktionen werden erst bei drücken der list-group elemente auf der Shoppage ausgeführt,also erst
durch einwirken des Users ausgeführt
 */

/*/db/produkt/1-2 so sieht eine unserer IDs in der DB aus wobei hintern - die Zahlen 1 bis 4 für die jeweilige Kategorie
1 Tops
2 Shirt
3 Pullover
4 Jacken darstellt.
Die Zahl vor den - ist der Zähler , damit die ID eindeutig ist
ZUM Beispiel:

 /db/produkt/1-2  : Erstes Shirt
 /db/produkt/2-2  : Zweites Shirt
 /db/produkt/2-2  : Drittes Shirt
 /db/produkt/2-2  : Viertes Shirt

Es geht warscheinlich schöner und besser , aber für die Folgenden Funktionen funktioniert das und wir hatten nur das
 Ziel es überhauopt zum Laufen zu bringen , da sich bei unsere Gruppe die Vorerfahrung auf SE1 und Se2 begrenzen*/

/* Sortiert Produkte nach Tops und vesteckt alle anderen */
function sortdivTops() {

    var container = document.getElementById("list");
    var elements = container.childNodes;
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].id) {
            continue;

        }
        var sortPart = elements[i].id.split("-");
        if (sortPart.length > 1) {
            sortMe.push([1 * sortPart[1], elements[i]]);
        }

    }
    sortMe.sort(function (x, y) {
        return x[0] - y[0];
    });
    for (var i = 0; i < sortMe.length; i++) {
        container.appendChild(sortMe[i][1]);
    }
    /*Großes Read me unten lesen  */
    hideallJacken();
    hideallShirt();
    hideallPullover();
    showallTops();
}


/* Sortiert Produkte nach Shirt und vesteckt alle anderen */
function sortdivShirt() {

    var container = document.getElementById("list");
    var elements = container.childNodes;
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].id) {
            continue;
        }
        var sortPart = elements[i].id.split("-");
        if (sortPart.length > 1) {
            sortMe.push([1 * sortPart[1], elements[i]]);
        }

    }
    sortMe.sort(function (x, y) {
        return x[0] - y[0];
    });
    for (var i = 0; i < sortMe.length; i++) {
        container.appendChild(sortMe[i][1]);

    }
    /*Großes Read me unten lesen  */
    hideallTops();
    hideallJacken();
    hideallPullover();
    showallShirt();
}


/* Sortiert Produkte nach Pullover und vesteckt alle anderen */
function sortdivPullover() {

    var container = document.getElementById("list");
    var elements = container.childNodes;
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].id) {
            continue;
        }
        var sortPart = elements[i].id.split("-");
        if (sortPart.length > 1) {
            sortMe.push([1 * sortPart[1], elements[i]]);
        }

    }
    sortMe.sort(function (x, y) {
        return x[0] - y[0];
    });
    for (var i = 0; i < sortMe.length; i++) {
        container.appendChild(sortMe[i][1]);

    }
    /*Großes Read me unten lesen  */
    hideallTops();
    hideallShirt();
    hideallJacken();
    showllPullover();

}

/* Sortiert Produkte nach JAcken und vesteckt alle anderen */
function sortdivJacken() {

    var container = document.getElementById("list");
    var elements = container.childNodes;
    var sortMe = [];
    for (var i = 0; i < elements.length; i++) {
        if (!elements[i].id) {
            continue;
        }
        var sortPart = elements[i].id.split("-");
        if (sortPart.length > 1) {
            sortMe.push([1 * sortPart[1], elements[i]]);
        }

    }
    sortMe.sort(function (x, y) {
        return x[0] - y[0];
    });
    for (var i = 0; i < sortMe.length; i++) {
        container.appendChild(sortMe[i][1]);

    }
    /*Großes Read me unten lesen  */

    hideallTops();
    hideallShirt();
    hideallPullover();
    showallJacken();

}

/*hide Function */
function hide(which) {

    if (!document.getElementById) {
        return;
    }
    if (which.style.display == "block") {
        which.style.display = "none";
    }
    else {
        return;
    }
}

function show(which) {
    if (!document.getElementById) {
        return;
    }
    if (which.style.display == "none") {
        which.style.display = "block";
    }
    else {
        return;
    }
}


/*READ ME PLEASE:Diese Funktion sind unschön funktionieren aber , es geht bestimmt schöner über J-querry
 ich habe es damit aber nicht hinbekommen(Felix Tip konnte ich so einfach auch nicht umsetzen, da zu geringe
 Programmiererfahrung und anderer wichtigere Aufgaben):

 Die Funktion FUnktioniert mit Jj<4 da die Anzahl der Kategorieprodukte zur Zeit immer 3 ist ,
 Die Funktion hat auch einbandfrei das gemacht was es soll wenn j<100 ist gab nur den blöden Sicherheitsfehler
 TypeError aus wenn es zu Ids kamm die nicht vergeben waren:Es hat aber Trotzdem das dargestellt was es soll.

 Deshalb habe ich zur leichten Anpassung es jetz inm die repetativenFunktionen da unten geschrieben, die ich weiß nicht
 schön sind aber funktionieren.
 */


/*Für Tops zur Zeit 3 in DB */

function hideallTops(){
    for (var j = 1; j < 4; j++) {
        hide(document.getElementById('/db/produkt/' + j + '-1'));
    }
}
function showallTops(){
    for (var j = 1; j < 4; j++) {
        show(document.getElementById('/db/produkt/' + j + '-1'));
    }
}

/*Für Shirt zur Zeit 3 in DB */




function hideallShirt(){
    for (var j = 1; j < 4; j++) {
        hide(document.getElementById('/db/produkt/' + j + '-2'));
    }
}

function showallShirt(){
    for (var j = 1; j < 4; j++) {
        show(document.getElementById('/db/produkt/' + j + '-2'));
    }
}


/*Für Pullover zur Zeit 3 in DB */



function hideallPullover(){
    for (var j = 1; j < 4; j++) {
        hide(document.getElementById('/db/produkt/' + j + '-3'));
    }
}

function showllPullover(){
    for (var j = 1; j < 4; j++) {
        show(document.getElementById('/db/produkt/' + j + '-3'));
    }
}

/*Für Jacken zur Zeit 3 in DB */



function hideallJacken(){
    for (var j = 1; j < 4; j++) {
        hide(document.getElementById('/db/produkt/' + j + '-4'));
    }
}

function showallJacken(){
    for (var j = 1; j < 4; j++) {
        show(document.getElementById('/db/produkt/' + j + '-4'));
    }
}
