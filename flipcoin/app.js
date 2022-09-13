const btnFlip = document.getElementById("btnFlip");
const tekstFlip = document.getElementById("tekstFlip");
const kroneTekst = document.getElementById("kroneTekst")

const btnDice = document.getElementById("btnDice");
const tekstDice = document.getElementById("tekstDice");
let krone = 0;

function flipCoin () {
    let coin = Math.round(Math.random());
    console.log(coin)
    // enten 1 eller 0 (true/false)
    if (coin) {
        tekstFlip.innerHTML = "Krone";
        krone++;
        kroneTekst.innerHTML = `Du har slået krone: ${krone} gang(e).`;
    }
    else {
        tekstFlip.innerHTML = "Plat";
    }
    }
    
btnFlip.addEventListener("click", flipCoin)


function rollDice () {
let dice = Math.round(Math.random()* 6);
console.log(dice)
if (dice === 1) {
    tekstDice.innerHTML = "1";
}
else if (dice === 2) {
    tekstDice.innerHTML = "2";
}
else if (dice === 3) {
    tekstDice.innerHTML = "3";
}
else if (dice === 4) {
    tekstDice.innerHTML = "4";
}
else if (dice === 5) {
    tekstDice.innerHTML = "5";
}
else if (dice === 6) {
    tekstDice.innerHTML = "6";
}
else {
    tekstDice.innerHTML = "epic fail";
}
}

btnDice.addEventListener("click", rollDice)