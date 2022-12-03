### Mais comandos

## INSERT INTO
INSERT INTO aluno(nome,cpf,responsavel) --> insira na tabela aluno os dados informados no parenteses
INSERT INTO aluno(nome,cpf,responsavel) VALUES ("Robert", 12345678945, "Carlos") --> inserindo valores as respectivas informações

## UPDATE
UPDATE aluno SET nome="Robert Duran", responsavel="Luiza" --> Atualizar informação de um campo já existente na tabela
UPDATE aluno SET nome="Robert Duran", responsavel="Luiza" HHERE matricula = 2 --> vai verificar o aluno com matricula 2 e altera as informações que você selecionou, ou seja, altera O nome e o responsavel.

## DELETE
DELETE FROM aluno WHERE matricula = 3 --> vai deletar do banco o aluno cuja matricula é igual a 3
### Importante, nunca fazer delete sem WHERE