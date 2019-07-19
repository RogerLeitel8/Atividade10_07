idade = Number (prompt("Informe a sua idade"));
if(idade >=25 && idade<=60){
    salario = Number(prompt("Informe o seu Salário"));
    if(salario >=2000){
        valor = Number(prompt("Informe o valor Desejado"));
        if(valor <= salario *10){
            console.log("Empréstimo Aprovado");
        }
        else{
            console.log("empréstimo negado por causa do valor pedido");
        } 
        }   
    else{
        console.log("empréstimo negado por causa do salário");
    }
}
else{
    console.log("empréstimo negado por causa da sua idade");
}

