/**
 * Created by Imperia on 06.09.2016.
 */
DB.ready(function () {


    /*hier wird die Produktbeschreibung eingefügt*/
    $('#PApagetext')
        .append("<p><strong>Fließende Satinbluse mit Volant</strong></p>" +
            "<ol>" +
            "<li>" +
            "<p style='width: 250px'>BLABLA</p>" +
            "</li>" +
            "</ol>")

    /*hier werden die Bilder eingefügt und die Fancybox eingebunden*/
    $('#PApageIMG')
        .append("<div class='carousel-inner '>" +
            "<div class='item active'>" +
            "<img  class='fancybox' src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/print/image1xxl.jpg'  />" +
            "</div>" +
            "<div class='item'  >" +
            "<img class='fancybox' src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/image2xxl.jpg'  />" +
            "</div>" +
            "<div class='item'>" +
            "<img class='fancybox' src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/image3xxl.jpg' />" +
            "</div>" +
            "<div class='item'>" +
            "<img  class='fancybox' src='http://images.asos-media.com/inv/media/3/6/7/0/4850763/multi/image1xxl.jpg' />" +
            "</div>" +
            "<div class='item'>" +
            "<img class='fancybox' src='http://images.asos-media.com/inv/media/5/2/1/3/4603125/gold/image1xxl.jpg' />" +
            "</div>" +
            "<div class='item'>" +
            "<img class='fancybox' src='http://images.asos-media.com/inv/media/5/3/6/8/4948635/mink/image1xxl.jpg' />" +
            "</div>" +
            "<div class='item'>" +
            "<img class='fancybox' src='http://images.asos-media.com/inv/media/1/3/0/8/5268031/image2xxl.jpg' />" +
            "</div>")

    /*hier werden die Bilder für die untere Leiste eingefügt*/

    $('#PApageIMG2')
        .append("<ol class='carousel-indicators mCustomScrollbar meartlab'>" +
            "<li data-target='#carousel-custom' data-slide-to='0' class='active'><img src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/print/image1xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='1'><img src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/image2xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='2'><img src='http://images.asos-media.com/inv/media/8/2/3/3/5313328/image3xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='3'><img src='http://images.asos-media.com/inv/media/3/6/7/0/4850763/multi/image1xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='4'><img src='http://images.asos-media.com/inv/media/5/2/1/3/4603125/gold/image1xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='5'><img src='http://images.asos-media.com/inv/media/5/3/6/8/4948635/mink/image1xxl.jpg' alt='' /></li>" +
            "<li data-target='#carousel-custom' data-slide-to='6'><img src='http://images.asos-media.com/inv/media/1/3/0/8/5268031/image2xxl.jpg' alt='' /></li>" +
            "</ol>")

    /* hier wird der Preis und die Verbindung zum Warenkorb und Wunschzettel zugefügt , vielleicht noch Änderungen nötig?*/
    $('#PApagerigth')
        .append("<div id='preis'>" +
            "<h2> Preis </h2>" +
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
            "<button id='warenkorb' type='button' class='btn'><strong>In den Warenkorb</strong></button>" +
            "</div>" +
            "</a>" +
            "</h3>" +
            "<h3>" +
            "<a href='/wunschzettel.html'>" +
            "<div>" +
            "<button id='wunschzettel' type='button' class='btn'><strong>Wunschzettel</strong></button>" +
            "</div>" +
            "</a>" +
            "</h3>")

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

