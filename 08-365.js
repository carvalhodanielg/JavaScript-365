// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

// #Examples:

// Kata.getMiddle("test") should return "es"

// Kata.getMiddle("testing") should return "t"

// Kata.getMiddle("middle") should return "dd"

// Kata.getMiddle("A") should return "A"


function getMiddle(s){
    let size = s.length
    let final = ''

    if(size%2===1){ //impar
        let sizeTrunc = Math.trunc(size/2)|0
        
        final = s[sizeTrunc]
    }else{//par

        let position = (size/2)-1
        final = s[position] + s[position+1]
    }

    return final
}

console.log(getMiddle('testing'))
console.log(getMiddle('test'))
