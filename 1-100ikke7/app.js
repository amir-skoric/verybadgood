function etHundrede(n = prompt("maks. nummer")) {
  for (let i = 0; i <= n; i++) {
    i % 7 ? console.log(i) : console.log(`Dividerbar med 7 ${i}`);
  }
}
