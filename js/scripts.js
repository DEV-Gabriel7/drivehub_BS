$(document).ready(function () {
    $("#btnCatalogo").on("click", function() {
        btnCatalogo.style.display = "none";
    })

    $("#telefone").mask('(00) 0 0000-0000');

    $("form").validate ({
        rules: {
            nome: {
                required:true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required:true,
                minlength: 11
            },
            mensagem: {
                required: true,
            }
        },
        messages: {
            nome: {
                required: "O nome é obrigatório!",
                minlength: "O nome deve conter ao menos 3 letras."
            },
            email: {
                required: "O E-mail é obrigatório!",
                email: "Digite um e-mail válido!"
            },
            telefone: {
                required: "O telefone é obrigatório!",
                minlength: "Digite um telefone válido!"
            },
            mensagem: {
                required: "Digite sua mensagem!"
            }
        }
    })
})