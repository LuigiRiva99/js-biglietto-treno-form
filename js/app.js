// SELEZIONO GLI INPUT TRAMITE ID
// età utente element input
const inputEtaElement= document.getElementById("name"); //Element
// console.log(inputEtaElement);

// numero chilometri element input
const inputKmElement= document.getElementById("km"); //Element
// console.log(inputKmElement);

// numero chilometri element input
const inputSubmitElement= document.getElementById("submit"); //Element
// console.log(inputSubmitElement);

// CREO DUE VARIABILI PER ETA E KM
let eta= ""
let km= ""

// Cliccando sul bottone recupero i valori delle input e calcolo il prezzo 

inputSubmitElement.addEventListener("click", function () {
    // console.log("click");
    
    // RECUPERO IL VALORE INSERITI DALL'UTENTE ASSEGNANDO UNA VARIABILE
    // value eta
    eta= inputEtaElement.value; //number
    // value km
    km= inputKmElement.value; //number
    
    // CALCOLO DEL BIGLIETTO IN BASE AI KM
    const bigliettoBase= 0.21 * km; //number    

    // console.log(km, eta);

    
    if ( eta < 18) {
        // sconto minorenni del 20%
        const ScontoMinori= bigliettoBase * 0.2; //number
        // calcolo biglietto scontato
        const bigliettoMinori= (bigliettoBase - ScontoMinori).toFixed(2); //number
        
        console.log(bigliettoMinori);

    } else if (eta > 65){
        // sconto anziani del 40%
        const ScontoAnziani= bigliettoBase * 0.4; //number
        // calcolo biglietto scontato
        const bigliettoAnziani= (bigliettoBase - ScontoAnziani).toFixed(2);  //number

        console.log(bigliettoAnziani);
    } else {
        console.log(bigliettoBase.toFixed(2));
    }
}) 
