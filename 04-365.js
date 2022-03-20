function isValidWalk(walk) {
    //insert brilliant code here
    timeToGo = walk.length

   let contN = 0
   let contS = 0
   let contE = 0 
   let contW = 0
    
    for(let i=0; i<=timeToGo; i++){
        if(walk[i] == 'n'){
            contN ++
        }else if(walk[i] == 's'){
            contS ++
        }else if(walk[i] == 'e'){
            contE ++
        }else if(walk[i] == 'w'){
            contW ++
        }
      }
    if (timeToGo==10 & contN-contS == 0 & contE-contW == 0){
        return true
    }else{
      return false
    }
  }
  console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s']))
  