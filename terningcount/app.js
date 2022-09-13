function terningKast(n = prompt("Hvor mange gange vil du kaste terningen?")) {
  let en = 0;
  let to = 0;
  let tre = 0;
  let fire = 0;
  let fem = 0;
  let seks = 0;

  for (let i = 0; i < n; i++) {
    let terning = Math.floor(Math.random() * 6 + 1);
    switch (terning) {
      case 1:
        en++;
        break;
      case 2:
        to++;
        break;
      case 3:
        tre++;
        break;
      case 4:
        fire++;
        break;
      case 5:
        fem++;
        break;
      case 6:
        seks++;
        break;
      default:
        console.log("fail");
        break;
    }
  }
  console.log(`En'ere: ${en}`);
  console.log(`To'ere: ${to}`);
  console.log(`Tre'ere: ${tre}`);
  console.log(`Fire'ere: ${fire}`);
  console.log(`Fem'ere: ${fem}`);
  console.log(`Seks'ere: ${seks}`);
}
