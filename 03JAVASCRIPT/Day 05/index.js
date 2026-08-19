let num1 = 232;
let num2 = new Number(232);
console.log(num2);
console.log(typeof num2);
// when we compare both string and to the heap nummber then string convert into number then it willl check that it will greater smaller or equal


// floor and ceil is used in math function for like floor is like GIF function always gives integer ceil is also give an intergeer but GIF+1 krke dega ceil 

let num3= 25.4;
console.log(Math.floor(num3));  //it gives answer 25
console.log(Math.ceil(num3));  //it gives answer 26

// if we want to generate randon number then use Math.random() its  generate the value of between 0-1
console.log(Math.random());  
console.log(Math.random()*10);  //if we want to generate between 0-9 then multiply by 10 then it gives a number between 0-9 
console.log(Math.floor(Math.random()*10));  //if we want to generate between 0-9 then multiply by 10 then it gives a number between 0-9 if we want integer then use Floor function
console.log(Math.floor(Math.random()*10+1));  //if we want to generate between 1-10 then multiply by 10 then it gives a number between 0-9 if we want integer then use Floor function

// it has one formula it valid in every case   
// console.log(Math.floor(Math.random()*(max - min + 1)+ min));
// 50-60
console.log(Math.floor(Math.random()*(60 - 50 + 1)+ 50));
 