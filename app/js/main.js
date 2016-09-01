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
