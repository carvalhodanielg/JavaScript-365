// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function(n) {

   let final = parseInt(n, 10).toString(2) 
    let soma = 0

    for(let i=0; i<final.length; i++){
      soma += Number(final[i])
    }

return soma
  };

  console.log(countBits(1234))
  console.log(typeof countBits(1234))
