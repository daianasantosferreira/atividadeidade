function verificarIdade() {

    var idade = parseInt(document.getElementById("Idade_Atual").value);

    var nome = document.getElementById("nome").value

    if (nome >= 0) {

        console.log("replace");
        document.getElementById("nome").value = "incorreto";

    }

    if (idade <= 11) {
        document.getElementById("resultado").innerHTML = nome + " Você é uma criança, o que você está fazendo na internet??";

    }

    else if (idade >= 12 && idade <= 20) {
        document.getElementById("resultado").innerHTML = nome + " Você é um Adolescente, tenha cuidade com o que você faz na internet";

    }

    else if (idade >= 21 && idade <= 65) {
        document.getElementById("resultado").innerHTML = nome + " Parabéns você pode se considerar um adulto, tenha cuidado com o que você irá colocar na internet";

    }

    else if (idade >= 65 && idade <= 20000) {
        document.getElementById("resultado").innerHTML = nome + " Você pode se considerar um velinho então cuide bem da sua saúde e aproveite bem o resto da sua vida pois você não sabe quando irá morrer";
    }

}

