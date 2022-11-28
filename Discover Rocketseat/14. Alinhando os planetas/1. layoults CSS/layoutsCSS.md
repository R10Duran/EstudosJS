### Layouts e evolução

Layout tem a ver com a maneira que os elementos estão distribuidos na tela

## Normal flow

Ou Flow Layout é a maneira que os elementos `block` e `inline` ficam na página

<p>Texto block com <strong> inline </strong> dentro</p>

## Tables

É a maneira de tabelas onde a tag `table` recebe um display `table` fazendo com que os elementos internos como `td` e `tr` possam ser usados para montar uma tabela

```HTML
<table>
  <tr>
    <td>Hora</td>
    <td>20:00</td>
  </tr>
  <tr>
    <td>Hora</td>
    <td>20:37</td>
  </tr>
</table>
```

## Tabless

Uso das propriedades `float`, `clear` para que elementos possam mudar de posição na tela

```HTML
<div style="float: left">
  Esquerda
</div>

<div style="float: right">
  Direita
</div>

<div style="float: both">
  Normal
</div>
```

## Flexbox
A caixa se torna flex, fazendo com que os elementos internos possam receber melhor:
- Alinhamento
- Ordenação
- Tamanhos flexíveis