// 1. Il software deve chiedere per 5 volte all'utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


// Metodo con for

// const numberList = [];

// for (let i = 0; i < 5; i++) {
//     let newElement = parseInt(prompt("Inserisci un numero"));
//     console.log(newElement);

//     numberList.push(newElement);
// }

// console.log(numberList);

// let sum = 0;

// for (let i = 0; i < 5; i++) {

//     sum += numberList[i];

// }

// result = sum;

// console.log(result);

// Metodo con while

const numberList = [];

let i = 0;

let sum = 0;

while (i < 5) {

    let newElement = parseInt(prompt("Inserisci un numero"));
    console.log(newElement);

    numberList.push(newElement);

    sum += numberList[i];

    i += 1;
}

console.log(numberList);

result = sum;

console.log(result);