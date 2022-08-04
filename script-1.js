//  ...TASK-1...//

// Part 1: Find the culprits and nail them — debugging javascript
	
// Find the culprit

// 1.fix.html

//<!DOCTYPE html>
// <html>
// <body>
//  <script>
//  alert( “I’m JavaScript!’);
//  </script>
//  Whats the error in this ?
// </body>
// </html>

// Answer:
// <!DOCTYPE html>
// <html>
//     <body>
//         <script>
            alert( "I'm JavaScript!");
//          </script>
//         Whats the error in this ?
//     </body>
// </html>

//  Whats the error in this ?
// In alert the quotation opens with double quotes and ends with single quotes.

//---------------------------------------------------------------------------------------------------------------------------//

// 2.Find the culprit and invoke the alert
// fix.html

// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// scripts.js

// alert(“I’m invoked!”);

// Answer: The Script file name is changed as script.js to scripts.js

// <!DOCTYPE html>
// <html>
//     <head>
//         <script src="scripts.js"></script>
//     </head>
// <body>
 
// </body>
// </html>

// scripts.js
 alert("I’m invoked!");

//--------------------------------------------------------------------------------------------------------------------------//

// 3.Explain the below how it works

// explain.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// alert("I'm JavaScript!");
// alert('Hello') // this line is not having semicolon
// alert(`Wor
//      ld`)
// alert(3 +
// 1
// + 2); // this is multiple line code and its working

// Answer:

// 1. The javascript codes run line by line so alerts will works as that.
// 2. The First alert shows I'm JavaScript!.
// 3. The Second alert shows Hello. In JS the code runs with or without semi-colon it just indicates that function statement is not ended.
// 4. The Third alert shows Wor in first line and ld in the Second line. The Space is considered so the dont show World in single line.
// 5. The Fourth alert shows 6. since statements inside the alert are numerical opertions and it performed those operations before alerting.

//---------------------------------------------------------------------------------------------------------------------------//

// 4.Fix the below to alert Guvi geek

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let admin=9, fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// admin = fname+lname;
// alert( admin ); // "Guvi geek"

// Answer: The Expected output is with space between Guvi & geek. we  have to add the space to the admin in script.

// script.js

 let admin=9, fname=10.5; 
 fname = "Guvi";
 lname = "geek"
 admin = fname+" "+lname;
 alert( admin ); // "Guvi geek"

//---------------------------------------------------------------------------------------------------------------------------//

// 5.Fix the below to alert hello Guvi geek

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let fname=10.5; 
// fname = "Guvi";
// lname = "geek"
// let name = fname+lname;
// alert( 'hello ${name}' );

// Answer:
// script.js

// let fname=10.5; 
// fname = "Guvi";
// let lname = "geek"
// let name = fname+" "+lname;
// alert( `hello ${name}` );

//--------------------------------------------------------------------------------------------------------------------------//

// 6.Fix the below to alert sum of two numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// Answer:

let a = prompt("First number?");
let b = prompt("Second number?");
alert(Number(a) + Number(b));

//---------------------------------------------------------------------------------------------------------------------------//

// 7.Fix the below to alert sum of two numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(a + b);

// Answer:

// let a = prompt("First number?");
// let b = prompt("Second number?");
// alert(Number(a) + Number(b));

//--------------------------------------------------------------------------------------------------------------------------//

// 8.If you run the below scritpt you will get “Code is Blasted”
// Explain Why the Code is blasted and how to diffuse it and get “Diffused”.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// var a1 = "2" > "12";
// //Don't touch below this
// if (a1) {
//   console.log("Code is Blasted")
// }
// else
// {
//   console.log("Diffused") 
// }

// Answer:

// When comparing two strings, "2" will be greater than "12", because (alphabetically) 1 is less than 2. so the Code is Blasted as the condition was True.
// To diffuse it ,variables should be converted to the proper type before comparison.

var a1 = 2 > 12;
//Don't touch below this
if (a1) {
  console.log("Code is Blasted")
}
else
{
  console.log("Diffused") 
}

//--------------------------------------------------------------------------------------------------------------------------//

// 9.How to get the success in console.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let a = prompt("Enter a number?");
// //Don't modify any code below this
// if (a) {
//  console.log( 'OMG it works for any number inc 0' );
// }
// else
// {
//  console.log( "Success" );
// }

// Answer: If an empty input is passed, the variable that store data would become false and hence we get success.

//---------------------------------------------------------------------------------------------------------------------------//

// 10.How to get the correct score in console.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let value = prompt('How many runs you scored in this ball');
// if (value === 4) {
//       console.log("You hit a Four");
// } else if (value === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

