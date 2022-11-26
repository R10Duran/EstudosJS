/*
Type conversion (typecasting) vs Type coersion

*/
//console.log(Number('9') + 5)

/*
FALSY
Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops)

false
0
-0
""
null 
undefined
NaN
*/

console.log(true ? 'verdadeiro' : 'falso')
//console.log(0 ? 'verdadeiro' : 'falso') o zero irá ser convertido em false, pois o que se esperava no lugar dele era um booleano

/*
TRUTHY
Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

true
{}
[]
1
3.23
"0"
"false"
-1
Infinity
-Infinity
*/
// console.log({} ? 'verdadeiro' : 'falso') irá retornar verdadeiro
