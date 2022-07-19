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

// var i = 1
// for (i = 1; i<10; i++){
//     console.log("Hello Mehedi")
// }
// for (var j = 1; j <= 5; j++){
//     console.log(j);
// }

// for (var k = 5; k >= 1; k--){
//     console.log("Hello world")
// }

// for(var i = 1; i<5; i++){
//     console.log(i);
//     if(i==3){
//         break
//     }
// }

//String

// let name = "Bangladesh";

// for(var i = 0; i<=10; i++){
//     console.log('Index : ${i}');
//     console.log(name[i]);
// }

// let name = "Hello World";
// let len = name.length;

// for(var i = 0; i<=len; i++){
//     console.log('Index : ${i}');
//     console.log(name[i]);
// }

// For-in string /array/object
// For-of string/array
// let name = "I am learnig Javascript!";
// let food =  ["Cake", "Chocolate","Ice Cream"];
// let person = {
//     name: "Shakib Al Hasan",
//     pofession: "Cricketer",
//     team:"Bangladesh",
//     age:33,
// }
// for (var x in name){
//     console.log('index ${x} and item ${ name[x] }');
// }

// function saysomethig(){
//     var a = prompt("Enter your first number: ");
//     var b = prompt("Enter you second number: ");
//     var c = parseInt(a) + parseInt(b);
//     console.log("The sum of " +a+ " and " +b+ " is: "+ c);
// }
// saysomethig();

// function saysomethig(){
//     console.log(fname,lname)
// }
// let fname = "Mehedi"
// let lname = "Amin"
// saysomethig(fname,lname)

// function addNum(a = 0,b = 0){
//     return a+b;
// }
// console.log(addNum(4,5));
// addNum(3.6,5.5)


// let person1 = {
//     firstname: "Fazle",
//     lastname: "Rahat",
//     dob: "10-02-1997",

//     fullname: function(){
//         console.log('${this.firstname} ${this.lastname}');
//     }
// }

// let person2 = {
//     firstname: "Mehedi",
//     lastname: "Rahat",
//     dob: "10-02-1998",

//     fullname: function(){
//         console.log('${this.firstname} ${this.lastname}');
//     }
// }
// console.log(person1);
// console.log(person2);

// class Person{
//     constructor(){
//         this.firstname = 'Fazle';
//         this.lastname = "Rahat";
//         this.dob = '11-15-51991'
//     }
// }
// let person1 = new Person();
// console.log(person1);

// Constructor function for Person objects
 
// const person = {
//     fname: 'Mehedi',
//     lname: 'Amin',
//     age: 35,
    
// };
// console.log(person.name)

// Constructor function for Person objects
// class Polygon {
//     constructor() {
//       this.name = 'Polygon';
//     }
//   }
  
// const poly1 = new Polygon();
  
// console.log(poly1.name);

// let person = {
//     firstname:"Mehedi",
//     lastname: "Amin",
//     dob: "9-10-1995",

//     fullname: function(){
//         return '${this.firstname} ${this.lastname}';
//     }
// }
// console.log(person.firstname);
// console.log(person.fullname());

// let str = "Mehedi Amin";
// console.log(str.length);
// console.log(str.split);

// let val;
// val = Math.PI;
// val = Math.E;
// val = Math.round(3.5);
// val = Math.ceil(1.1);
// val = Math.floor(1.9);
// val = Math.sqrt(81);
// val = Math.abs(-81);
// val = Math.pow(2,3);
// val = Math.min(1, 8, -8, 1, 0);
// val = Math.max(1, 8, -8, 1, 0);
// val = Math.random();

// val = Math.floor(Math.random() * 100 + 1);

// console.log(val)

// date object
// let val;
// let today = new Date();
// let birthday = new Date('08-26-1997 11:25:27');

// val = today;
// val = today.toString();
// val = birthday;
// console.log(val);
// let  today = new Date();
// let val = today.getMonth();
// console.log(val);


// var and let and cost
// let and cosnt (ES6)

// var a = 10;
// a = a + 7

// var a;

// let b = 6;
// b = b*67;
// let b;

// Global Scope 
// var a = 1;
// let b = 2;
// const c = 3;

// console.log('Globla Scope: ', a, b, c);

// function test(){
//     var a = 4;
//     let b = 5;
//     const c = 6;
//     console.log("Functions Scope: ", a,b,c);
// }
// test();

// console.log('Global Scope :', a, b, c)


// class (ES6)

// let person1 = {
//     firstname: "Fazle",
//     lastname: "Rahat",
//     dob: "11-13-1995",

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// let person2 = {
//     firstname: "Fazle",
//     lastname: "Rahat",
//     dob: "11-13-1995",

//     fullname: function(){
//         console.log(`${this.firstname} ${this.lastname}`);
//     }
// }

// console.log(person1)
// console.log(person2)

// class Person{
//      constructor(fname,lname,dob){
//          this.firstname = fname;
//          this.lastname = lname;
//          this.dob = dob;
//      }

//      calculateAge(){
//          let birthday = new Date(this.dob);
//          let diff = Date.now() - birthday.getTime();
//          let ageDate = new Date (diff);
//          return Math.abs(ageDate.getUTCFullYear() - 1970);
//      }
// }

// let person1 = new Person("Fazle", "Rahat", "11-13-1995");
// let person2 = new Person('Fazle','Rahat' ,'11-13-1995');
// let person3 = new Person('Fazle','Rahat' ,'11-13-1995');

// console.log(person1.calculateAge());

// class Person{
//     constructor(fname, lname){
//         this.firstname = fname;
//         this.lastname = lname;
//     }

//     greeting(){
//         return `Hello ${this.firstname} ${this.lastname}!`;
//     }
// }

