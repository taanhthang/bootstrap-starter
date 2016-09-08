/**
 * Created by Imperia on 06.09.2016.
 */
DB.ready(function () {
    var params = {};
    location.search.substring(1).split('&').forEach(function(param) {
        var pair = param.split('=');
        params[pair[0]] = pair[1];
    });

    DB.produkt.load(params.id).then(function(object) {
            var groesse = [];
            var bild= [];
            object.groesse.forEach(function (entry) {
                groesse.push(entry);
                console.log(groesse);
            });
            object.bild.forEach(function (pic) {
            bild.push(pic);
            console.log(bild);
            });
            var namen = object.name;
            var preis = object.preis;
            var beschreibung = object.beschreibung;



            /*hier wird die Produktbeschreibung eingefügt*/
        $('#PApagetext')
            .append("<p><strong>"+namen+"</strong></p>" +
                "<ol>" +
                "<li>" +
                "<p style='width: 250px'>"+beschreibung+"</p>" +
                "</li>" +
                "</ol>");

        /*hier werden die Bilder eingefügt und die Fancybox eingebunden*/
        $('#PApageIMG')
            .append("<div class='carousel-inner '>" +
                "<div class='item active'>" +
                "<img  class='fancybox' src='"+bild[0]+"'  />" +
                "</div>" +
                "<div class='item'  >" +
                "<img class='fancybox' src='"+bild[1]+"'  />" +
                "</div>" +
                "<div class='item'>" +
                "<img class='fancybox' src='"+bild[2]+"' />" +
                "</div>" +
                "<div class='item'>" +
                "<img  class='fancybox' src='"+bild[3]+"' />" +
                "</div>" +
                "<div class='item'>" +
                "<img class='fancybox' src='"+bild[4]+"' />" +
                "</div>" +
                "<div class='item'>" +
                "<img class='fancybox' src='"+bild[5]+"' />" +
                "</div>" +
                "<div class='item'>" +
                "<img class='fancybox' src='"+bild[6]+"' />" +
                "</div>");

        /*hier werden die Bilder für die untere Leiste eingefügt*/


        $('#PApageIMG2')
            .append("<ol class='carousel-indicators mCustomScrollbar meartlab'>" +
                "<li data-target='#carousel-custom' data-slide-to='0' class='active'><img src='"+bild[0]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='1'><img src='"+bild[1]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='2'><img src='"+bild[2]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='3'><img src='"+bild[3]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='4'><img src='"+bild[4]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='5'><img src='"+bild[5]+"' alt='' /></li>" +
                "<li data-target='#carousel-custom' data-slide-to='6'><img src='"+bild[6]+"' alt='' /></li>" +
                "</ol>");

        /* hier wird der Preis und die Verbindung zum Warenkorb und Wunschzettel zugefügt , vielleicht noch Änderungen nötig?*/
        $('#PApagerigth')
            .append("<div id='preis'>" +
                "<h2> "+preis+"€ </h2>" +
                "</div>" +

                "<div id='groeße'>" +
                "<ul>" +
                "<ul>" +
                "<p id='Groesse'><strong>Größe</strong></p>" +
                "<select id='Groesse' name='size'>" +
                "<option value='Wählen'>Wählen</option>" +
                "<option value='XS'>XS</option>" +
                "<option value='S'>S</option>" +
                "<option value='M'>M</option>" +
                "<option value='L'>L</option>" +
                "<option value='XL'>XL</option>" +
                "</select>" +
                "</ul>" +
                "</ul>" +
                "</div>" +
                "<h3>" +
                "<a href='/warenkorb.html'>" +
                "<div>" +
                "<button id='warenkorb' type='button' class='btn'><strong>In den Warenkorb </strong></button>" +
                "</div>" +
                "</a>" +
                "</h3>" +
                "<h3>" +
                "<a href='/wunschzettel.html'>" +
                "<div>" +
                "<button id='wunschzettel' type='button' class='btn'><strong>Wunschzettel </strong></button>" +
                "</div>" +
                "</a>" +
                "</h3>");

        /* Die folgenden Function sind für die Vergrößerung fancybox*/
        $(function ($) {
            var addToAll = false;
            var gallery = true;
            var titlePosition = 'inside';
            $(addToAll ? 'img' : 'img.fancybox').each(function () {
                var $this = $(this);
                var title = $this.attr('title');
                var src = $this.attr('data-big') || $this.attr('src');
                var a = $('<a href="#" class="fancybox"></a>').attr('href', src).attr('title', title);
                $this.wrap(a);
            });
            if (gallery)
                $('a.fancybox').attr('rel', 'fancyboxgallery');
            $('a.fancybox').fancybox({
                titlePosition: titlePosition
            });
        });
        $.noConflict();


    });
});

