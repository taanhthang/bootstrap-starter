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
        showall();
        hide(document.getElementById('-2'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-4'));

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
        showall();
        hide(document.getElementById('-1'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-4'));

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
        showall();
        hide(document.getElementById('-1'));
        hide(document.getElementById('-2'));
        hide(document.getElementById('-4'));

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
        showall();
        hide(document.getElementById('-1'));
        hide(document.getElementById('-2'));
        hide(document.getElementById('-3'));


    }

}

function sorthideJacken(){
    sortdivJacken();
    sortdivJacken();
}

/*hide Function */
function hide(which) {

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

function show(which){
    if (!document.getElementById)
    {
        return;
    }

    which.style.display = "block"
}
function showall(){
    show(document.getElementById('-1'));
    show(document.getElementById('-2'));
    show(document.getElementById('-3'));
    show(document.getElementById('-4'));
}