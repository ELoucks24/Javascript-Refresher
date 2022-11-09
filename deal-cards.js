// [{ suit: 'hearts', rank: 7 }, { suit: 'clubs', rank: 'ace' }]
let deck = []




let ranks = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
let suits = ['hearts', 'Spades', 'Clubs', 'Diamonds']
for (let i = 0; i < 4; i++) {
    let suit = suits[i]
    console.log(suit)
    for (let i = 1; i < 14; i++) {
        let rank
        if (i == 1) {
            rank = 'ace'
        } else if (i == 11) {
            rank = 'Jack'
        } else if (i == 12) {
            rank = 'Queen'
        } else if (i == 13) {
            rank = 'King'
        } else {
            rank = i
        }
        deck.push({ suit: suit, rank: rank })

    }
}

console.log(deck)