//write a function sumNums
//get the number
//convert number into string then the string into an array so that we can access each digit of the number
//check if the array's length is equal to 1
//if length is equal to 1 return the number
//introduce a while loop with a condition that the length should not be equal to 1
//set sum and initialize it to 0
//introduce a for loop to iterate through 
//introduce if statement that returns current sum 

function sumNums(num){
let number = num;
let stringNum = number.toString()
if(stringNum.length == 1){
  return +stringNum
}

while(stringNum.length !== 1){
  let sum = 0
  for(i=0; i<stringNum.length; i++){
    sum += parseInt(stringNum[i])
  
  }
  if(sum < 10){
    return sum
  } else {
    stringNum = sum.toString()
  }
}
} sumNums(387)