/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.
function firstCharactArray (userArray){
    const returnAarrey = [];
    for (i = 0; i < userArray.length; i++){
        returnAarrey.push(userArray[i][0]);
    };
    return returnAarrey;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(firstCharactArray(names));


//Risultato atteso: ["A", "L", "M", "A", "G", "A"]