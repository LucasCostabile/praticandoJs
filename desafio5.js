// Exercício Hackerrank - criar uma função que faça a soma dos numeros dentro de um array

function simpleArraySum(ar){
    let soma = 0;
    for( let index = 0; index < ar.length; index++) {
        soma = soma + ar[index];
    }
    return soma;
}


console.log(simpleArraySum([1,2,3]));
