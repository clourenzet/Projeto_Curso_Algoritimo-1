
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