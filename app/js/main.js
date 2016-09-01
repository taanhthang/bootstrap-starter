var app = 'thabefrijo';
DB.connect(app).then()
{
    function setProdukt(produktid, name, artist, preis, collektion, kategory, bild, beschreibung) {
        var produkt = new DB.produkt;
        {
            produkt.produktid = produktid;
            produkt.name = name;
            produkt.artist = artist;
            produkt.preis = preis;
            produkt.collektion = collektion;
            produkt.beschreibung = beschreibung;
            produkt.bild = bild;
            produkt.kategory = kategory;

            produkt.save();
        }

    }

    DB.produkt.find().resultList(function (result) {
        result.forEach(function (produkt) {
            console.log(produkt.name);
        });
    });
    function sortbyKollektion(collektion) {



    DB.produkt.find()

        .equal('collektion', collektion)
        .ascending('name')
        .resultList(function (result) {
            result.forEach(function (produkt) {
                var collektionList = [produkt.name];
                console.log(collektionList)
            });
        });
}

}



/*DB.ready(function() {
 $('#hello').html(' <strong>' + app + "</strong>");
 });
 DB.ready(function() {
 $('#yes').click(function(){
 $(this).hide(1000);})
 });
 */

var divMoreInfo = null;

Init();

function Init()
{
    divMoreInfo = document.getElementById("divMoreInfo");
}

function func1(obj)
{
    obj.style.width = "450px";
    obj.style.height = "660px";

    divMoreInfo.style.left = (obj.offsetLeft + 280) + "px";
    divMoreInfo.style.top = obj.offsetTop + "px";

    divMoreInfo.style.display = "";
    divMoreInfo.style.visibility = "visible";
}

function func2(obj)
{
    obj.style.width = "256px";
    obj.style.height = "356px";

    divMoreInfo.style.display = "none";
    divMoreInfo.style.visibility = "hidden";
}

/* Webshop*/

function sortdiv() {
    var container = document.getElementById("list");
    var elements = container.childNodes;
    var sortMe = [];
    for (var i=0; i<elements.length; i++) {
        if (!elements[i].id) {
            continue;
        }
        var sortPart = elements[i].id.split("-");
        if (sortPart.length > 1) {
            sortMe.push([ 1 * sortPart[1] , elements[i] ]);
        }
    }
    sortMe.sort(function(x, y) {
        return x[0] - y[0];
    });
    for (var i=0; i<sortMe.length; i++) {
        container.appendChild(sortMe[i][1]);
    }


    /*Alternative Sort-function
    var main = document.getElementById( 'list' );

    [].map.call( main.children, Object ).sort( function ( a, b ) {
        return +a.id.match( /\d+/ ) - +b.id.match( /\d+/ );
    }).forEach( function ( elem ) {
        main.appendChild( elem );
    });*/
}
