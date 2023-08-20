// Hacker Rank- Calcular a soma  do valor absoluto das diagonais da matriz que estão no console.
// no final faça a diferença entre elas


function somaDiagonal(arr) {
    let leftDiagonal = 0
    let rightDiagonal = 0

    for(let index = 0; index < arr.length; index++){
        leftDiagonal += arr[index][index];
        rightDiagonal += arr[index][arr.length - 1 - index];
    }
    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(somaDiagonal([
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]]));