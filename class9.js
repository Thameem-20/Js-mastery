console.log("loops in java script")
for(let i=0;i<5000;i++){
  console.log(i)
}

// const prompt = require('prompt-sync')();
let m = prompt("enter any number\n")
m = Number.parseInt(m)
for (let i=1;i<=10;i++){
tab=m*i;
console.log("table of "+n+"x"+i+"="+tab)
}

const prompt = require('prompt-sync')();
let sum= 0
let n = prompt("entr the value of n\n")
for (let i=0;i<n;i++){
    sum+=(i+1);
}
console.log("the sum of "+n+" number is: "+sum)

let obj = {
  thameem : 90,
  mausooq : 80,
  nafih : 70
}
for (let a in obj){
  console.log( "marks of "+a+ " are " +obj[a])
}
for (let b of "thameem"){
  console.log(b)
}