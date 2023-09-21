// Desenvolva um algoritmo que recebe todas as suas contas do mês, faça a soma dos valores e diminua do seu salário.
// Como saída mostre o salario, o total de gastos e o quanto irá sobrar no final do mês .

let gastos = {
    'celular': 60,
    'cartão': 675,
    'gas': 150,
};

const salario = 3500;

const total = Object.values(gastos).reduce((a, b) => a + b)

console.log(
`Salario:R$ ${salario} 
Total de gastos: R$ ${total}
Restante: R${salario - total}`);