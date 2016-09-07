/**
 * Created by Imperia on 01.09.2016.
 */
/* Webshop*/


/*!!!!!!!!!Achtung es funktioniert , ist aber nicht die beste , aber eine funktionierende Variante!!!!!!!!!!!*/


/*Alle Funktionen werden erst bei drücken der list-group elemente auf der Shoppage ausgeführt,also erst
durch einwirken des Users ausgeführt
 */


/* SortTops id"-1", show id am ende */
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


/* SortShirt id"-2", alle Id by hide müssen vergeben sein*/
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


/* SortPullover id"-3", alle Id by hide müssen vergeben sein*/
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

/* SortJacken id"-4", alle Id by hide müssen vergeben sein*/
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
