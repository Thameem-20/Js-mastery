const prompt = require('prompt-sync')();
console.log("conditional operators in js")
let a = prompt("enter your age")
a = Number.parseInt(a)
if (a>18){
    console.log("you are elgible for voting")
}
else if(a>15){
    console.log("you are just a kid go eat lollipop voting is not your thing")
}
else{
    console.log("you not are elgible for voting")
  }
console.log("you", a<18? "cant vote" :"can vote") //ternary operator
