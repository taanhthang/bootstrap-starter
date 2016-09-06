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
DB.ready(function ()
{
    DB.produkt.find().resultList(function (result)
    {

        result.forEach(function (inh)
        {
            var bildList = inh.bild[0];
            var idList = inh.id;
            var artisList = inh.artist;
            var namenList = inh.name;
            var preisList = inh.preis;

        $('#list')
            .append(" <div id='" + idList + "'>"+
            "<div class='aProdukt col-md-12'>"+
            "<a class='thumbnail' href='/produktAnsicht.html'>"+
        "<img  src=  '"+bildList+"' >"+
            "<div class='wrapper'>"+
            "<div class='caption produktShopName'>"+
        "<span>"+namenList+"   " + preisList+"</span>"+
        "</div>"+
        "</div>"+
        "</a>"+
        "<a class='Lupe' href='"+bildList+"'data-lightbox='Shop:Shirt'><img src='https://thabefrijo-bq.global.ssl.fastly.net/v1/file/www/img/enlarge%20Lupe.png?BCB'/></a>"+
        "<a href='/artistAnsicht.html'> Link to Artist</a>"+

        "</div>"+
            "</div>"
            )
        })
    })
});
/*DB.ready(function () {
    DB.Design.find().resultList(function (result) {
        {
            result.forEach(function (inf) {
                var bildUrl = inf.gallery[0];
                $('#testest')
                    .append("<dic class='col-xs-6 col-sm-3'><div class='img-thumbnail img-responsive'><a href='" +
                        bildUrl + "'data-lightbox='TestBild'><img src='" + bildUrl +
                        "' width='300' height='200'></a> " +
                        "<div class='desc'><button type='button' class='btnvote' aria-label='Left Align' id='Votebtn'>" +
                        "<span class='glyphicon glyphicon-heart'></span> Vote " +
                        "</button>" +
                        "<button type='button' class='btnzoom' aria-lable='Right Align'>" +
                        "<a href='" + bildUrl + "'>" +
                        "<span class='glyphicon glyphicon-zoom-in'></span> Zoom in" +
                        "</a></button></div></div>")
            })
        }
    })
})*/
 /*   DB.produkt.find().resultList(function (result) {
        result.forEach(function (produkt) {
            console.log(produkt.name);
        });
    });
/*function aendern(id,kat,atr) {

    DB.produkt.load(id).then(function (produkt) {
        produkt.kat = atr;
        produkt.update({force: true}).then(function () {

        });
    });

}*/


  /* function ladeRunter() {


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

*/




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


