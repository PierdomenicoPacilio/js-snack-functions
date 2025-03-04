/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function userHello(nome) {
    const ora = new Date().getHours();
    let hello;
    if (ora < 13) {
        hello = "Buongiorno";
    } else if (ora < 17) {
        hello = "Buon pomeriggio";
    } else {
        hello = "Buonasera";
    };
    return `${hello} ${nome}`;
};

// Esempio di utilizzo
console.log(`${new Date().getHours()}:${new Date().getMinutes()}`);

// Invoca la funzione qui e stampa il risultato in console
console.log(userHello(name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.