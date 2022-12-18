### Pseudo-classes

É um tipo de seletor que irá selecionar um elemento que estiver em um estado específico.

Exemplo: é o primeiro elemento dentro de uma caixa, ou, o elemento está com o ponteiro do mouse em cima dele.

Pseudo-classes começam com 2 pontos seguido do nome da pseudo classe ``:pseudo-class-name`

## Selecionando elementos com pseudo-classes

- :first-child --> aplique apenas no primeiro filho
- :nth-of-type(2 por exemplo) --> dos tipos informados pegue apenas tal número desejado para que aplique o css
- :nth-child(2 por exemplo) --> dos filhos selecionados informe o número que deseja aplicar o css
- :nth-child(odd/even) --> dos filhos da classe selecionada, aplique o css nos números impares(odd) ou pares(even)

## Ações do usuário

- :hover --> aplique caso o mouse passe por cima
- :focus --> aplique ao ser clicado, deixado em foco

## Atributos

- :disabled --> enquanto o conteúdo estiver desabilitado aplique tal css
- :required --> quando o atributo for obrigatório, aplique tal css

## Referência

https://developer.mozila.org/en-US/docs/Web/CSS/Pseudo-classes
