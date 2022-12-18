### Operadores lógicos

## AND
SELECT * FROM aluno WHERE nome like "J%" AND matricula < 2
--> selecione todos da tabela aluno em que o nome inicie com J e a matricula seja menor que 2

## OR
Sehue as regras as cima com suas devidas condições de OR, pode trazer todos que tenham um ou outro dado determinado ou os dois

## BETWEEN e NOT BETWEEN
SELECT * FROM funcionario
WHERE id_funcionario BETWEEN 4 and 7
between --> representa o entre, ou seja, busque os funcionários com id entre 4 e 7, ou também poderia ser not between, ele iria ignorar todos que estejam no intervalo informado, vindo todos que est~]ao fora do intervalo selecionado

## IN e NOT IN
SELECT * FROM funcionarios WHERE id_departamento IN (1,2,5)
IN --> que contem, ou seja, traga todos da tabela funcionario que contenham no id_departamento os números 1,2,5, nesse exemplo.
e o NOT IN --> todos os que não contém os detalhes informados

## IS NULL e IS NOT NULL
IS NULL --> significa que é vazio, ou seja, que não tem nada informado, campo não preenchido
SELECT * FROM funcionarios WHERE id_departamento IS NULL
 O IS significa é, ou seja é NULL.