$(document).ready(function() {
    function trocarImagem() {
        let indiceAtual = 0;
        const imagens = [
            "src/Assets/images/vermelho.png",
            "src/Assets/images/amarelo.png",
            "src/Assets/images/verde.png"
        ];

        return function() {
            $('#img').attr("src", imagens[indiceAtual]);
            indiceAtual = (indiceAtual + 1) % imagens.length;
        };
    }

    const trocarImagemHandler = trocarImagem();

    $("#red").click(function() {
        $('#img').attr("src", "src/Assets/images/vermelho.png");
    });

    $("#yellow").click(function() {
        $('#img').attr("src", "src/Assets/images/amarelo.png");
    });

    $("#green").click(function() {
        $('#img').attr("src", "src/Assets/images/verde.png");
    });

    $("#auto").click(function() {
        setInterval(trocarImagemHandler, 5000);
    });

    $("#off").click(function() {
        $('#img').attr("src", "src/Assets/images/desligado.png");
    });
});