// desenvolva um algoritmo para calcular o peso ideal de uma pessoa
// o peso ideal de um adulto pode ser calculador a partir das formulas:
// 22 * altura² (para homens)
// 21 * altura² (para mulheres)


let altura = 1.55;
let sexo = "feminino";
let pesoIdeal = 0;

if(sexo === "masculino"){
    pesoIdeal = 22 * Math.pow(altura,2)
}else {
    pesoIdeal = 21 * Math.pow(altura,2)
}

console.log(`seu peso ideal é ${pesoIdeal.toFixed(3)} Kg`);