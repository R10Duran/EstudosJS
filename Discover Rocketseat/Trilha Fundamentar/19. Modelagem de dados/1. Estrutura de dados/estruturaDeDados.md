### Por que estruturar dados:
  - Organizar os dados da aplicação
  - Entender estruturas para melhor tomada de decisão
  - Escrever melhores algoritmos
  - Eficiência
  - Algumas empresas usam como requisito

### Alguns desafios diários de uso de dados:
  - Entendimento de como estão nossos dados na aplicação
  - Criar listas (ordenadas e não ordenadas)
  - Repetição ou não dos dados da estrutura
  - Organizar os dados pelo par identificador + valor

### O que é uma estrutura de dados?
  - Uma maneira de organizar e ordenar informações como textos, números, booleanos, etc e registrá-los na memória do computador

  - Organizar dados (informações)
    - Textos, números, booleanos ...
  - Como estão regitrados na memória

  // Array
  [1,2,3] // elementos 1, 2, 3

  // Object
  {name: 'Robert', idade:22} //elementos: nome e idade

### Gerenciando dados
  - Estrutura de dados tem a ver com a gestão das informações da aplicação

  - Para esse gerenciamento, podemos dividir em 3 etapas:
    1. Modelar a estrutura
    2. Dar vida à estrutura (instanciar essa estrutura)
    3. Criar as funcionalidades dessa estrutura
      - Exemplo: inserir, excluir, buscar, exibir, contar ...


### Arrays
  Array, vetor ou arrajo, é uma estrutura amplamente utilizada e implementada em quase todas as linguagens de programação
  Uma das estruturas mais básicas, simples de criar e utilizar.

  ['a',10,'d'true] // total 4 elementos
  // 0  1  2  3  //contagem se incia a partir do index 0
  
  Caracteristicas:
    * Acesso pelo index
    * Respeita a ordem de inserção dos elementos
    * Aceita valores duplicados
    * Dependendo do tamanho do array, para encontrar e/ou deletar um elemento, será necessário um uso maior de performance
    * São dinâmicos
    * Você poderá ter dados de diferentes tipos misturados dentro de um array. Strings. numbers, booleans, objetos, funções e até outros arrays
    * Existem muitos métodos já implementados
      * push(), pop(), find(), filter() entre outros

### Matriz 
  Matriz ou vetor multidimensional (array dentro de outro array)
  - Significa que é um Array, dentro de outro array. Poderemos ter muitos níveis

### Stack
  Tradução de Stack é pilha
  Como uma pilha de livros

    * linear, um após o outro
    * o último a entrar na pilha é o primeiro a sair
    * LIFO: Last In First Out
      * O ultimo elemento a entrar na pilha, aquele elemento do topo da pilha, é o primeiro a sair

### Stack no código 
  ## push(): adicionar um elemento à pilha
  ## pop(): remover o elemento do topo da pilha
  ## peek(): obter o elemento do topo da pilha

  Outros métodos poderão ser implementados como size() para mostrar o tamnho da pilha


### Queue
  Tradução de Queue é fila.

  Como uma fila em uma loja ou restaurante

    * Linear
    * O primeiro a entrar na fila é o primeiro a sair

    Conceito:
      * FIFO: First In First Out
        * O primeiro a entrar na fila, é o primeiro a sair dela
      * Front (frente) é a referencia do primeiro elemento a entrar na fila
      * Back (fundo) é a referência do último elemento a entrar na fila

        * Enqueue --> entrando na fila
        * Dequeue --> saindo da fila
    
### Queue no código
  ## Métodos fundamentais
  ## enqueue(): adicionar um elemento ao final da fila
  ## dequeue(): remover o primeiro elemento a entrar na fila

  Outros métodos poderão ser implementados como size() para mostrar o tamnho da fila ou front() para pegar o primeiro elemento da fila, dentre tantos outros

### Visão geral
  * Usamos Estrutura de Dados para gerenciar os dados, as informações da nossa aplicação
  * Organizar, ordenar, buscar, são algumas funcionalidades básicas
  * Melhorar a escrita de algoritmos
  * Melhorar a eficiência dos nossos aplicativos
  * Existem muitas estruturas a serem estudadas

