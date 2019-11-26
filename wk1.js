//if else lesson********************************************
 
var ageAsString = prompt('What is your age? ', '');
var age = Number(ageAsString);
if (age < 40) {
  alert("Oh, you're so young");
}
else if (age == 40){
  alert("Hey, you're 40!");
}
else{
  alert("Don't worry, age is just a number");
}
alert('Thank you');
 
//do while lesson*******************************************
 
var age = Number(prompt('What is your age?', ''));
 
var string = '';
do {
  string += 'Happy Birthday \n';
  age -= 1;
} while (age > 0);
alert(string);
 
 
//for loop lesson*******************************************
var age = Number(prompt('What is your age?', ''));
 
var string = '';
for (var theAge = age; theAge > 0; theAge -= 1) {
  string += 'Happy Birthday \n';
}
alert(string);
 
//break lesson**********************************************
var age = Number(prompt('What is your age?', ''));
 
var string = '';
for (var counter = 1; counter < age; counter += 1) {
  string += 'Happy Birthday \n';
  if (counter & (7 == 0)) break;
}
alert(string);
 
//break lesson**********************************************
var age = Number(prompt('What is your age?', ''));
 
var string = '';
for (var counter = 1; counter < age; counter += 1){
  string += 'Happy Birthday \n';
  if (counter & 7 == 0)
  break;
}
alert(string);
 
//switch lesson**********************************************
var animal = "ddog";
 
switch (animal) {
  case "cat":
    alert("meow");
    break;
 
  case "dog":
    alert("woof");
    break;
 
  case "horse":
    alert("whinny");
    break;
 
    deafult: alert("Unknown animal");
    break;
}
 
//Booolean Values********************************
var isMale = false;
var isOld = true;
var isOldMan = isMale || isOld;
 
alert(isOldMan);
 
//Truthyness*************************************
alert(1 == true);
/////
var x = 5
x++;
alert(x);
/////
var x = 5;
var y = x < 10 ? x : 10;