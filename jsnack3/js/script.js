// jsnack3. Stampa il cubo dei primi N numeri, dove N è un numero indicato dall'utente.

// Chiedo all'utente il numero limite

let N = parseInt(prompt("Inserisci il numero N massimo"));

// Calcolo i cubi dei numeri e li inserisco in una lista
const numberList = [];
for (let i = 1; i <= N; i++) {
    numberElement = i * i * i;

    numberList.push(numberElement);

}

// Output
result = numberList;

console.log(numberList);