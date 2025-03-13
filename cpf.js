//criar variavel pro cpf
//verificar se a variavel tem 11 digitos
//separar cada numero do cpf em um item do array (replace, split)
//criar uma variavel camada somatorio
//criar loop para multiplicar os digitos do CPF e somar na variavel somatorio
//calcular o resto da divisão por 11 da variavel somatorio
//criar um condicional para verificar se o digito é válido


let cpf = "09936133900";
let array = cpf.split('')
let somatorio1 = 0;
let somatorio2 = 0;


console.log(array)


if(array.length != 11 ){
    console.log("Não tem 11 dígitos.")
}else{
    for(i = 0, i>9; i++;){
        somatorio1 = somatorio1 + (array[i]*(10-i))
    }
    for(i = 0, i>9; i++;){
        somatorio2 = somatorio2 + (array[i]*(11-i))
    }
    somatorio1 = somatorio1 % 2
    somatorio2 = somatorio2 % 2


    if(somatorio1<2 && array[9] == 0){
        somatorio1 = true
    }else if (somatorio1 >=2 && array[9] ==1){
        somatorio1 = true
    }else{
        console.log("Este cpf é falso.")
        return
    }


    if(somatorio2<2 && array[10] == 0){
        somatorio1 = true
    }else if (somatorio2 >=2 && array[10] ==1){
        somatorio1 = true
    }else{
        console.log("Este cpf é falso.")
        return
    }


    if((somatorio1 = true) && (somatorio2 = true)){
        console.log("Este cpf é verdadeiro.")
        return
    }
}
