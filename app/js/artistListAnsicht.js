/**
 * Created by Imperia on 02.09.2016.
 */
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
        hide(document.getElementById('-2'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-4'));
        hide(document.getElementById('-5'));


    }

}

function sorthideCA(){
    sortdivCA();
    sortdivCA();
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
        hide(document.getElementById('-1'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-4'));
        hide(document.getElementById('-5'));


    }

}

function sorthideCB(){
    sortdivCB();
    sortdivCB();
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
        hide(document.getElementById('-1'));
        hide(document.getElementById('-2'));
        hide(document.getElementById('-4'));
        hide(document.getElementById('-5'));


    }

}

function sorthideCC(){
    sortdivCC();
    sortdivCC();
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
        hide(document.getElementById('-1'));
        hide(document.getElementById('-2'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-5'));


    }

}

function sorthideCD(){
    sortdivCD();
    sortdivCD();
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
        hide(document.getElementById('-1'));
        hide(document.getElementById('-2'));
        hide(document.getElementById('-3'));
        hide(document.getElementById('-4'));



    }

}

function sorthideCE(){
    sortdivCE();
    sortdivCE();
}


function showallA(){
    show(document.getElementById('-1'));
    show(document.getElementById('-2'));
    show(document.getElementById('-3'));
    show(document.getElementById('-4'));
    show(document.getElementById('-5'));

}