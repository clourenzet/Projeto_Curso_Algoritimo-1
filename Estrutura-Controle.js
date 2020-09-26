/*
  leia (nome)
   escreval ("Digite a nota 01 do aluno :")
   leia(nota01)
   escreval ("Digite a nota 02 do aluno :")
   leia(nota02)
   media := (nota01 + nota02) / 2
   
   se media >= 50 entao
      escreval ("APROVADO ", nome)
   senao
      escreval ("REPROVADO ", nome)
   fimse
   */

   var nome, nota01, nota02;
   nome = prompt("Digite o nome do Aluno:")
   nota01 = prompt("Digite a nota 01 do Aluno:")
   nota02 = prompt("Digite a nota 02 do Aluno:")

   media = (parseInt(nota01) + parseInt(nota02)) / 2;

   if (media >= 50){
       alert("APROVADO ... " + nome)
   }
   else
    alert("REPROVADO ... " + nome)

  

