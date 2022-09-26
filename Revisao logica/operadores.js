// +, -, *, / % **
let n1 = 10
let n2 = 5

// OPERADORES ARITIMÉTICOS
console.log(n1 + n2)
console.log(n1 - n2)
console.log(n1 * n2)
console.log(n1 / n2)
console.log(n1 ** n2)
console.log(n1 % n2)

//OPERADORES DE ATRIBUIÇÃO
let n3 = 20
n3 += 15
console.log(n3)

//INCREMENTO E DECREMENTO
let i = 0 
i = i + 1
console.log(i)
// i += 1
// i++ primeiro mostra na tela depois faz a soma
// ++i faz a soma e depois mostra na tela 

/* COMPARAÇÃO
igualdade de valor ==
igualdade de valor e tipo ===
<, >, <=, >=
!- valores diferentes
!== valores e tipos difeerntes

*/  

console.log(n1, n2, n3)
console.log(n1 != "10")
console.log(n1  !== "10")

//OPERADORES LOGICOS
/*
Para uma pessoa viajar para o exterior, 
precisa ser maior de 18 anos 
OU 
acompanhada pelos pais
*/

let idade = 18
let paisPresentes = true
let comprouBilhete = false
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete
console.log(`Pode viajar: ${podeViajar} `)