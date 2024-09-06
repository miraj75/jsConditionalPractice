const list = ['akib', 'fahim','didar','basit', 'catim','emam','gorib','hannan']



const sortList = list.sort() // it will sorted a-z wise as there is no capital letter

console.log(sortList); 

//if we add some capital letter, it will sorted the capital word wise

const list2 = ['akib', 'fahim','Didar','basit', 'catim','emam','gorib','Hannan']
const sortList2 = list2.sort()
console.log(sortList2); // now it will show Didar and Hannan first, as they have capital letter first

//For number, if it is 0-9 it will sort 0-9 ,

const number =[9,5,4,3,6,7,1,0,2,8]

const sortedNum = number.sort()
console.log(sortedNum);

// but if wanna sorted 0-more than 9, it can not sorted it rightway,

const num = [3,5,33,4,88,99,77,2]
//const sortednum = num.sort()
//console.log(sortednum); // it wont sort it properly

// for sort it properly we can run a function
const  sortednum = num.sort(function(a,b){return a-b})

console.log(sortednum);// now it will sorted rightway for adding it in this function