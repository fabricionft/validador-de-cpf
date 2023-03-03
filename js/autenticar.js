function validar(){
    const resposta = $('#respostaValidacao');
    if($('#cpf').val().length == 11) {
        if(validarCPF($('#cpf').val())) resposta.html('O CPF digitado é valido!!');
        else resposta.html('O CPF digitado não é valido!!');
    }
    else resposta.html('Digite O CPF completo!!')
}

function validarCPF(cpf){
    const digitoJ = gerarDigitoVerificador(cpf, 10);
    const digitoK = gerarDigitoVerificador(cpf, 11);

    if(digitoJ == cpf.substring(9, 10) && digitoK == cpf.substring(10,11)) return true;
    else return false;
}

function gerarDigitoVerificador(cpf, maximo){
    let somaDigitos = 0;
    let inicio = 0;
    let fim = 1;
    for(var i = maximo; i >= 2; i--){
        somaDigitos += cpf.substring(inicio, fim) * i;
        inicio++;
        fim++;
    }
    if((11 - (somaDigitos % 11)) >= 10) return 0;
    else return (11 - (somaDigitos % 11));
}

$(document).ready(function() {
    $("#cpf").keyup(function() {
        $("#cpf").val(this.value.match(/[0-9]*/));
    });
});