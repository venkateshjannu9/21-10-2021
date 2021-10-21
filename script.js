/*let js="amazing";
if(js ==="amazing") alert("javascript is fun!");

40 + 8 + 23 - 10;
 console.log(40 + 8 + 23 - 10);

 console.log("venkatesh");
 console.log(23);

 let firstname="jannu";
 console.log(firstname);

 let myFirstJob="trainer";
 let myCurrentJob="devoloper";

 let myJOb1="coder";
 let myJob2="tester";

 console.log(myFirstJob);
 console.log(myCurrentJob);
 console.log(myJOb1);
 console.log(myJob2);

 let javaScriptIsFun=true;
 console.log(typeof javaScriptIsFun);
 console.log(typeof true);
 console.log(typeof 'myFirstJob');
 console.log(typeof 23);

 javaScriptIsFun='yes!';
 console.log(typeof javaScriptIsFun);

 let year;
 console.log(year);
 console.log(typeof year);

 year=1995;
 console.log(typeof year);

 let age=23;
 age=24;
 console.log(age);

 const birthYear=1997;
//  birthYear=1998;
 console.log(birthYear);

 var job="programmer";
  job="tester";
  console.log(job);
// math operators
  const now = 2021;
  const ageVenky= now - 1998;
  const ageRavi= now- 1996;
  console.log(ageVenky,ageRavi);
   
  console.log(ageRavi*2, ageVenky/10**3);

  const firstName= "venkatesh";
  const lastname= "jannu";
  console.log(firstName + lastname);
// assignment operator
  let x = 10+ 5;
  x=x*3;
  x=x+6;
  console.log(x);
// comparisionoperators 
 console.log(ageRavi>ageVenky); // >,>=,<=
 console.log(ageRavi>=26);
 const isFullAge = ageRavi>=18;
 console.log(now-1996>now-2011);

 let a, b;
 a=b=25-10-5;
 console.log(a,b);

 const avgAge= (ageRavi+ageVenky)/2;
 console.log(ageRavi, ageVenky,avgAge);
//  challemge 1
// const massMark = 78;
// const heightMark= 1.69;
// const massJhon="92";
// const heightJhon="1.95";

const massMark = 95;
const heightMark= 1.88;
const massJhon="85";
const heightJhon="1.76";
const BMIMArk=massMark/heightMark**2;
const BMIJhon=massJhon/(heightJhon*heightJhon);
const markHeightBMI= BMIMArk>BMIJhon;
console.log(BMIMArk,BMIJhon,markHeightBMI);

const Firstname="venky";
const Job="trainer";
const Birthyear=1998;
const YEar="2021";
const venky="I am "+ Firstname+","+(YEar-Birthyear)+" years old" +" " + Job +"!";
console.log(venky);

console.log("just a regular string");
console.log("string\nmultilple\nlines");

const AGE=16;
if (AGE>=18)
{
console.log("venkatesh can start driving license");
}
else{
    const YearLeft=18-AGE;
    console.log("venky is too young. wait another ${YearLeft} years:");
}
const Byear=2000;
let century;
if(Byear<=2000)
{
    century=20;
}
else{
    century=21;
}
console.log(century);

const inputYear="1998";
console.log(Number (inputYear),inputYear);
console.log(Number(inputYear)+18);
 
console.log(Number("venkatesh"));
console.log(typeof NaN);

console.log("23"-10-"3");
console.log("23"/"2");
console.log("23">"18");
let n= 2+3+4+"5";
console.log(n);

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("venkatesh"));
console.log(Boolean(""));

const money=0;
if(money){
  console.log("don't spent it all");
}
else{
  console.log("you should get a job");
}
 

let height=123;
if(height)
{
  console.log("yah! height is defined");
}
else{
  console.log("height is undefined");
}

const Age="18";
if(Age===18){
  console.log("you just became an adult:strict");
}
if(Age==18){
  console.log("you just became an adult:Looser");
}

const favourite=prompt("what is your favourite number?");
console.log(favourite);
console.log(typeof favourite);

if(favourite==23){
  console.log("cool 23 is an amazing number");
}
else if(favourite=== 7){
  console.log("7 is also a cool number");
}
else if(favourite === 9){
  console.log("9 is also a cool number");
}
if(favourite !== 23 ) console.log("why not 23?");

const hasDriverLicense= true;
const hasGoodVision = false;

console.log( hasDriverLicense&&hasGoodVision);
console.log(hasGoodVision||hasDriverLicense);
console.log(!hasDriverLicense);
*/

const scoreDolphins = (96+108+89)/3;
const scoreKerals = (88+91+110)/3;
console.log(scoreDolphins,scoreKerals);
if(scoreDolphins>scoreKerals)
{
  console.log("dolphins win the trophy");
}
else if(scoreDolphins<scoreKerals)
{
  console.log("kerals  win the trophy");
}
else if(scoreDolphins===scoreKerals)
{
  console.log("both are win the match");
}

const day = "monday";
switch(day)
{
  case "monday":
    console.log("plan your course structure");
    break;
  case "tuesday":
    console.log("plan your course videos");
    break;
  case "wednesday":
    console.log("write code");
    break;
  case "thursday":
    console.log("prepare theroy vedios");
    break;
  case "friday":
    console.log("record videos");
    break;
  case "saturday":
   console.log("enjoy the weeekend");
   break;
  default:
    console.log("not a valid day");
    break;
}
const age= 23;
const drink = age >= 18?"wine" : "water";
console.log(drink);
let drink2;
if (age >= 18)
{
  drink2 = 'wine';
}
else{
  drink2='water';
}
console.log(drink2);

console.log("i like to drink ${age >= 18? 'wine':'water'}");

const bill = 275;
const tip = bill <= 300 && bill>= 50? bill*0.15 : bill*0.2;
console.log("the bill was ${bill},the tip was ${tip},and the total value ${bill+tip}");
console.log(tip);