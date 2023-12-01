Descrizione:
Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma


PROBLEMA
1 - mostrare a video 5 numeri creati casualmente
    1.1 - definire funzione che generi 5 numeri casuali
    1.2 - pushare all'interno di un array i numeri
    1.3 - richiamare elemento del dom e innestare array
2 - definire una funzione timeout che nasconda i 5 numeri casuali dopo 30 secondi
    2.1 - dichiarare variabile alla quale assegnare funzione timeout
    2.2 - all'interno della funzione anonima nascondere array precedentemente mostrato
    2.3 - impostare tempo a 30 secondi
3 - chiedere all'utente quali numeri ha visualizzato tramite prompt
    3.1 - dichiarare 5 prompt nel quale l'utente andrà a inserire, uno alla volta, i numeri visualizzati
4 - effettuare controllo sui numeri inseriti dall'utente e mostrare quanti e quali numeri ha individuato
    4.1 - definire variabile punteggio al quale assegnare valore 0
    4.2 - confrontare ogni singolo prompt con array di numeri
        4.2.1 - SE il numero è presente allora aumentare variabile punteggio di 1 e mostrare in console il numero
5 - mostrare a video i risulati
    5.1 - richiamare elementi del dom e innestare i risultati