// get Values from the user.  
function getValues(){

    //get the user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;
    //parse for number
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);
    //check that the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        
        //call fizzBuzz()
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen

        displayData(fbArray);
    }
    else{
        alert("You must enter the integers");
    }

}

function fizzBuzz(fizzValue, buzzValue){

    let returnArray = [];
    //init the array

    //loop iterate 1 to 100
    for (let i = 1; i <= 100; i++)
    {
        
        //check the num is divisible by both (3 and 5)
        //check to see if divisible by fizz value (3)
         //check to see if divisible by buzz value (5)
        if (i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
        }
        else if (i % fizzValue == 0){
            returnArray.push('Fizz');
        }
        else if (i % buzzValue == 0){
            returnArray.push('Buzz');
        }
        else{
            returnArray.push(i);
        }
    }
    return returnArray;
}

function fizzBuzzB(fValue, bValue){

    let returnArray = [];
    let Fizz = false;
    let Buzz = false;

    for (let i = 1; i <= 100; i++) {
       
        Fizz = i % fValue == 0;
        Buzz = i % bValue == 0;
        
        switch (true) {
            case Fizz && Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz: {
                returnArray.push('Fizz');
                break;
            }
            case Buzz: {
                returnArray.push('Buzz');
                break;
            }
            default:
                {
                    returnArray.push(i);
                    break;
                }
                
              
        
           
        }
    }
    return returnArray;
}


function fizzBuzzC(fValue, bValue){

    let returnArray = [];

    for (let i = 1; i <= 100; i++) {
        
        let value = ((i % fValue == 0 ? 'Fizz': '') + (i % bValue == 0? 'Buzz': '') || i);
        returnArray.push(value);
        
    }
    return returnArray;
}

function displayData(fbArray){

    //loop over the array and create a tablerow for each item
    //get the table body element from the page
    let tableBody =  document.getElementById("results");

    let templateRow = document.getElementById("fbTemplate");

    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index += 5) {
        
        let tableRow = document.importNode(templateRow.content, true);

        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];
        
        rowCols[1].classList.add(fbArray[index + 1]);
        rowCols[1].textContent = fbArray[index+1];
    
        rowCols[2].classList.add(fbArray[index + 2]);
        rowCols[2].textContent = fbArray[index+2];
      
        rowCols[3].classList.add(fbArray[index + 3]);
        rowCols[3].textContent = fbArray[index+3];
        
        rowCols[4].classList.add(fbArray[index + 4]);
        rowCols[4].textContent = fbArray[index+4];
        
        tableBody.appendChild(tableRow);
        
        
    }
    
}   