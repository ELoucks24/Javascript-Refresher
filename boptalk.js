let myString = 'this is so weird'
let consonants = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Z']


myString = myString.toLowerCase()
console.log(myString)

For (let ,i = 0, i < consonants.length, i++);{
    myString = myString.replaceAll(consonants[i], consonants[i] + 'op')
}
console.log(myString)

myString = myString.replaceAll('op ', ' ')
console.log(myString)