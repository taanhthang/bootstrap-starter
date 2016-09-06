/**
 * Created by Imperia on 01.09.2016.
 */
/* Webshop*/
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
    for(var j=1;j<100;j++) {
        hide(document.getElementById('/db/produkt/'+[j] +'-2'));
        hide(document.getElementById('/db/produkt/'+[j] +'-3'));
        hide(document.getElementById('/db/produkt/'+[j] +'-4'));
        show(document.getElementById('/db/produkt/'+[j] +'-1'));
    }
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
    for(var j=1;j<100;j++) {
        hide(document.getElementById('/db/produkt/'+[j] +'-1'));
        hide(document.getElementById('/db/produkt/'+[j] +'-3'));
        hide(document.getElementById('/db/produkt/'+[j] +'-4'));
        show(document.getElementById('/db/produkt/'+[j] +'-2'));
    }
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
    for(var j=1;j<100;j++) {
        hide(document.getElementById('/db/produkt/'+[j] +'-1'));
        hide(document.getElementById('/db/produkt/'+[j] +'-2'));
        hide(document.getElementById('/db/produkt/'+[j] +'-4'));
        show(document.getElementById('/db/produkt/'+[j] +'-3'));
    }

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

    for(var j=1;j<100;j++) {
        hide(document.getElementById('/db/produkt/'+[j] +'-1'));
        hide(document.getElementById('/db/produkt/'+[j] +'-2'));
        hide(document.getElementById('/db/produkt/'+[j] +'-3'));
        show(document.getElementById('/db/produkt/'+[j] +'-4'));
    }

}

/*hide Function */
function hide(which) {

    if (!document.getElementById)
    {
        return;
    }
    else {
        which.style.display = "none";
    }
}

function show(which){
    if (!document.getElementById)
    {
        return;
    }
    else {
        which.style.display = "block"
    }
}
