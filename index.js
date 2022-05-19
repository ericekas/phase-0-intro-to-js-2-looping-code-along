
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`)
    ;
}

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

function writeCards(names, event) {
    const cards = []
    for(let name of names) {
        cards.push(`Thank you, ${name}, for the wonderful ${event} gift!`)
    }
    return cards
}

function countDown(count) {
    while(count >= 0) {
        console.log(count)
        count -= 1
    }
}
