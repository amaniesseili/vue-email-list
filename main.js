
const emailListElement = document.getElementById('emailList');  // prendo l'elemento html 

const apiUrl = 'https://flynn.boolean.careers/exercises/api/random/mail'; //url dell'api per generare gli mail casuali

const numberOfEmails = 10; // const con numero di mail da generare 

let generatedEmails = 0;// contatore delle mail generati


//function per generare le mail 
function generateEmail() {

    axios.get(apiUrl)   // eseguo una richiesta Get all'api utisando axios 
        .then(response => {

            const email = response.data.response;  // prendo l'indirizzo mail dall'api 

            const listItem = document.createElement('li');  //creo un elemento li per mostrare le mail generati

            listItem.textContent = email; // imposto il testo dell'elemento li con l'inditizzo generato 

            emailListElement.appendChild(listItem);  // aggiungo l'elemento li alla lista degli mail 

            generatedEmails++; // incremento il contatore delle mail

            if (generatedEmails === numberOfEmails) {      
                // quando tutte le mail sono generati , mostro l'elenco 
                emailListElement.style.display = 'block';
            }
        })
}

// Gerenare 10 email
for (let i = 0; i < numberOfEmails; i++) {
    generateEmail();
}

