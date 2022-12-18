// Imutabilidade
const cart = {
  quantidade: 2,
  total: 200
}

// bad
cart.quantidade = 3 // não pode alterar diretamente o objeto

// Good
const newCart = {...cart, quantidade: 3} // pode alterar o objeto criando uma nova constante, os 3 pontos no inicio significa pegar as propriedades do carrinho e depois da virgula mudar apenas o que eu quero

// Exemplo em ReactJS
const [amount, setAmount] = useState(0)

// Bad 
amount = 2

// Good
setAmount(2)