const dealHand = ((deck, numberOfPlayers) => {
    const HANDNUMBER = 6;
    let shuffledDeck = shuffleDeck(deck);
    let playerHandsArray = [];
    
    for(var i = 0; i < numberOfPlayers; i++) {
        let playerHand = [];
        for(var j = 0; j < HANDNUMBER; j++) {
            playerHand.push(shuffledDeck.pop());
        }

        playerHandsArray.push(playerHand);
    }

    return playerHandsArray;
})

const shuffleDeck = ((deck) => {
    deck.sort(() => {
        return 0.5 - Math.random();
    });

    return deck;
});

exports.dealHand = dealHand;