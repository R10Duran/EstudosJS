### POO (Programação Orientada a Objetos)
  * Oriented Object Programming ou OOP
  * Um paradigma de desenvolvimento
  * Uma maneira de resolver um problema, um modo de pensar
  * Não está ligado somente à linguagem de programação, mas a um entendimento amplo e atemporal para criação de softwares

### Utilização no mercado
  * Na maioria dos sistemas atuais
  * Várias linguagens (JS, TS, Java< Python ...)
  * Utilizado poor analistas de sistemas e não somente por programadores
    * Na fase de levantamento de requisitos de sistemas
    * Via gráficos, desenhos e textos

### Onde e quando utilizar
  * Linguagens
  * Quando quiser aplicações Padrões de projetos
  * Quando quiser organizar seu código
  * Para melhor entendimento do código, pensando nele como Objetos
  * Quando precisar fazer reuso de código
  * Para separar a complexidade de código, abstrair código e expor de maneira mais simples
  * Para classificar as rotinas e trechos de código

### Por que conceitos são importantes
  * Precisamos entender os conceitos e paradigma e não somente códigos
  * Uma boa fundamentação
  * Importante, anotar os pontos e sempre estar revisando

--------------------------------------------------------------------------------------------------------------

### Objetos
  * Todo objeto possui:
    * Propriedades e funcionalidades
    * Estado e Comportamentos
    * Atributos e Métodos

--------------------------------------------------------------------------------------------------------------

### Objetos Abstratos vs Mundo Real
  * Trazemos a representação de algo do mundo real para Objetos
    * Pessoa
    * Aluno
    * Produto
    * Carrinho de compras
  
  * Porém, alguns objetos na programação não são fáceis de identificar, pois são abstratos como, por exemplo:
    * Autenticação (login etc...)
    * Autorização (adm, user etc...)

--------------------------------------------------------------------------------------------------------------

### Classes
  As Classes na orientação a objetos funcionam como um molde para os objetos. Os objetos são criados a partir de uma classe e muitos deles podem ser feitos da mesma classe.
    * Exemplo: Máquina de biscoito (Uma só maquina consegue produzir vários biscoitos, essa é a ideia da classe)
      * Instâncias
     
--------------------------------------------------------------------------------------------------------------
### Classes em Javascript
  * Syntactical sugar
  * Prototype (classes herdam as caracteristicas dos seus pais, ex.: se for number herda características de number, se for string, da mesma forma)

--------------------------------------------------------------------------------------------------------------

### Encapsulamento
  * Dirigir carro vs conhecer o motor do carro (por exemplo, há muito no motor do carro que está encapsulado, enscondido das outras classes)
  * Colocar numa cápsula
  * Agrupamento de funções e variáveis
  * Esconder detalhes de implementação
  * Camada de segurança para os atributos e métodos (ela vai proteger os métodos e atributos)

--------------------------------------------------------------------------------------------------------------

### Confusão e solução (Programação Estruturada vs Orientada a Objetos)

## Programação Estruturada
  * Processa a entrada e manipulação dos dados, até a saída
  * Uso de sequências, estruturas de repetição e condições
  * Uso de uma rotina maior, ou sub-rotinas
  * Não existem restrições às variáveis

## Programação Orientada a Objetos
  * Surge para trazer um cuidado ao uso estruturado
    * Não elimina por completo o uso estruturado
  * Conceitos como Objetos e Classes
  * Cuidados com variáveis e rotinas (Encapsulamento)
  * Melhor reuso de código (Herança)

--------------------------------------------------------------------------------------------------------------

### Herança
  * Pais e filhos (filhos herdam caracteristicas bases do pai)
  * Objetos podem herdar, ou estender, características bases
  * Uma cópia de atributos e métodos de outra classe

--------------------------------------------------------------------------------------------------------------

### Polimorfismo
  * Quando um objeto estende de outro (herança) talvez haja a necessidade de reescrever uma ou mais características (atributos e métodos) nesse novo objeto.
  * Recriamos então um método (ou mais) da classe herdada
  * Polimorfismo significa muitas formas.
    * Ex.: Voar, um pato pode voar, mas não voa igual um passaro, por exemplo, mudamos então o método voar do Pato e mudamos o método voar do passarinho, podemos fazer essas alterações, gerando várias formas de voo, uma classe herda de outra e podemos alterar dados se for necessario

--------------------------------------------------------------------------------------------------------------

### Abstração
  * Template ou identidade de uma classe que será construída no futuro
    * Atributos e métodos podem ser criados na classe de abstração (Superclasse) MAS
    * A implementação dos métodos e atributos, só poderá ser feita na classe que irá herdar essa Abstração