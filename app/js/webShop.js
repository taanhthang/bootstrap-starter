/**
 * Created by Imperia on 01.09.2016.
 */
/* Webshop*/
/* SortTops id"-1", alle Id by hide müssen vergeben sein*/
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
        hideshow(document.getElementById('-2'));
        hideshow(document.getElementById('-3'));
        hideshow(document.getElementById('-4'));

    }

}

function sorthideTops(){
    sortdivTops();
    sortdivTops();
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
        hideshow(document.getElementById('-1'));
        hideshow(document.getElementById('-3'));
        hideshow(document.getElementById('-4'));

    }

}

function sorthideShirt(){
    sortdivShirt();
    sortdivShirt();
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
        hideshow(document.getElementById('-1'));
        hideshow(document.getElementById('-2'));
        hideshow(document.getElementById('-4'));

    }

}

function sorthidePullover(){
    sortdivPullover();
    sortdivPullover();
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
        hideshow(document.getElementById('-1'));
        hideshow(document.getElementById('-2'));
        hideshow(document.getElementById('-3'));

    }

}

function sorthideJacken(){
    sortdivJacken();
    sortdivJacken();
}

/*Alternative Sort-function
 var main = document.getElementById( 'list' );

 [].map.call( main.children, Object ).sort( function ( a, b ) {
 return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
 }).forEach( function ( elem ) {
 main.appendChild( elem );
 });*/

/*hide Function */
function hideshow(which) {

    if (!document.getElementById)
    {
        return;
    }

    if (which.style.display == "block") {
        which.style.display = "none";
    }

    else {
        which.style.display = "block"
    }

}