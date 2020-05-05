const findPairs = (numberArray , aim) => {
    // const sortedArray = [...new Set(numberArray)]; 
    let map = [];  
    let indexNumber = [];  
      for (let i = 0; i < numberArray.length; i++)  
      {  
          if (map[numberArray[i]] != null)  
          {  
              index = map[numberArray[i]];  
              indexNumber[0] = numberArray[index];  
              indexNumber[1] = numberArray[i];  
              break;  
          }  
          else  
          {  
              map[aim - numberArray[i]] = i;  
          }  
      }  
      return indexNumber;  
      }  
      console.log(findPairs([10,20,10,40,50,60,70],50));