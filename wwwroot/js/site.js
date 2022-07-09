// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(function () {
    $('[data-toggle="tooltip"]').tooltip ()
});

//MODAL
$('#meuModal').on('shown.bs.modal', function ()
{
    $('#meuInput').trigger('focus')
});

function cadastrar()
{
    let parametros = {
        Nome: $("#nome").val(),
        Email: $("#email").val(),
        Mensagem: $("#mensagem").val(),
    }

    $.post("Home/Cadastrar", parametros)

    .done(
        function(retorno)
        {
           if(retorno.status=="Ok")
           {
            $("#contato").after("<h3>Envio realizado</h3>");
            $("#contato").hide();
           }
           else
           {
               $("#contato").after("<h3>"+retorno.mensagem+"</h3>");
           }
        }
    )
    .fail(
        function()
        {
            alert("Ocorreu um erro!");
        }
    )
}


$(document).ready(function()
{
    $("#frmcadastro").submit(
        function(e)
        {
            e.preventDefault();
            cadastrar();
        }
    );
}

);