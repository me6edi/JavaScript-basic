// singleline Comment
// console.log("I am first Line");


// Multiline Comment
/*console.log ("I am second Line");
document.write('JS file is connected');*/


// document.write(67);


//User Input in JS
/*var x;
x = prompt("Enter your name ");
document.write(x)
console.log(x)*/


// JavaScritpt Variables
/*var a;
let b;
a = 45;
console.log(a);
a = 35;
b = "Mehedi";
console.log(a);
console.log(b);
a = "Mehedi Amin"
console.log(a)*/
/*var a = 20;
var b = a;
console.log(a);
console.log(b);
a = 30;
console.log(a);
console.log(b);*/

/*var a = 20;
var b = 10;
var c = a + b;
console.log(c)

var MyName, myName;
MyName = "abcd";
myName = "efgh";
console.log(MyName);
console.log(myName);

var a = 20;
console.log(a);
var a;
console.log(a)*/

// javaScript Constants
// const a;
// a = 10;
// var b;
// b = 20
// console.log(b)

// kywords

// var,const,do,else
 
// Operator
// Arithmetic Operators
// 2 + 4
//  + - * / %

//Increment a++ / ++a
// a++; a = a+1;
// Increment a++ / ++a
// var a = 5;
// var b = 7;

// var c, d;
// c = a++;
// d = ++b;
// console.log(c);
// console.log(a);
// console.log(d);
// console.log(b);

// //decrement  e++ / ++f
// console.log("Decrement  e-- / --f")

// var e = 5;
// var f = 7;

// var g, h;
// g = e--;
// h = --f;
// console.log(g);
// console.log(e);
// console.log(h);
// console.log(f);

//BODMAS
// a = 3 - 5 * 5 / 7 + 4**4;
// console.log(a);

//String Operator
// NaN = > Not a Number


//Comparison Operators

// 10<20,30>10,1<=10,1<=-3,1 <= 2
// var a = (5>4);
// console.log(a)


//Logical Operators
// &&,||,!

//Conditional Operators
// var a = (10 < 18) ? "Hello":"World";

//Assignment Operator
// var a = 19;
// a = a + 12;
// a +=12 

// Exercise JS

// var celcius = window.prompt("Please enter a temperature:");
// var fahrenheit = (9/5*celcius+32)
// window.alert("Fahrenheit: " + fahrenheit + " Degree")
// console.log("Task Complete!")

// Numbers datatype
// var x;
// x = 3.141
// console.log(x)

//Strings
// x = "ABC"
// x.concat("D")
// x.concat(z,"EFG","1234")

//Booleans
// x = 10;
// y = 20;
// z = x<y;
// u = x>y;
// console.log(z)
// console.log(u)

// Arry1
// var countries = ["Bangladesh", "USA", "UK"]
// console.log(countries)
// console.log(countries[0])

// Arry2
// var number = []
// number.push(12)
// number.push(13)
// number.push("Two")
// console.log(number)
// var x = "Bangladesh"
// var y = x.split("")
// console.log(y)
// console.log(x)

//Ojects
// var arr = [1,2,3]
// console.log(arr)
// var student = {name: "Rahim", age:25, hometown: "Dhaka"}
// console.log(student)

// var student1 = {
//     name: "Mehedi",
//     roll: "179500",
//     age: "19",
//     department: "Computer",
//     Shift: "2nd"
// }

// console.log(student1.department)

// arry and Object
// var arr = [10, 12, 8, 9];
// arr = [10, 12,["a","b"], 8, 9];
// console.log(arr);
// console.log(arr[2]);
// console.log(arr[2][0]);
// arr2 = [1,2,["a", ["word1", "word2"], "b"], 7,18];
// console.log(arr2);
// console.log(arr2[2][1][0]);

// arr3 = [1,2,["a","b"], {prop1:"Item 1", prop2:"Item 2"}];
// console.log(arr3[3]["prop2"])
// console.log(arr3);

