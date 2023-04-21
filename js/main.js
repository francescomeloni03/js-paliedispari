// function palidroma(parola){

//     let risultato = false;

//     console.log(`La parola è ${parola}`)


//     var ParolaDivisa = parola.split('');
//     console.log("La parola divisa:",ParolaDivisa);

//     var ParolaDivisa = ParolaDivisa.reverse();
//     console.log("La parola divisa al contrario:",ParolaDivisa);

//     var ParolaInvertita = ParolaDivisa.join("");
//     console.log("La parola invertita:",ParolaInvertita);

//     if(parola == ParolaInvertita){
//         risultato = true;
       
//     }

//      return risultato;
// }


// let parola = prompt("inserisci una parola");


// if (palidroma(parola)) {
//     console.log("La parola è palindroma");
// }
// else{
//     console.log("La parola non è palindroma")
// }



function PariOrDispari(num1, num2){
    let a = parseInt(num1);
    let b = parseInt(num2);
    let risultato = a + b;
    console.log("La somma dei numeri è", risultato)
    let numero = risultato;

    if(numero % 2 == 0) {
        return "pari";
    }
    return "dispari";
}

let num1 = parseInt( prompt("Inserisci un numero"))
console.log(`Il primo numero inserito è ${num1}`)
let num2 = parseInt( prompt("Inserisci un numero"))
console.log(`Il secondo numero inserito è ${num2}`)

if (PariOrDispari(num1, num2) == "pari"){
    console.log("La somma dei numeri è pari");
}
else{
    console.log(`la somma dei numeri è dispari`);
}



