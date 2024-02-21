

//declare a fuction with a name printTriangle
function printTriangle(){
let string ="";
let n = 5;  
for(let i = 0; i <= 5; i++) {  //external loop
  for(let j = 0; j < i; j++) {  //internal loop
    
    string += "* ";
  }
  // newline after each row
  string += "\n";
    } 
    return string;
}

// printing the string
console.log(printTriangle());



