// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.


//Obs.: O código abaixo mostra o que o desafio pediu e também mostra o array sem oso dois menores.


function sumTwoSmallestNumbers(numbers) {  
    let soma = 0
    let menor = Math.min.apply(Math, numbers)
    let indexMenor = numbers.indexOf(menor)
    
    numbers.splice(indexMenor, 1)

    let segundoMenor = Math.min.apply(Math, numbers)
    let indexSegundoMenor = numbers.indexOf(segundoMenor)

    numbers.splice(indexSegundoMenor, 1)

    console.log(menor + segundoMenor)
    console.log(`Soma dos dois menores: ${menor + segundoMenor}`)
    console.log("Array sem os dois menores: " + numbers)

}


sumTwoSmallestNumbers([19, 5, 42, 2, 77])