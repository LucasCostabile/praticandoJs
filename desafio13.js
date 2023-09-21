// Sabendo que o fuso horario da frança em relação ao Brasil é de +5 horas
// Elabore um programa que leia a hora no Brasil e informe a hora na França 


let horaBrasil = 22;
let minutos = 15;
let horaFranca = horaBrasil + 5;

if(horaFranca > 24){
    horaFranca = horaFranca - 24
}

console.log(`No Brasil são ${horaBrasil}:${minutos} , e na França são ${horaFranca}:${minutos}.`)