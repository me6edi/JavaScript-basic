// This is a comment single line
/*
This is a comment multi line
*/

// Variable

console.log('This is just for consol test');
// alert('This is alart')

// var myVariableName = 20,
//     secondVariable = 'stringvalue',
//     another, lastOne;

//     myVariableName = another;

// console.log(myVariableName);
// console.log(secondVariable);
// console.log(another);

// // Data type

// var number = 1;
// var string = 'Hi, there'; 
// var quote = '"Hello", How are you?';

// var array = [5,'Hi, there?', true]; //arry[0]

// console.log(array[1])

// var object = {
//     myNumber : 10,
//     myString : 'Hello',
// }
// console.log(object['myString'])

// //operators 
// var addition = 1 + 1;
// var substraction= 2 - 1;
// var multiplication = 3 * 3;
// var division = 6/2;
// var remainder = 5%2;
// var postfix = 5;
// var prefix = 10;

// var assignAddition = 10;
//     assignAddition += 1;

// console.log(assignAddition)

//object

// var object1 = {property1 : true,
//     property2 : 'Hello',
// };


// var one = "Hi, there?";
// var oneObject = new String('Hi, there?');

//Function

// function getColor (color){
//     var things = {
//         red: 'A Red Color',
//         blue: 'A Blue Color'

//     };

//     return things[color] || "Not Found"
// }

// function myFunc(){
//     //console.log("Hello")
//     return true;
// }

// var otherFunc = function(){
//     console.log("yahoo");
// }
// console.log(myVariable);
// var myVariable = "How are you";
// console.log(newVar);
(function newFunc(){
    console.log('invoked automatically');
}());
!function anotherFunc(){
    console.log('invoked automatically too');
}();

var world = 100;

(function localFunc(){
    var local = 'local variable'

    console.log(world)
    console.log(local)
}());

(function thisFunc(){
    'use strict'
    console.log(this);
    
    var object = {
        property : 'Hi, I am This',
        method: function(){
            return this.property;
        }
    }

    console.log(object.method());
}());
