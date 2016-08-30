var app = 'thabefrijo';
DB.connect(app).then()
{
    function setProdukt(name,artist,preis,collektion,beschreibung)
    {
        var produkt = new DB.produkt;
        {
            produkt.name = name;
            produkt.artist = artist;
            produkt.preis = preis;
            produkt.collektion =collektion;
            produkt.beschreibung = beschreibung;
            produkt.save();
        }
        var produktBild = new DB.produktBild;
        {

        }



    }
}



/*DB.ready(function() {
    $('#hello').html('dit con me <strong>' + app + "</strong>");
});
DB.ready(function() {
    $('#yes').click(function(){
    $(this).hide(1000);})
});
*/
