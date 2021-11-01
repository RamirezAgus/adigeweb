

$(document).ready(function() {
    
    $('body').removeClass('js-no-funciona').addClass('js-funciona');
    
    

    
    $('#logo').after('<button class="abre-menu"><i class="icon-menu"></i></button');
    
    $('.abre-menu').on('click', function () {

        // hacemos aparecer al nav
        $('nav').slideDown();

    });

    // agregamos el botón de cierre de menú
    $('.menu').before('<button class="cierra-menu"><i class="icon-cancel"></i></button>');

    // funcionamiento del botón de cierre del menú
    $('.cierra-menu').on('click', function () {

        // hacemos desaparecer al nav
        $('nav').slideUp();

    });
    
   
});



















