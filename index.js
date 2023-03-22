const prompt = require("prompt-sync")()

let nome = prompt("Primeiramente informe seu nome: ")
let novaConta = ''

console.log(`\nBem-vindo(a) ${nome} a central de contas! \n`)


do {

  chatBot()
  novaConta = prompt(nome + ", quer fazer uma nova conta? s/n ")

  if (novaConta == 'n' || 'N' || 'Nao' || 'Não' || 'NAO' || 'NÃO') {
    console.log("obrigado por usar nossa calculadora 😉")
    break
  }

} while (novaConta == 's' || 'S' || 'sim' || 'Sim' || 'SIM')


function chatBot() {
  let { operadorPorExtenso, operacao } = escolherOperacao()

  function escolherOperacao() {
    console.log("Qual operação deseja efetuar: ")
    console.log("\n1 - Soma \n2 - Subtração \n3 - Multiplicação \n4 - Divisão")

    let operacao = prompt("\nEscolha: ")
    let operadorPorExtenso = ''

    switch (operacao) {

      case '1':
        console.clear()
        console.log("Essa será uma conta de SOMA")
        operadorPorExtenso = 'somar com '
        break;

      case '2':
        console.clear()
        console.log("Essa será uma conta de SUBTRAÇÃO")
        operadorPorExtenso = 'subtrair de '
        break;

      case '3':
        console.clear()
        console.log("Essa será uma conta de MULTIPLICAÇÃO")
        operadorPorExtenso = 'multiplicar por '
        break;

      case '4':
        console.clear()
        console.log("Essa será uma conta de DIVISÃO")
        operadorPorExtenso = 'dividir por '
        break;

      default:
        console.log("Esse valor não é válido. Escolha entre: 1, 2, 3 ou 4")
        escolherOperacao()
        break;
    }

    return { operadorPorExtenso, operacao }
  }


  let valor1 = Number(prompt("Insira o primeiro valor: "))
  let valor2 = Number(prompt("Insira o valor que deseja " + operadorPorExtenso + valor1 + ': '))

  calcular(operacao, valor1, valor2)

  function calcular(operacao, primeiro, segundo) {

    switch (operacao) {
      case '1':
        console.log(`${primeiro} + ${segundo} = `, primeiro + segundo)
        break;

      case '2':
        console.log(`${primeiro} - ${segundo} = `, primeiro - segundo)
        break;

      case '3':
        console.log(`${primeiro} x ${segundo} = `, primeiro * segundo)
        break;

      case '4':
        console.log(`${primeiro} / ${segundo} = `, primeiro / segundo)
        break;
    }
  }
}