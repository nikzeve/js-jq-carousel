

$('#right').click(function() {
    var img_visualizzata = $('img.active');
    var pallino_visualizzato = $('i.active');

    img_visualizzata.removeClass('active');

    pallino_visualizzato.removeClass('active');

    var img_successiva = img_visualizzata.next('img');

    var pallino_successivo = pallino_visualizzato.next('i');

    if (img_successiva.length != 0) {

    img_successiva.addClass('active');
    pallino_successivo.addClass('active');

    } else {
    img_successiva = $('img:first-of-type');
    img_successiva.addClass('active');

    $('.fa-circle:first-of-type').addClass('active');
    }
})


$('#left').click(function() {
    var img_visualizzata = $('img.active');
    var pallino_visualizzato = $('i.active');

    img_visualizzata.removeClass('active');
    pallino_visualizzato.removeClass('active');

    var img_precedente = img_visualizzata.prev('img');

    var pallino_precedente = pallino_visualizzato.prev('i');

    if (img_precedente.length != 0) {

    img_precedente.addClass('active');
    pallino_precedente.addClass('active');

    } else {
    img_precedente = $('img:last-of-type');
    img_precedente.addClass('active');

    $('.fa-circle:last-child').addClass('active');
    }
})
