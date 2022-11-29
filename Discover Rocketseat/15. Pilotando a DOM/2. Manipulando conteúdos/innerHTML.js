// manipulando conteúdo do HTML interno
// innerHTML

const element = document.querySelector('h3')

element.innerHTML = 'Olá devs <smal> !!! </smal>' // permite fazer alterações internas do HTML, por exemplo adicionei o Olá Devs, normalmente e ele seguiu o H3, porém as exclamações seguiram como <small>, conforme foi definido
