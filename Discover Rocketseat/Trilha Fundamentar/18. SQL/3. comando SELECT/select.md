### SELECT
Busca informações e mostra a inforção desejada

SELECT * --> * representa todas

SELECT * FROM --> FROM representa de onde as informações vão vir "de onde"

SELECT * FROM NOME_DA_TABELA --> mostre todas informações da tabela NOME_DA_TABELA

### SELECT Especificando campos 
SELECT nome,responsavel FROM aluno --> traga apenas os campos nome e responsavel da tabela aluno

### SELECT com WHERE
SELECT * FROM aluno
WHERE matricula = 1 --> where é a condição, traga todos da tabela aluno em que a matricula seja igual a 1, filtrando assim os dados

SELECT * FROM aluno
WHERE nome like "J%"  --> ao invés de usar o =, usamos o like, para representar parecido etc, e o "J%" siginifica que é para procurar todos que começam com J não importando o restante dos caracteres

Outro exemplo usando a "%", quando usamos "%G%" --> ele vai trazer todos que tem a letra G, não importando se tem no começo ou fim 

