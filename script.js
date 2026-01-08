/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA
 Nei linguaggi di programmazione, i "datatype" (o tipi di dato) sono come scatole che contengono diversi tipi di informazioni. I principali tipi di dato con cui abbismo a che fare in JavaScript:
 1. Numeri: Sono i numeri come 1, 2, 3.5, -4, ecc. Possono essere positivi o negativi, interi (Integers) o decimali (Float o Double).
 2. Sono sequenze di caratteri come "Ciao", "123"ecc. Le stringhe sono sempre racchiuse tra virgolette (apici doppi, singoli o backtick), 
 ma gli apici devono essere uguali tra dui loro. Nello specifico sono Oggetti, ovvero strutturte dati più complesse che possono contenere proprietà e metodi.
 3. Booleani: Sono valori che possono essere solo due: vero (true) o falso (false). Sono utili per prendere decisioni nei programmi. E' come una domanda a cui si può rispondere solo con "sì" o "no". 
 La risposta non può essere si oppure no allo stesso momento.
 4. Null: Rappresenta l'assenza intenzionale di un valore. E' come una tazza di latte, che abbiamo svuotato e quindi che non c'è piu' nulla dentro. Si usa quando si vuole indicare che una variabile non ha alcun valore, 
 e vogliamo quindi assicurarci che non contenga dati precedenti prima di riutilizzare quella variabile.
 5. Undefined: Indica che una variabile è stata dichiarata ma non le è stato assegnato alcun valore, quindi non inizializzata. E' come comprare una scatola, ma non sapere
 ancora che cosa metterci all'interno, e quindi che non è stata ancora riempita. 
 6. Oggetti: Sono strutture dati complesse che possono contenere più valori e funzioni (metodi) al loro interno. 
 Gli oggetti ci permettono di astrarre entità del mondo reale con proprietà e comportamenti.
 Nei linguaggi di programmazione, gli oggetti ci aiutano a organizzare e gestire dati complessi in modo più efficiente e quindi a ridurre la complessità del codice. 
 Le proprieta degli oggetti sono costituite da coppie chiave-valore, dove la chiave è una stringa che identifica la proprieta, e il valore può essere di qualsiasi tipo di dato, inclusi altri oggetti o array. 
 Ad esempio, un oggetto "persona" potrebbe avere proprieta come "nome", "età", "indirizzo", "gusti" , ciascuna con i propri valori associati.
 I metodi sono funzioni associate agli oggetti che consentono di eseguire operazioni sui dati dell'oggetto stesso. Ad esempio, un oggetto "auto" potrebbe avere un metodo "accelera" che aumenta la velocità dell'auto.
 La differenza tra metodi e funzioni è che i metodi sono associati a un oggetto specifico e operano sui dati di quell'oggetto, mentre le funzioni sono entità indipendenti che possono essere chiamate da qualsiasi parte del codice.
 7. Array: Sono liste ordinate di valori, che possono essere di qualsiasi tipo di dato, inclusi altri array o oggetti. Gli array sono utili per raccogliere più elementi in un'unica struttura.

*/


/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

/* SCRIVI QUI LA TUA RISPOSTA 
 Gli oggetti sono strutture dati complesse strettamente legate al concetto di Programmazione Orientata agli Oggetti (OOP). Gli oggetti ci permettono di astrarre entità del mondo reale in modo più intuitivo e organizzato, 
 raggruppando insieme proprietà (attributi) e metodi (funzioni) che descrivono lo stato e il comportamento dell'oggetto stesso. Grazie al principo di astrazione e di ereditarietà, gli oggetti ci aiutano a ridurre la complessità del codice 
 e a migliorare la manutenibilità e la riusabilità del software. Per esempio, se dovessimo  dover creare un programma che gestisce l'aula di un liceo, dovremmo in primo luogo identificare le entità principali coinvolte, come studenti e insegnanti.
 Gli studenti ed insegnanti sono entrambi senza dubbi delle persone, quindi possiedono un nome, un cognome, un eta, un genere, un indirizzo; possono inoltre svolgere delle azioni (metodi), muoversi, parlare ecc... Creamo prima quindi la classe (Oggetto)
 "Persona" con le proprieta e i metodi comuni a tutte le persone, e poi creiamo due sottoclassi (sotto-oggetti) "Studente" e "Insegnante" che ereditano le proprieta e i metodi della classe "Persona", ma che hanno anche delle proprieta e dei metodi specifici per ciascuna sottoclasse.
 Le sottoclassi oltre a ereditare le proprieta e i metodi della superclasse, possono anche sovrascrivere (override) i metodi ereditati per adattarli alle proprie esigenze specifiche.
*/


/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function somma(a, b) {
    return a + b;
}


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name = "Leonardo";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

if(name1 !== name2){
    console.log("name1 è diversa da name2");
}

if(name1.toLowerCase() === name2.toLowerCase()){
    console.log("name1 e name2 sono uguali in lowercase");
}

