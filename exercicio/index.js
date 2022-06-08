const hitchedSpaceships = [
    ["Fenix", 8, true], 
    ["Golias", 10, true], 
    ["Helmet", 5, false], 
    ["Elemental", 3, true], 
    ["Darwin", 15, false],
]

let filterspaceshipName = hitchedSpaceships.filter(Element => {
    return Element[1] > 9
}) .map(Element => {
    return Element[0]
})
let findindexspaceShip = hitchedSpaceships.findIndex(Element => {
    return Element[2] == false
})

let uppercasespaceShip = hitchedSpaceships.map(Element => {
    return Element[0].toUpperCase()
})

let mensagem ="Espaço nave com mais de 9 tripulantes: "  + filterspaceshipName.join(", ")
 mensagem += "\nEspaço nave que não esta pronta são: " + (findindexspaceShip + 1)
 mensagem += "\nNome das naves em Letras maiusculas: " + uppercasespaceShip.join(", ")

alert(mensagem)


