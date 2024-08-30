const array = ['alam', 'balam', 'kalam','salam', 66, 44, 99]

//for removing element from an array

/** 
console.log(array.pop()); // its removed last number
console.log(array);
*/


// for adding element

/** 
 array.push(99)

console.log(array); */


//for removing element from first of an arry

/** 
array.shift()
console.log(array);
*/

//for checking the specific element in an array

//console.log(array.includes('alam'));
/** 
if(array.includes('kalam')){
    console.log('kalam is available');
}else{
    console.log('kalam is not in this list');
}
*/

// for knowing any elements position

//console.log(array.indexOf('salam'));


// for concataning two array in an array
/** 
const array2 = ['kolom', 'molom']

const addedArry = array.concat(array2)
console.log(addedArry);
*/


// for slicing an array, first we have to call from where we wanna slice, then we have to declare the end point

/** 
const array3 = array.slice(2,4)
console.log(array3);
*/

/** 

// for adding element in specipic position
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// At position 2, add "Lemon" and "Kiwi":
fruits.splice(2, 0, "Lemon", "Kiwi");

console.log(fruits);

*/

// for sorting in capetilize way ...
// Sorting alphabetically works well for strings ("Apple" comes before "Banana").

//But, sorting numbers can produce incorrect results.

/** 
const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Sort the Array
fruits.sort();
console.log(fruits);
*/