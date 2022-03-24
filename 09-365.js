// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.


function findShort(s){

let teste = s.split(' ')
let menor = 100

teste.forEach(element => {
    
    if(element.length<menor){
        menor = element.length
    }
});

return menor

}

console.log(findShort("Let's travel abroad shall we"))