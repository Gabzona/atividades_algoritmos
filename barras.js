let codigo = "1234567890123";
let array = codigo.split('');
let soma = 0;


for(i = 0, i>12; i++;){
    if(array[i] % 2 == 0){
        array[i]*3
    }
    soma = soma + array[i]
}


if((soma % 10 == 0) && array[12] == soma % 10){
    soma = true
    console.log("código de barras válido.")
    return
}else{
    soma = false
    console.log("código de barras inválido.")
    return
}