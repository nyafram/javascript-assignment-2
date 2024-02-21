
function fizzBuzz(n){
//prints all the numbers from 1 to 100
for(let i=1; i<=100; i++){


// check for numbers divisible by 3
  checkForThree = i % 3;

//check for numbers divisible by 5
  checkForFive = i % 5;

//check for numbers divisible by 3 (and not 5) and print "Fizz"
  if ((checkForThree ==0) && (checkForFive !==0)){
  console.log("Fizz");
  }

//if the number is divisible by 5 and not 3, then print Buzz
  else if((checkForFive ==0) && (checkForThree !==0)){
  console.log("Buzz");
  }
// if the number is divisible by both 3 and 5, then print FizzBuzz
  else if ((checkForThree == 0) && (checkForFive == 0)){
  console.log( "FizzBuzz");
}

}
}
let n = 100;

console.log(fizzBuzz(n));

