

let idade = 16
let paisPresentes = false
let comprouBilhete = true
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete

console.log(`Pode viajar: ${podeViajar} `);

/*
let msgMaiorIdade = ""
if (idade >= 18){
    msgMaiorIdade = "É maior de"
} else{
    msgMaiorIdade = ("É menor de 18 anos")
}*/

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de 18 anos " 

if (!comprouBilhete) {
    console.log("Não comprou o bilhete")
} else {
    console.log(msgMaiorIdade)
    }


let n1 = 8 
let n2 = 8
let media = (n1 + n2) / 2

console.log(`média: ${media}`)

let msgMedia = (media >= 7) ? `Sua média foo ${media} e você foi aprovado! ` : `Sua média foi ${media} e você precisa melhorar`

if (n1 === 0 || n2 === 0) {
    console.log("Reprovado")
} else{
    console.log(msgMedia)
}



