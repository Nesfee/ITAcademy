function rollDice() {   // случайый бросок кубика
    return Math.floor(Math.random() * 6) + 1;
}

function sumDiceRolls(diceRolls) {  // определение суммы бросков
    return diceRolls.reduce((sum, roll) => sum + roll, 0);
}

function playGame(numPlayers, numRolls) {
    const players = [];

    for (let i = 0; i < numPlayers; i++) {  // инициализация игроков
        players.push([]);
    }

    for (let i = 0; i < numRolls; i++) {    // броски кубика
        for (let j = 0; j < numPlayers; j++) {
        players[j].push(rollDice());
        }
    }

    const sums = players.map(sumDiceRolls);

    for (let i = 0; i < numPlayers; i++) {  // результат
        console.log(`Player ${i + 1}: ${players[i].join(", ")} Sum: ${sums[i]}`);
    }

    const maxSum = Math.max(...sums); // определение победителя
    const winners = sums.reduce((acc, sum, index) => {
        if (sum === maxSum) {
        acc.push(index + 1);
        }
        return acc;
    }, []);

    if (winners.length === 1) {
        console.log(`Player ${winners[0]} win!`);
    } else {
        console.log(`Draw! Winners: ${winners.join(", ")}`);
    }
}

playGame(3, 5); // количество игроков и количетсво бросков кубика