//undefined, Empty Value, null, NaN (Not anumber)
// var a;
// a == undefined
// console.log(a)

// Primitive Types
// number, string, boolean
// let a = 7;
// let b = a;
// a = 45;
// console.log(b)

// Reference Types
// array, object
// let numbers = [1,2,3];
// let newNumbers = numbers;
// console.log(newNumbers);
// numbers[1] = [500];
// console.log(numbers)
// console.log(newNumbers)

// Template literals (ES6)
// Backtick ``
// console.log(`First Line
// second line`)
// let a = `First line
// second line`
// console.log(a)
// let age = 36;
// console.log(`His age is ${age}`)

// let name = "Rahim";
// let age = "38";
// let dob  = "21 June, 1983";

// console.log(`His name is ${name}
// His age is ${age}
// Date of Birth ${dob}
// `)

// let a = 34
// let b = 67
// console.log(`The result is ${ a + b }`);

// Condition If Else Statement
// if (false){
//     console.log("If Statement Executed");
// }
// else{
//     console.log("Else Statemnet Executed!");
// }

// var age = prompt();

// if (age >= 50){
//     console.log("Old!");
// }
// else{
//     console.log("Under 50!")
// }

// var age = prompt();

// if ( age >= 50 ){
//     console.log("Old!");
// }
// else if (age < 50 && age >= 30 ){
//     console.log("Under 50 but above or equal 30!");
// }
// else if (age < 30 && age >= 18){
//     console.log("Under 30 but above or equal 18");
// }
// else if( age < 18 && age > 0 ){
//     console.log("Under 18!");
// }
// else{
//     console.log("Invalid Input!")
// }

//Find the largest number
// var n1 = prompt("First number: ");
// var n2 = prompt("Second number: ");
// var n3 = prompt("Third number: ");
// n1 = parseInt(n1); // 10
// n2 = parseInt(n2); // 20
// n3 = parseInt(n3); // 30

// if ( n1 >= n2 && n1 >= n3) {  // 50 >= 30 && 50 >= 20
//     console.log(n1 + " is the largest number!");
// }
// else if(n2 >= n1 && n1 >= n3){ // 30 >= 50 && 50 >= 20
//     console.log(n2 + " is the largest number!");
// }
// else{
//     console.log(n3 + " is the largest number!");
// }

// if (n1 >= n2 ){ // 10 >= 20
//     if (n1 >= n3){ //10 >= 30
//         console.log(n1 + " n1 is the largest number!")
//     }
//     else{
//         console.log(n3 + " n3 is the largest number!")
//     }
// }else{
//     if(n2 >= n3){ // 20 >= 30
//         console.log(n2 + " n2 is the largest number!")
//     }
//     else{
//         console.log(n3 + " n3 is the largest number!")
//     }
// }


// Switch

// console.log("Select an option:\na. Option 1 \nb. Option 2 \nc. Option 3 ");

// choice = prompt();

// var text;

// switch(choice){
//     case "a" : 
//         text = "Option 1 Selected!"
//         break;

//     case "b" : 
//         text = "Option 2 Selected!"
//         break;

//     case "c" : 
//         text = "Option 3 Selected!"
//         break;

//     default:
//         text = "No option is selected!";
//         break;
// }
// var day;
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Unknown Day";
// }

// while loop
 
// infinite loop
    // while(true){
    //     console.log("Hello World")
    // }

// var x = 1;
// while(x < 5){
//     console.log("Hello world")
//     x++;
// }

// var i = 1;

// while (i <= 10){   
//         console.log('Value of i: ' + i);
//         i++;     
//     }
// console.log("Out of the loop")
// var i = 1;

// while(i <= 10){
//     if(i == 4){
//         console.log("Value of i is " + i);
//     }

//     console.log(i);
//     i++;
// }

// for loop
var i = 1
for (i = 1; i<10; i++){
    console.log("Hello Mehedi")
}