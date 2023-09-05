//(Estações do ano) Faça um sistema que receba um mês e informe a qual estação esse mês pertence.

function determinarEstacao(mes) {
    // Converter o mês para minúsculas para evitar erros.
    mes = mes.toLowerCase();

    // Verificar o mês e determinar a estação correspondente
    switch (mes) {
        case 'janeiro':
        case 'fevereiro':
        case 'março':
            return 'Verão';

        case 'abril':
        case 'maio':
        case 'junho':
            return 'Outono';

        case 'julho':
        case 'agosto':
        case 'setembro':
            return 'Inverno';

        case 'outubro':
        case 'novembro':
        case 'dezembro':
            return 'Primavera';

        default:
            return 'Mês inválido';
    }
}


let mesDigitado = prompt('Digite o nome do mês:');
let estacao = determinarEstacao(mesDigitado);

if (estacao === 'Mês inválido') {
    console.log('Mês inválido. Verifique a ortografia ou use nomes de meses válidos.');
} else {
    console.log('O mês de ' + mesDigitado + ' pertence à estação ' + estacao + '.');
}
