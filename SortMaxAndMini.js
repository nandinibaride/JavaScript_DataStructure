/*
@purpose: sorted data and find the second largest second smallest.
@Authour: Nandini.B
*/ 
function generateRandomNumber()
{
    return Math.round(Math.random() * 900 + 100);
}

let numberArray = new Array();

console.log("The Generated Array is:")
for (let index = 0 ; index < 3 ; index++)
{
    numberArray.push(generateRandomNumber());
    console.log(numberArray[index]);
}

numberArray.sort();
console.log("The Sorted Array is:")
for (let index = 0 ; index < 3 ; index++)
{
    console.log(numberArray[index]);
}

console.log("Second Largest Element : " + numberArray[1]);
console.log("Second Smallest Element : " + numberArray[1]);
