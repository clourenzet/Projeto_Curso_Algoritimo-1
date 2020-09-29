

  var nome, nota01, nota02, passou;

  passou = false;

  nome = prompt("Digite o nome do Aluno:")
  nota01 = prompt("Digite a nota 01 do Aluno:")
  nota02 = prompt("Digite a nota 02 do Aluno:")

  media = (parseInt(nota01) + parseInt(nota02)) / 2;

  if (media >= 50)
      passou = true;
   
if (passou && (media >= 50 && media <=70))
    alert("APROVADO ... " + nome)
else
 alert("REPROVADO ... " + nome)