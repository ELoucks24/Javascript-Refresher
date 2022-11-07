let vowles = 'aeiou'
let mySent = 'thank god'

let boptalk = ''

for (let i = 0; i < mySent.length; i++) {
    let letter = mySent[i]
    if (vowles.includes(letter)) {
        boptalk = boptalk + letter + ' '

    } else {
        boptalk = boptalk + letter + 'op'
    }
}
    console.log(boptalk)