// class Customer{
//     constructor(){
//         this.firstname = fname;
//         this.lastname = lname;
//         this.phone = phone;
//         this.memberShip = this.memberShip;
//     }
// }

// let person1 = new Person("Fazle","Rahat")

// console.log(person1)


// Sub class
// Inheritance

// class Person{ //Base
//     constructor(fname,lname)
//     {
//         this.firstname = fname;
//         this.lastname = lname;
//     }

//     greeting(){
//         return `hello ${this.firstname} ${this.lastname}!`;
//     }

//     fullname(){
//         console.log(this.firstname,this.lastname)
//     }
// }

// class Customer extends Person{ //subclass
//     constructor(fname, lname,phon,memberShip){
//         super(fname,lname);
//         this.phone = phone;
//         this.memberShip = memberShip;

//     }
// }
// let person1 = new Person("Mehedi", "Amin");
// console.log(person1)
// console.log(person1.greeting());

// class Person{ 
//     constructor(fname,lname)
//     {
//         this.firstname = fname;
//         this.lastname = lname;
//     }

//     greeting(){
//         console.log(`Hello ${this.firstname} ${this.lastname}!`);
//     }

//     static test(){
//         console.log("I am static function")
//     }
// }

// let person1 = new Person("Mehedi" , "Amin")
// console.log(person1.greeting())
// console.log(Person.test())

// class Mycar{
//     constructor(name,year,color){
//         this.name = name;
//         this.year = year;
//         this.color = color;
//     }
// }

// let Car1 = new Mycar("BMW\n",1995,"Red");
// console.log("Name of car:",Car1.name,"Name of year:",Car1.year,"Name of color:",Car1.color)

// let val;
// val = this;
// val = window;
// val = window.document;
// val = document.all;
// val = document.all[2];
// val = document.all.length;
// val = document.head;
// val = document.body;
// val = document.title;
// val = document.doctype;
// val = document.URL;
// console.log(val);

// document.getElementById

// let val;
// val = document.getElementById('document-title');
// val = document.getElementById('document-title').id;
// val = document.getElementById('document-title');

// // Changing Style

// document.getElementById('document-title').style.background = '#3333'
// document.getElementById('document-title').style.color = 'red';
// document.getElementById('document-title').style.padding = '10px';
// document.getElementById('document-title').style.display = 'block'

// // Changing Content
// document.getElementById('document-title').textContent = "New Title"
// document.getElementById('document-title').innerText = 'Again New Title'
// document.getElementById('document-title').innerHTML = "<i>Welcome</i>"
// val = document.getElementById('document-title');
// val.innerText = "Ha ha ha"

// console.log(val)

// Multiselector

// document.getElementsByClassName()

// let list = document.getElementsByClassName('sample-class');
// list[0].style.background = 'red';
// list[0].style.color = 'white';
// list[0].style.padding = '10px';
// list[0].textContent = "Hello World";

// // console.log(list[0]);
// // document.getElementsByTagName()

// // list = document.getElementsByTagName('li');
// list = document.querySelector('ol');
// console.log(list);

/*

// Traversing the DOM

let val;
let list = document.querySelector('ul');
let listItem = document.querySelector('ul li:last-child');

val = list;
val = listItem;

// Get Child Nodes
val = list;
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[1];
val = list.childNodes[2].nodeType;
val = list.childNodes[1].nodeName;
val = list.childNodes[0].nodeType;

// 1 Element
// 2 Attribute
// 3 Text Node
// 8 Comment
// 9 Document Itself
// 10 Doctype


val = list.children;
val = list.children[0].textContent = 'Hello';
val = list.children[1].children[0];
val = list.children[1].children[0].href;

val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

val = list.childElementCount;

val = listItem;

console.log(val); 

*/

// // Adding Element to DOM
// // Create Element
// let olItem = document.createElement('li');
// // add Id and class 
// olItem.className = "a new another-class";
// olItem.id = 'new-element';

// //Add attribute
// olItem.setAttribute('title', 'A title to new Element');

// olItem.appendChild(document.createTextNode('JavaScript'));
// console.log(olItem);

// document.querySelector('ol').appendChild(olItem);
// //console.log(olItem);

// let ulItem = document.createElement('li');
// let link = document.createElement('a');

// link.appendChild(document.createTextNode("Twitter"));

// link.setAttribute('href','https://www.Twitter.com/');

// ulItem.appendChild(link);

// document.querySelector('ul').appendChild(ulItem);

// console.log(ulItem)
// // console.log(link)

// // Replacing Elements
// let newHeading = document.createElement('h1');
// newHeading.appendChild(document.createTextNode("H1 New Heading"));
// newHeading.className = "Sample class";

// let oldHeading = document.querySelector('h3');



// console.log(newHeading)

// Remove Element

// let listItem = document.querySelectorAll('li');
// let list = document.querySelector('ul');

// // listItem[0].remove();
// // listItem[5].remove();

// // list.removeChild(listItem[0]);

// list.classList.add('test');
// list.classList.add("test-new");

// list.classList.add('sample-class');

// let val = list.hasAttribute('title');
// list.setAttribute('title', "New Title");

// list.removeAttribute("title")

// console.log(val);

// console.log(list);
// console.log(listItem);



// Events of JavaScript
// Onclick

// Event Listener

document.getElementById('btn').addEventListener('mouseover', message)
document.querySelector('.container').style.background = 'red'
function message(e){
    let val = e;
    val = e.target;
    val = e.target.id;

    val = e.timeStamp;
    val = e.type;
    val = e.clientY;
    val = e.clientX;
    val = this;

    console.log(val)


    this.style.background = '#${e.offsetX}'

    // console.log(val);
    console.log(e.ofsetX);
    console.log(e.offsetY);
}

