// Alterando estilos
// classList

const elementoClassList = document.querySelector('h1')

elementoClassList.classList.add('active') // posso adicionar uma classe ou várias classes com o add, assim como posso remover uma classe ou várias classes, com o remove.

console.log(elementoClassList)

elementoClassList.classList.remove('active')
elementoClassList.classList.toggle('active') // toggle --> se a classe existir ele tira, se não existir ele adiciona, se tiver o active, por exemplo ele remove, se tiver remove active, por exemplo, ele adiciona
