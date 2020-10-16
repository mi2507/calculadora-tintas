function calcula_tinta(){
    let altura = document.imcForm.altura.value;
    let largura = document.imcForm.largura.value;
    let portas = 2.4;
    let janelas = 1.52;
    let qteportas =  document.imcForm.portas.value;
    let qtejanelas =  document.imcForm.janelas.value;
    let qtemetro = 5;

    let metro = (altura * largura) * 4 ;
    let calculo = (metro - parseFloat(portas)*qteportas - parseFloat(janelas)*qtejanelas );
    let resultado = ( calculo / qtemetro ).toFixed(2)
    
    if(resultado< 2.5){
    alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 1 Lata de 2.5L");
    }
    else if(resultado>= 2.6 && resultado <3.6){
        alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 1 Lata de 3,6L");
    }
    
    else if(resultado>=3.7 && resultado<5) {
        alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 2 lata de 2.5L");
    }
    else if(resultado>=5.1 && calculo<6) {
        alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 1 lata de 2.5L + lata de 3,6L");
    }
    else if (resultado>=6.1 && calculo<7.2){
    alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 2 lata de 3,6L");
    }
    else (calculo>7.2)
    alert("você vai precisar de : " + resultado + "litros.\n" +"sugestão: 1 lata de 18L ou mais");
    }
    