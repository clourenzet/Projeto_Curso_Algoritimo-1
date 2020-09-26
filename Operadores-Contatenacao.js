/*
Var
// Seção de Declarações das variáveis 
   nome: caractere
   numero: real

Inicio
// Seção de Comandos, procedimento, funções, operadores, etc... 
   escreval ("-Digite o Nome :")
   leia(nome)
   escreval ("-Digite o Numero :")
   leia(numero)
   
   escreval (nome, " : ", numero)
   
   

Fimalgoritmo
*/

var nome, numero;

nome = prompt(" Digite o seu Nome :")
numero = prompt(" Digite o seu Numero :")

document.getElementById("paragrafo").innerText = nome + " : " + numero 

