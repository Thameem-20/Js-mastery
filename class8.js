const prompt = require('prompt-sync')();
console.log("practice set 2")
let age = prompt("what is your age?")
if(age>10 && age <20){
  console.log("your age lies between 10 and 20")
}
else{
  console.log("your age doesnt lies between 10 and 20")
}

const prompt = require('prompt-sync')();
let a = prompt("enter the first number ")
a = Number.parseInt(a);
let b = prompt("enter the second number ")
b = Number.parseInt(b);
console.log("choose your option\n 1.Addition\n 2.Subtraction\n 3.Multiplication\n 4.Division")
let res = prompt("enter your choice\n")
switch(res){
  case "1":
    res = a+b;
    console.log("the addition of two numbers is",res)
    break;
  case "2":
    res = a-b;
    console.log("the subtraction of two numbers is",res)
    break;
  case "3": 
    res = a*b;
    console.log("the multiplication of two numbers is",res)
    break;
  case "4": 
    a/b;
    console.log("the division of two numbers is",res)
    break;
  default: console.log("invalid option")
  break;
 }

 const prompt = require('prompt-sync')();
let num = prompt("enter the number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("the number is divisible by 2 and 3")
}
else{
  console.log("the number is not divisible by 2 and 3")
}

const prompt = require('prompt-sync')();
let num = prompt("enter a number")
num = Number.parseInt(num)
if(num%2==0 && num%3==0){
  console.log("the number is divisible by both 2 and 3")
}
else if (num%2==0){
    console.log("the number is divisible by 2")
}
else if(num%3==0){
    console.log("the number is divisible by 3")
}
else{
    console.log("the number is not divible by either 2 or 3")
}

const prompt = require('prompt-sync')();
let age = prompt("enter your age");
age = Number.parseInt(age)
console.log("you are", (age>=18? "able to drive" :"not able to drive"))