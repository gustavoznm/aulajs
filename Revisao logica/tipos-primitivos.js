//string, number (int, floats), boolean
//undefined, null, symbol (ES2015)



let minhVar = 'minha "string" com aspas simples'
var minhaVar3 = `minha template literal `

let idade = 40;
//let msg = "eu possuo " + idade + "anos"

let msg = `eu possuo ${idade} anos`

console.log(msg)
console.log("Hello" + "World")
console.log(typeof msg, typeof idade, typeof minhVar, " -- ", 20)

const n1 = 10
const n2 = 1.1

console.log(`O tipo de n1  é ${typeof n1} e seu valor é ${n1}` )
console.log(`O tipo de n2  é ${typeof n2} e seu valor é ${n2}` )

const isValid = false
console.log(`isvalid: ${isValid}`)

let varTeste = null

console.log(varTeste)
console.log( typeof varTeste)
varTeste =  10
console.log( typeof varTeste, varTeste  )