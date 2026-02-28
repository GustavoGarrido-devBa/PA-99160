// VETOR DE OBJETOS

const usuarios = [
    {nome: "Ana", idade: 25},
    {nome: "Bruno", idade: 22},
    {nome: "Carla", idade: 30},
    {nome: "Daniela", idade: 15}    
]

console.log("Exibindo todos os usários de vetor: ")
// EXIBINDO TODOS OS ELEMENTOS DO VETOR
usuarios.forEach(usuario => {
    console.log(`${usuario.nome} tem ${usuario.idade} anos.`)
})

console.log("\nFiltrando idade maior que 18 anos: ")
// ADICIONANDO EM NOVA LISTA APENAS MAIORES DE 19 ANOS.
const maioresDe18 = usuarios.filter(
    usuario => usuario.idade > 18
)
// EXIBINDO TODOS OS ELEMENTOS DO VETOR.
maioresDe18.forEach(usuario =>
    console.log(`${usuario.nome} tem ${usuario.idade}`)
)

console.log("\nMostrando apenas nomes: ")
const listaDeNomes = usuarios.map(u => u.nome)
listaDeNomes.forEach(nome => console.log(`${nome}`))

console.log("\nEncontrar um usuáriio: ")
const usuarioEncontrado = usuarios.find(u => u.nome === "Carla")
console.log(usuarioEncontrado)
console.log(`Nome: ${usuarioEncontrado.nome} \nIdade: ${usuarioEncontrado.idade}`)
