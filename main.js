

$('#right').click(function() {
    var img_visualizzata = $('img.active');

    console.log(img_visualizzata);

    img_visualizzata.removeClass('active');

    var img_successiva = img_visualizzata.next('img');

    console.log(img_successiva);

    if (img_successiva.length != 0) {

    img_successiva.addClass('active');

    } else {
    img_successiva = $('img:first-child');
    img_successiva.addClass('active');
    }
})


$('#left').click(function() {
    var img_visualizzata = $('img.active');

    console.log(img_visualizzata);

    img_visualizzata.removeClass('active');

    var img_precedente = img_visualizzata.prev('img');

    console.log(img_precedente);

    if (img_precedente.length != 0) {

    img_precedente.addClass('active');

    } else {
    img_precedente = $('img:last-child');
    img_precedente.addClass('active');
    }
})
