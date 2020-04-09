$(document).ready(function() {
    var height = $(window).height();
    $(".content_login_right").height(height);
});

function activar_paso(id) {
    if (id == '1') {
        $('#paso_2').fadeOut(500, function() {
            $('#paso_1').fadeIn();
            $("#lblSubTitulo").parent().show();

            $("#lblSubTitulo").text("Datos Personales");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");

            $(".timeline.text-center").parent().removeClass("d-none");
            $("#form_registro").removeClass("contenedor_form_registro_w2");
            $("#form_registro").addClass("contenedor_form_registro_w1");
        });
    } else if (id == '2') {

        $('#paso_1').fadeOut(500, function() {
            $('#paso_2').fadeIn();
            $("#lblSubTitulo").parent().show();

            $("#lblSubTitulo").text("Datos de contacto");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");

            $(".timeline.text-center").parent().removeClass("d-none");
            $("#form_registro").removeClass("contenedor_form_registro_w2");
            $("#form_registro").addClass("contenedor_form_registro_w1");
        });
    } else if (id == '3') {

        $('#paso_2').fadeOut(500, function() {
            $('#terminos_y_condiciones').fadeIn();
            $("#lblSubTitulo").parent().hide();

            $("#lblSubTituloPrincipal").text("Términos y condiciones");

            $("#lblSubTituloPrincipal").addClass("mt-titulo-terminos");
            $(".timeline.text-center").parent().addClass("d-none");
            $("#form_registro").removeClass("contenedor_form_registro_w1");
            $("#form_registro").addClass("contenedor_form_registro_w2");
        });
    } else if (id == '4') {


        $('#terminos_y_condiciones').fadeOut(500, function() {
            $('#paso_2').fadeIn();
            $("#lblSubTitulo").parent().show();

            $("#lblSubTitulo").text("Datos de contacto");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");

            $(".timeline.text-center").parent().removeClass("d-none");
            $("#lblSubTituloPrincipal").removeClass("mt-titulo-terminos");
            $("#form_registro").removeClass("contenedor_form_registro_w2");
            $("#form_registro").addClass("contenedor_form_registro_w1");
        });

    } else if (id == '5') {


        $('#terminos_y_condiciones').fadeOut(500, function() {
            $('#paso_2').fadeIn();
            $("#lblSubTitulo").parent().show();

            $("#lblSubTitulo").text("Datos de contacto");
            $("#lblSubTituloPrincipal").text("Registrar mis datos");

            $(".timeline.text-center").parent().removeClass("d-none");
            $("#lblSubTituloPrincipal").removeClass("mt-titulo-terminos");
            $("#form_registro").removeClass("contenedor_form_registro_w2");
            $("#form_registro").addClass("contenedor_form_registro_w1");
        });

    } else if (id == '6') {
        $('#form_registro').fadeOut(500, function() {
            $('#mensaje_sucess').fadeIn();
            $("#lblSubTitulo").parent().hide();
            $(".timeline.text-center").parent().addClass("d-none");
            $("#lblSubTituloPrincipal").parent().addClass("d-none");
        });
    }
}