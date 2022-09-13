const program = (input, input2) => {
    let element = document.createElement('h1');
    element.innerHTML = "Hej " + input + " !";
    document.querySelector("body").append(element);

    let element2 = document.createElement('h1');
    element2.innerHTML = "Jeg har hørt at du kan lide " + input2 + " !";
    document.querySelector("body").append(element2);    
}

let btn = document.getElementById('btn');
let tal = 0;

btn.addEventListener("click", () => {
    tal++;
    document.getElementById('talyes').innerHTML = tal;
})


let body = document.body;

submit.addEventListener("click", () => {
    const form = Array.from(document.querySelector("form").children);
    let list = document.createElement('ul');
    body.appendChild(list);
    form.forEach((item)=>{
        let li = document.createElement("li");
        li.innerText = item.value;
        list.appendChild(li);
      })

})

darkmode.addEventListener("click", () => {
    body.classList.toggle('dark');
})

partymode.addEventListener("click", () => {
    body.classList.toggle('party');
    form.classList.toggle('party');
    if (partymode.innerHTML === "party epic") partymode.innerHTML = "no party ty";
    else {
        partymode.innerHTML = "party epic"
    }
})