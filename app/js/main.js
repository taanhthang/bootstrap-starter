var app = 'thabefrijo';
DB.connect(app).then()
{
    function setProdukt(produktid,name,artist,preis,collektion,kategory,beschreibung)
    {
        var produkt = new DB.produkt;
        {
            produkt.produktid = produktid;
            produkt.name = name;
            produkt.artist = artist;
            produkt.preis = preis;
            produkt.collektion =collektion;
            produkt.beschreibung = beschreibung;
            produkt.kategory= kategory;

            produkt.save();
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
