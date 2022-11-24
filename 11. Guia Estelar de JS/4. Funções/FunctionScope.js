// function scope

let subject = 'creat video'
function creatThink(subject){ //o parametro subject permite que cada subject seja diferente, um é um e outro é outro, se não coloca o parametro ele iria assumir o subject study nos dois subject
  subject = 'study'
  return subject
}

console.log(subject)
console.log(creatThink(subject))