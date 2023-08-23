//exercício 8
//hackerRank - Stair case
// criar uma função onde consiga imprir um numero no formato escada 
//      #
//     ##
//    ### 
//   ####
//  #####



function escada(n){
    let symbol = '#';
    let inputLine = '';
    let inputPosition = n -1;

    for( let lineIndex = 0; lineIndex < n; lineIndex ++){
        for(let columnIndex = 0; columnIndex < n; columnIndex ++){
            if(columnIndex < inputPosition){
                inputLine += ' ';
            } else{
                inputLine += symbol;
            }
        }

        console.log(inputLine);
        inputLine = '';
        inputPosition -= 1;
    }
}

escada(8);