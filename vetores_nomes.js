//  CRIANDO VEconst

const listaNames = ["Marta", "José", "Maria"]

console.log("Exibindo todos os elementos: ")
console.log(listaNames)

console.log("\nExibindo o primeiro elemento: ")
console.log(listaNames[0])

console.log("\nExibindo o segundo elemento: ")
console.log(listaNames[1])

console.log("\nAdicionando um elemento: ")
listaNames.push("Mariana")
console.log(listaNames)

console.log("\nRemovendo o primeiro elemento: ")
listaNames.shift()
console.log(listaNames)

console.log("\nRemovendo o último elemento: ")
listaNames.pop()
console.log(listaNames)

console.log("\nRemovendo o primeiro elemento: ")
listaNames.splice(1,1)
console.log(listaNames)
