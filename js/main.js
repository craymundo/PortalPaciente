$(document).ready(function() {
    var height = $(window).height();
    $(".content_login_right").height(height);


});

function activar_paso(id) {
    console.log('PASO:' + id);
    if (id == '1') {
        $('#paso_2').fadeOut(500, function() {
            $('#paso_1').fadeIn();
            $("#lblSubTitulo").parent().show();
            $("#lblSubTitulo").text("Datos Personales");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");

            $(".timeline.text-center").parent().show();

            $("body > div > div.content_login_right > div").attr('style', 'width: 360px!important');
        });
    } else if (id == '2') {

        $('#paso_1').fadeOut(500, function() {
            $('#paso_2').fadeIn();
            $("#lblSubTitulo").parent().show();
            $("#lblSubTitulo").text("Datos de contacto");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");
            $(".timeline.text-center").parent().show();
            //
            $("body > div > div.content_login_right > div").attr('style', 'width: 360px!important');
        });
    } else if (id == '3') {

        $('#paso_2').fadeOut(500, function() {
            $('#terminos_y_condiciones').fadeIn();
            $("#lblSubTitulo").parent().hide();
            $("#lblSubTituloPrincipal").text("Términos y condiciones");
            $("#lblSubTituloPrincipal").addClass("mt-titulo-terminos");
            $(".timeline.text-center").parent().attr('style', 'display: none !important');

            $("body > div > div.content_login_right > div").attr('style', 'width: 504px!important');
        });
    } else if (id == '4') {


        $('#terminos_y_condiciones').fadeOut(500, function() {
            $('#paso_2').fadeIn();
            $("#lblSubTitulo").parent().show();
            $("#lblSubTitulo").text("Datos de contacto");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");
            $("#lblSubTituloPrincipal").removeClass("mt-titulo-terminos");
            $(".timeline.text-center").parent().show();
            //
            $("body > div > div.content_login_right > div").attr('style', 'width: 360px!important');
        });

    }
}