var app = 'thabefrijo';
DB.connect(app).then(function() {

});

    function setProdukt(produktid, name, artist, preis, collektion, kategory, bild,groesse,imbestand, beschreibung)
    {
        var produkt = new DB.produkt;

            produkt.produktid = produktid;
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

    DB.produkt.find().resultList(function (result) {
        result.forEach(function (produkt) {
            console.log(produkt.name);
        });
    });

   function ladeRunter() {


       var idList = [];
       var artistList = [];
       var preisList = [];
       var nameList = [];


       DB.produkt.find()
           .ascending("collektion")
           .resultList(function(result)
           {
               result.forEach(function (produkt)
               {
                   idList.push(produkt.produktid);
                   artistList.push(produkt.artist);
                   preisList.push(produkt.preis);
                   nameList.push(produkt.name);
                   return idList, artistList, preisList,nameList


               });
           });
   }


    function getpreis(id)
    {
        DB.produkt.find()
            .equal("produktid",id)
            .singleResult(function (produkt)
            {
                console.log(produkt.preis);
            });
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


