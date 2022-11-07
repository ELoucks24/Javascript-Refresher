let maxHeads = 0;
for (let i = 0; i < 100; i++) {
    coinToss()
}

console.log('The max heads was ' + maxHeads)

function coinToss() {
    let headCount = 0;
    for (let i = 0; i < 100; i++) {
        if (Math.random() > .5) {

            headCount = headCount + 1;
        }
    }

    console.log('out of 100 flips you got ' + headCount + ' heads')
    if (headCount > maxHeads) {
        maxHeads = headCount
    }
   
}


