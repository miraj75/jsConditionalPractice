// for reversing any number in an array

const numbers = [11,33,44,55,66,77,88,99,0]
/** 
const reverseNumber = numbers.reverse()

console.log(reverseNumber);


 
//using for loop

const reverseNumberLoop =[];

console.log(reverseNumberLoop);
for(const num of numbers){
    reverseNumberLoop.unshift(num); // unshift will add all the element in the first in an array.
}

console.log(reverseNumberLoop);

*/

// another way
const rvsNum = []
for( let i= numbers.length -1 ;  i>= 0; i-- ){
  const num = numbers[i]
  rvsNum.push(num)
}
console.log(rvsNum);