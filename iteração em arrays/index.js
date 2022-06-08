const array = [12, 15, 78, 86, 52, 10, 8, 9, 6]

const arrayMaiores = array.filter((elemento1, index1) => {
    return elemento1 >= 18
})

console.log(arrayMaiores)

const arrayMenores = array.filter((elemento2) => {
    return elemento2 < 18
})

console.log(arrayMenores)

const arrayPrimeiroElemento = array.find((elemento4) => {
    return elemento4 >= 0
})

console.log(arrayPrimeiroElemento)

const arrayMultiplicado = array.map((elemento3) => {
    return elemento3 * 2
})

console.log(arrayMultiplicado)

let moneygang = ["real", "dólar canadense", "peso", "euro", "libra"]

moneygang.forEach(function(money, index) {
    console.log("Moeda: " + money + "  Index: " + index)
})

