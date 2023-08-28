// HackerRank - caça ao rato
// Criar uma função que receba os valores, onde será comparado qual dos gatos estará mais proximo do valor do rato
// se os valores empatarem, o rato ganha 


function caçaRato(x, y, z){
 let gatoA = x;
 let gatoB = y;
 let rato = z;

    if((Math.abs(rato - gatoA) < (Math.abs(rato - gatoB)))){
        return 'Gato A ganhou';
    }else if((Math.abs(rato - gatoA) === (Math.abs(rato - gatoB)))){
        return 'Rato ganhou';
    }else {
        return 'Gato B ganhou';
    }
}

console.log(caçaRato(1,3,2));