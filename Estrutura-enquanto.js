/*
   nome: caractere
   idade, limite, contador: inteiro

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreva ("Digite a quantidade de vezes que vai ser verificada a Idade: ")
   leia(limite)
   
   contador := 0
   
   enquanto contador < limite faca
            escreva ("Digite o nome da pessoa: ")
            leia (nome)
            escreva ("Digite a idade do ", nome, ": ")
            leia (idade)
            se idade > 18 entao
               escreval (nome, " Você é MAIOR de idade!")
            senao
               escreval (nome, " Você é MENOR de idade!")
            fimse
            contador := contador +1
   fimenquanto
*/
function acaoBotao() {
    var nome, idade, limite, contador
    limite = prompt("Digite a quantidade de vezes que vai ser verificada a Idade: ")

    contador = 0

    while(contador < limite){
        nome = prompt("Digite o nome da pessoa: ")
        idade = prompt("Digite a idade do " + nome)
        if( idade > 18 )
            document.getElementById("paragrafo").innerText = nome + " Você é MAIOR de idade! "
        else
            document.getElementById("paragrafo").innerText = nome + " Você é MENOR de idade! " 
        contador++     
    }
}