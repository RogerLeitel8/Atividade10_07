let idade = Number(prompt("informe a sua Idade"));
let estudante;

if (idade > 60){
console.log("Entrada Gratis");
} 
else if(idade>0 && idade<=12){
    console.log("O valor da entrada é R$12:00 reais");
} 

else if(idade>=13 && idade<=17){
    console.log("O valor da entrada é R$15:00 reais");
}
else if(idade>=18 && idade<=59){
    
    estudante = prompt("você é Estudante?");
    estudante = estudante.toUpperCase();
    
    if(estudante === "SIM"){
        console.log("O valor da entrada é R$17,50 reais");
    }
    else{
        aposentado = prompt("você é Aposentado?");
        aposentado = aposentado.toUpperCase();
        
        if(aposentado === "SIM"){
            console.log("Entrada Gratis");
        else{
            console.log("O valor da entrada é R$35:00 reais");
        }
    }
    }
else{
   console.log('erro de digitação');     
}




