//funzione che genera numeri casuali e ritorna solo se non è già presente nell'array
function generateNumber(array_number){
    let number;
    let check = false;
//controllo se numero nun è presente in array
    while(!check){
        number = Math.floor(Math.random() * 100 + 1);
        if(!array_number.includes(number)){
            check = true;
        }
    }

    return number;
}

//funzione che genera array vuoto e pusha all'interno 5 numeri creati casualmente dalla funzione 'generateNumber'
function generateArray(){
    let numbers = []; 

    for(let i=0; i<5; i++){
        numbers.push(generateNumber(numbers));
    }

    return numbers;
}

//richiamo elemento del DOM e innesto funzione
 const view_num = document.getElementById('numbers');
 view_num.innerHTML = generateArray();