var app = 'thabefrijo';
DB.connect(app);

DB.ready(function() {
    $('#hello').html('dit con me <strong>' + app + "</strong>");
});
DB.ready(function() {
    $('#yes').click(function(){
    $(this).hide(1000);})
});
