/**
 * Created by Imperia on 02.09.2016.
 */


/* hier so haben wir in statischen Bereich angefangen gehabt, ähnliche Funktionaliät wie der Webshop */


/* SortJacken id"-4", alle Id by hide müssen vergeben sein*/
function sortdivCA() {

    var container = document.getElementById("listA");
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
        showallA();
        hideallA();
        show(document.getElementById('-1'));


    }

}

function sortdivCB() {

    var container = document.getElementById("listA");
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
        showallA();
        hideallA();
        show(document.getElementById('-2'));


    }

}

function sortdivCC() {

    var container = document.getElementById("listA");
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
        showallA();
        hideallA();
        show(document.getElementById('-3'));


    }

}

function sortdivCD() {

    var container = document.getElementById("listA");
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
        showallA();
        hideallA();
        show(document.getElementById('-4'));


    }

}

function sortdivCE() {

    var container = document.getElementById("listA");
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
        showallA();
        hideallA();
        show(document.getElementById('-5'));



    }

}

function showallA(){
    for(var i=1;i<6;i++) {
        show(document.getElementById('-'+[i]));
    }

}
function hideallA(){
     for(var i=1;i<6;i++) {
         hide(document.getElementById('-'+[i]));
     }
}