### Operadores relacionais

## Operador =, igual
operador relacional igual (=)
SELECT * FROM aluno WHERE cpf = 12345678945 --> traga todos dados da tabela aluno de quem contenha o cpf igual ao número 
O operador igual somente funciona com campos que são do tipo number, não funciona com texto

## Operador LIKE 
operador relacional LIKE
SELECT * FROM aluno WHERE nome LIKE "Robert" 
Operador LIKE vai fazer o que o igual faz, porém para quando os dados forem de texto, por isso também deve ficar em aspas a procura
"%" --> porcentagem usado para filtrar, por exemplo se estiver sem a porcentagem deve ser exatamente o que estiver escrito, caso use ela antes de escrever significa que pode ter todos não importa como inice mas que tenham tal condição, e quando esta no final significa que tal condição deve iniciar exatamente com o caractere informado, mas pode terminar com qualquer outro

## >, maior que
SELECT * FROM aluno WHERE matricula > 2
vai selecionar todos os da tabela aluno que tem a matricula maior que 2

## <, menor que
SELECT * FROM aluno WHERE matricula < 2
vai selecionar todos os da tabela aluno que tem a matricula menor que 2

## >=, maior igual 
SELECT * FROM aluno WHERE matricula >= 2
vai selecionar todos os da tabela aluno que tem a matricula maior ou igual a 2

## <=, menor igual
SELECT * FROM aluno WHERE matricula <= 2
vai selecionar todos os da tabela aluno que tem a matricula menor ou igual a 2

## <>, não igual a
SELECT * FROM aluno WHERE matricula <> 1
vai trazer todos os alunos cuja matricula não é igual a 1

## !=, diferente de
SELECT * FROM aluno WHERE matricula != 3
Seleciona todos os alunos em que a matricula seja diferente de 3 