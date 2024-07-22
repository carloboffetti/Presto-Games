<!--! FILE JSON (Javascript Object Notaion) -->
E' un formato di file utilizzato per la memorizzazione e lo scambio di dati. E' leggero, facile da leggere e scrivere sia per gli essere umani che per le macchine. 




<!--! API (Application programming interface) : e' un intermediario attraverso il quale due applicazioni possono comunicare tra loro. Attraverso l'url di un sito noi possiamo accedere ai suoi dati. Per permettere al nostro frontend di accedere ed estrapolare dei dati ad un server web backend, il backend mette a disposizione delle API    -->

<!--  fetch(): effettuare richieste HTTP. Queste richieste sono ASINCRONE verso server web e noi ne gestiamo le risposte. LA FETCH ci restituisce una PROMISE, ovvero un oggetto.  -->


La promise (oggetto) puo' avere 3 stati diversi :

1. FUlfilled
2. Rejected
3. Pending


UTILIZZARE I DATI:
1. COllegarci alla risorsa ( fetch() )
2. Convertire la risorsa 
- dalla fetch, utilizziamo il metodo .then( callback  ) che prende come parametro una response, response che verra' convertita in JSON utilizzando il metodo response.json()


IL FILE JSON, quando viene manipolato, viene preso sottoforma di STRINGA