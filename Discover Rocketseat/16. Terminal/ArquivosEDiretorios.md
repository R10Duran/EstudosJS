### Informando o diretório atual
  * pwd
    * mostrar o diretório atual

--------------------------------------------------------------------------------
### cd
## Navegando pelas pastas
Change Directory (mudar de diretório)
  * mudar de diretório --> cd diretório desejado
  * diretório atual --> cd . 
  * voltar diretórios --> cd ..
  * voltar de onde veio --> cd -

### espaços nos nomes de diretórios
* \ --> cd diretorio \ com\ espaços --> barra invertida significa que tem espaço no nome do diretório e ele tem que contar como nome no diretório
* " " --> cd "diretorio com espaços/" --> caso tenha espaços, conforme exemplo acima, também podemos usar aspas para definir o diretório
--------------------------------------------------------------------------------

### ls
## Listando arquivos e pastas
Lista arquivos --> ls --> nome dos arquivos dentro da pasta em que se encontra
  * ls -l --> mais informações
  * ls -a --> all
  * ls -h --> human
  * ls -R --> recursive
  * ls -S --> ordenar pelo tamanho

--------------------------------------------------------------------------------
### Obtendo informações dos arquivos

### file
* file nomeDoArquivo.png
  * tipo do arquivo
  * informações
### stat
* stat nomeDoArquivo.png
  * dono
  * modificações
  * tamanho

--------------------------------------------------------------------------------
### criando diretórios com mkdir

## mkdir
* mkdir nomeDoDiretorio
* -p --> para fazer multiplos diretórios

Ex.: mkdir site (criar diretório)
mkdir -p site2/src site2/assets (criar multiplos diretórios)

--------------------------------------------------------------------------------

### criando arquivos com touch

## touch
* alterar registro de data e hora de arquivos ou pastas
* criar um ou mais arquivos

Ex.: touch .gitignore README.md --> (estou criando um arquivo)
touch file1.txt file2.txt site6 --> (criando vários arquivos)

--------------------------------------------------------------------------------

### copiando arquivos e pastas

## cp
* copiar
  * -r --> permite usar o copy no diretório, o -r significa recursivo

Ex.: cp -r site site1 site2 site3 sites --> (o site, site1, 2 e 3 foram copiados dentro da pasta sites, o ultimo diretório sempre é o diretórios que vai receber os arquivos/diretórios copiados)

--------------------------------------------------------------------------------

### movendo e renomeando arquivos ou pastas

## mv
* mover (renomear)
* mv arquivo.txt site --> (nesse exemplo estou movendo o artivo.txt para dentro da pasta(diretório) site)
* para mover mais arquivos é só ir dando espaço nos arquivos como nos exemplos anteriores, sendo o ultimo diretório o caminho para onde irão os arquivos

*mv serve também para renomear o arquivo, por exemplo:
mv file.txt arquivo.txt --> (estou renomeando o file.txt para arquivo.txt)

--------------------------------------------------------------------------------

### removendo arquivos ou pastas

## rm
*remover (para sempre)
  * -r --> (quando não puder remover diretório é só forçar com o recursivo -r que dará para apagar o diretório)
  * -f --> (-f significa forçar, irá remover a força, podendo mesclar junto ao r, ficando --> rm -rf site1)

rm site.txt --> estou removendo o file.txt para sempre, não tem como voltar mais

--------------------------------------------------------------------------------

### wildcard (curinga)
* * --> asterístico --> mv sites/si* sites2 --> (vai mover tudo o que tiver si no inicio dentro da pasta sites movendo para sites2)
* ? --> interrogação --> mv sites/site? sites2 --> (vai mover tudo o que tiver 1 (site+1caracter) caractere depois do site)

* --> 1 ou mais caracter
? --> 1 caracter

--------------------------------------------------------------------------------

### encontrar arquivos ou pastas com find
* Encontrar arquivos ou diretórios

## find <path> arg [expression] (encontre nesse diretório, com esses argumentos, alguma coisa- expression)
  * -type <d|f> (f --> file OR d --> diretorio)
  * -name
  * -iname (não vai distinguir letras minusculas das maiusculas)

find . -type f -name "*./mp4" --> aqui está procurando todos os arquivos que contém .mp4 no diretório atual

--------------------------------------------------------------------------------

### ver conteúdo de arquivos
  * less
  * cat

less arquivo.txt --> vemos o conteúdo que tem dentro do arquivo
cat arquivo.txt --> vai printar na tela o conteúdo do arquivo

--------------------------------------------------------------------------------

### editar arquivos
  * nano
  * vim

** nano arquivo.txt --> vai abrir como um editor de texto padrão, nele podemos editar, não podemos usar mouse, mas ai é só usar as setas do teclado para movimentar, dentro do nano tem os comandos que podemos usar, para salvar, renomear etc.

** vim arquivo.txt --> vai abrir um editor de texto também, porém diferente do nano ele demanda algumas pré-operações para poder editar. 
  --> para começar a editar precisamos digitar A, para sair do modo insert precisamos digitar esc assim ele sai do modo insert, 
  para sair do vim é necessário dar :q (dois pontos q), se tiver feito alteração ele vai perguntar se quer sair sem salvar ou se quer salvar, ai precisamos sair com :wq (whrite quit--> se vai sair e incluir a edição) ou :q! (se vai sair e cancelar a edição)