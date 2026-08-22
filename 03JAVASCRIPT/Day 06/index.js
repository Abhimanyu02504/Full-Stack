const arr = [1,25,446,"Rohit","Abhi"];
console.log(arr);
console.log(arr.length); // it give answer 5 because length of this array is 5
console.log(arr.at(-2)); // this is use to find word 
// if we want to insert new value in array in the last 
 arr.push(50);
//  pop is used to remove the last word of our array 
 arr.pop();
// if we have to unsert valur in begining 
// unshift is used to add element in starting
arr.unshift(10);
// for delete from starting use shift

arr.shift();
// when you want to delet any particular value of indexing then use delete but ye particular delete nhi krta hi delete krta hi but uska space rhta hi 
// it will give the answer like this  Rohit  [ 1, 25, <1 empty item>, 'Rohit', 'Abhi' ]
delete arr[2];

console.log(arr);
