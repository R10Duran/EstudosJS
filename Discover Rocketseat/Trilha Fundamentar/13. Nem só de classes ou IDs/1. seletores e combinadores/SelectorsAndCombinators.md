### Selectors and combinators

## Seletores CSS
  Conecta um elemento HTML com o CSS a fim de alterar o elemento

## Tipos de seletores
* Element selector
  - Todos os elementos HTML
* ID selector
  - Um elemento que tenha um atributo `id`
  - Cada id devera ser único
* Class selector
  - Os elementos que contenha um atributo `class`
  - Podemos ter uma ou mais classes
* Attribute selector
  - Um elemento que tenha um atributo específico
* Pseudo-class selector
  - Elementos em um estado específico

---------------------------------------------------------------------------------------------------

### Combinators
  Combinadores, pois eles trabalham para buscar e combinar seletores a fim de aplicar uma estilização

## Descendant combinator
* Identificado por um espaço entre seletores
* Busca um elemento dentro de outro

``` Css
body article h2
```
---------------------------------------------------------------------------------------------------

## Child combinator
* Identificado pelo sinal ` > ` entre dois seletores
* Seleciona somente o elemento que é filho direito do pai
* Elementos depois do filho direto serão desconsiderados

``` Css
body > ul > li
```

---------------------------------------------------------------------------------------------------

## Adjacent sibling combinator
* Identificado pelo sinal ` + ` entre dois seletores
* Seleciona somente o elemento do lado direito que é irmão direito na hierarquia

``` Css
h1 + p
```

---------------------------------------------------------------------------------------------------

## General sibling combinator
* Identificado pelo sinal ` ~ ` entre dois seletores
* Seleciona todos os elementos irmãos

``` Css
h1 ~ p
```

---------------------------------------------------------------------------------------------------

## Utilizando combinadores

``` Css
ul > li[class="red"]
```

---------------------------------------------------------------------------------------------------

## Dica
* Seletores muito específicos tendem a causar dificuldades no reuso das regras de estilização dos elementos
* Muitas vezes, um simples uso de classes, torna o trabalho muito mais eficiente.








