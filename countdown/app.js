function countdown (n = prompt("Indtast et nummer")) {
    for (let i = n; i >= 0; i--){
        console.log(i);
        if (i == 0){
            console.log("go")
        }
    }
}