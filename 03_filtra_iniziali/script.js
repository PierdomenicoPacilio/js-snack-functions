/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function filtredArray (userArray, char){
    const returnAarrey = [];
    for (i = 0; i < userArray.length; i++){
        if (userArray[i][0].toLowerCase() === char.toLowerCase()) returnAarrey.push(userArray[i]);    
    };
    return returnAarrey;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(filtredArray(names, 'A'));


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]