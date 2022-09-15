var person = {
  fornavn: "Amir",
  efternavn: "Skoric",
  alder: "22",
  øjenfarve: "brune",
};

console.log(
  `${person.fornavn} ${person.efternavn} er ${person.alder} år gammel og har ${person.øjenfarve} øjne.`
);

var calc = {
  sum: function (x, y) {
    return x + y;
  },
  product: function (x, y) {
    return x * y;
  },
};

var dag1 = {
  dag: 1,
  musiker: "Jeremy Clarkson",
  scene: "Scene A",
  spilleTid: "21:00",
};
var dag2 = {
  dag: 2,
  musiker: "James May",
  scene: "Scene A",
  spilleTid: "9:30",
};
var dag3 = {
  dag: 3,
  musiker: "Richard Hammond",
  scene: "Scene A",
  spilleTid: "16:30",
};

var koncert = [dag1, dag2, dag3];
console.table(koncert)

/*
function koncerter(dag = Number(prompt("Hvilken dag er det? (Fra 1-3)")) ) {
if (dag === 1) {
    console.log(dag1)
} else if (dag === 2){
    console.log(dag2)
}
  else if (dag === 3) {
    console.log(dag3)
  }
  else {
    console.log("Ugyldig dag")
  }
}
*/

var numArray = [50, 40, 30, 20, 10]

function arrayAvg () {
    return numArray.reduce((total, current) => total + current, 0) / numArray.length
}