// Answer: The input value is considered as a String so we need to change the input value to Number to get the correct score in console.

// let value = prompt('How many runs you scored in this ball');
// if (Number(value) === 4) {
//       console.log("You hit a Four");
// } else if (Number(value) === 6) {
//       console.log("You hit a Six");
// } else {
//       console.log("I couldn't figure out");
// }

//---------------------------------------------------------------------------------------------------------------------------//

// 11.Fix the code to welcome the Employee

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let login = 'Employee';
// let message = (login == 'Employee') ? :
//   (login == 'Director') ? 'Greetings' :
//   (login == '') ? 'No login' :
//   '';
// console.log(message);

// Answer:

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
let login = 'Employee';
let message = (login == 'Employee') ? 'Greetings' : 'No login';
console.log(message);

//--------------------------------------------------------------------------------------------------------------------------//

// 12.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// // You cant change the value of the msg
// let message1;
// if (null || 2 || undefined )
// {
//  let message1 = "welcome boss";
// }
// else
// {
//  let message1 = "Go away";
// }
//   console.log(message1);

// Answer:

let message1;
if (null || 2 || undefined )
{
  message1 = "welcome boss";
}
else
{
  message1 = "Go away";
}
  console.log(message1);

//---------------------------------------------------------------------------------------------------------------------------//

// 13.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let message;
// let lock = 2;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);
// Answer:
// let message;
// let lock;
// //Dont change any code below this 
// if (null || lock || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
//   console.log(message);

//---------------------------------------------------------------------------------------------------------------------------//

// 14.Fix the code to welcome the boss

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let message;
// let lock = 2;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);


// Answer:

// let message;
// let lock;
// //Dont change any code below this
// if (lock && " " || undefined )
// {
//   message = "Go away";
// }
// else
// {
//  message = "welcome";
// }
// console.log(message);

//--------------------------------------------------------------------------------------------------------------------------//

// 15.Change the code to print
// 3
// 2
// 1

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// //You can change only 2 characters
// let i = 3;
// while (i) {
//   console.log( --i );
// }

// Answer:

let i = 3;
while (i) {
  console.log( i-- );
};

//--------------------------------------------------------------------------------------------------------------------------//

// 16.Change the code to print 1 to 10 in 4 lines

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let num = 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)
// num += 1
// console.log(num)

// Answer:

let num = 1;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num+" "+(num+1)+" "+ (num+2));
num += 3;
console.log(num);

//--------------------------------------------------------------------------------------------------------------------------//

// 17.Change the code to print even numbers

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// //You are allowed to modify only one character 
// for (let num = 2; num <= 20; num += 1) {
//   console.log(num)
// }
// Answer:

for (let num = 2; num <= 20; num += 2) {
    console.log(num)
  }

//--------------------------------------------------------------------------------------------------------------------------//

// 18.Change the code to print all the gifts

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let gifts = ["teddy bear", "drone", "doll"];
// for (let i = 0; i < 3; i++) {
//   console.log('Wrapped ${'gifts[i]'} and added a bow!');
// }

// Answer:

let gifts = ["teddy bear", "drone", "doll"];
for (let i = 0; i < 3; i++) {
  console.log(`Wrapped ${gifts[i]} and added a bow!`);
}

//---------------------------------------------------------------------------------------------------------------------------//

// 19.Fix the code to disarm the bomb.

// fix.html
// <!DOCTYPE html>
// <html>
// <body>
//  <script src=”script.js”></script>
// </body>
// </html>

// script.js
// let countdown = 100;
// while (countdown > 0) {
//   countdown--;
//   if(countdown == 0)
//   {
//    console.log("bomb triggered");
//   }
// }

// Answer:

let countdown = 0;
while (countdown > 0) {
  countdown--;
  if(countdown == 0)
  {
   console.log("bomb triggered");
  }
}

//---------------------------------------------------------------------------------------------------------------------------//

// 20.Whats the msg printed and why?

// var lemein = “0”;
// var lemeout = 0;
// var msg = “”;
// if (lemein) {
//  msg += “hi”;
//  }
// if (lemeout) {
//  msg += ‘Hello’;
// }
// console.log(msg);

// Answer:

// The Output of the msg is "hi".
// The lemein "0" is a considered as a string so the output comes. whereas the lemeout  0 is considered as Number and 0 is false so the if condition fails

//----------------------------------------------------------------------------------------------------------------------------//

// 21.Whats the msg printed and why? Guess you Answer before running it.

var lemein = "0";
var lemeout = 0;
var msg = "";
if (lemein) {
 msg += "hi";
 }
if (lemeout) {
 msg += 'Hello';
}
console.log(msg);


// Answer: hi