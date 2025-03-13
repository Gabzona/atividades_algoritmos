//gerar 8 números aleatórios
//adicionar o 0001 ao final dos 8 dígitos
//para gerar o 13, multiplico pela array 543298765432, somo tudo, pego o resto da divisão e verifico se é
//menor q dois


function gerarCNPJ () {
    let numero_base = Math.floor(Math.random() * 100000000)
    numero_base = numero_base.toString() + "0001"
    let array_base = numero_base.split('')


    let array_multiplicacao = [5,4,3,2,9,8,7,6,5,4,3,2]
    let soma = 0;


    for(let i = 0; i<array_base.length; i++){
        soma += array_base[i] * array_multiplicacao[i]
    }


    let resto = soma % 11;
    let digito1 = 0;


    if(resto < 2){
        digito1 = 0
    }else{
        digito1 = 11 - resto
    }
    console.log(digito1)
}

gerarCNPJ()