





function squareDigits(num){
    let pot = num.toString()
    let potFinal = ""
  
    for(let i=0; i<pot.length; i++){
        potFinal+=((pot[i]*pot[i]).toString())
    }

    console.log(potFinal)
    return 0;
  }



squareDigits(3212)  