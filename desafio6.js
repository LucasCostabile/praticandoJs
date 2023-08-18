//Exercício HackerRank 

// faça a comparação do array da Alice e array do Bob
// compare a posição do array da Alice x Bob
// ao comparar cada posição, quem tiver o numero maior, ganha 1 ponto 
// se forem iguais, ninguém pontua
// mostre a quantidade de pontos de cada um


function compararArray(ar1, ar2) {
    let alice = 0;
    let bob = 0;
    for (let index = 0; index < ar1.length; index++) {
        if (ar1[index] > ar2[index]) {
            alice++;
        } else if (ar1[index] < ar2[index]) {
            bob++;
        }

    };
    return [alice, bob];
}

console.log(compararArray([17, 28, 30], [99, 16, 8]));