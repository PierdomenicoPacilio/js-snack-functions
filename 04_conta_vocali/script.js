/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function vowelsIn (string) {
    let count = 0;
    for (i = 0; i < string.length; i++){
        if(string[i].toLowerCase() === 'a' || string[i].toLowerCase() === 'e' || string[i].toLowerCase() === 'i' || string[i].toLowerCase() === 'o' || string[i].toLowerCase() === 'u'){
            count += 1;
        };
    };
    return count;
};


// Invoca la funzione qui e stampa il risultato in console
console.log(`le vocali in "${word}" sono ${vowelsIn(word)}`);


//Risultato atteso se si passa 'javascript': 3 (a, a, i)