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