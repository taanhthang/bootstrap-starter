var app = 'thabefrijo';
DB.connect(app).then(function() {

});

    function setProdukt(produktid, name, artist, preis, collektion, kategory, bild,groesse,imbestand, beschreibung)
    {
        var produkt = new DB.produkt;
            produkt.id = produktid;
            produkt.name = name;
            produkt.artist = artist;
            produkt.preis = preis;
            produkt.collektion = collektion;
            produkt.beschreibung = beschreibung;
            produkt.bild = bild;
            produkt.kategory = kategory;
            produkt.groesse = groesse;
            produkt.imbestand=imbestand;
            produkt.save();


    }
    /* Webshoppage*/
DB.ready(function ()
{
    DB.produkt.find().resultList(function (result)
    {

        result.forEach(function (inh)
        {
            var bildList = inh.bild[0];
            var idList = inh.id;
            var artistList = inh.artist;
            var namenList = inh.name;
            var preisList = inh.preis;

        $('#list')
            .append(" <div id='" + idList + "'style='Display:block;'>"+
            "<div class='aProdukt col-md-12'>"+
            "<a class='thumbnail' href='/produktAnsicht.html'onclick= localStorage.setItem('produktid','"+idList+"')>"+
        "<img  src=  '"+bildList+"' >"+
            "<div class='wrapper'>"+
            "<div class='caption produktShopName'>"+
        "<span>"+namenList+"   " + preisList+"€</span>"+
        "</div>"+
        "</div>"+
        "</a>"+
        "<a class='Lupe' href='"+bildList+"'data-lightbox='Shop:Shirt'><img src='https://thabefrijo-bq.global.ssl.fastly.net/v1/file/www/img/enlarge%20Lupe.png?BCB'/></a>"+
        "<a href='/artistAnsicht.html'onclick= localStorage.setItem('artist','"+artistList+"')> "+artistList+"</a>"+

        "</div>"+
            "</div>"
            )
        })
    })
});


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


