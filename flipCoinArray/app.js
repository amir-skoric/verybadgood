let krone = [];
let plat = [];

function flipCoin(n = Number(prompt("Hvor mange gange vil du slå med terningen?"))) {
    for (var i = 0; i < n; i++) {
    let coin = Math.round(Math.random());
  // enten 1 eller 0 (true/false)
  if (coin) {
    krone.push(coin)
  } else {
    plat.push(coin)
  }
}
console.log("Du har slået " + n + " gange i alt.")
console.log("Du har slået plat " + plat.length + " gang(e).");
console.log("Du har slået krone " + krone.length + " gang(e).");
}