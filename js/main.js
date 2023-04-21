function palidroma(parola){

    let risultato = false;

    console.log(`La parola è ${parola}`)


    var ParolaDivisa = parola.split('');
    console.log("La parola divisa:",ParolaDivisa);

    var ParolaDivisa = ParolaDivisa.reverse();
    console.log("La parola divisa al contrario:",ParolaDivisa);

    var ParolaInvertita = ParolaDivisa.join("");
    console.log("La parola invertita:",ParolaInvertita);

    if(parola == ParolaInvertita){
        risultato = true;
       
    }

     return risultato;
}


let parola = prompt("inserisci una parola");


if (palidroma(parola)) {
    console.log("La parola è palindroma");
}
else{
    console.log("La parola non è palindroma")
}



