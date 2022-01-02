// This is a comment single line
/*
This is a comment multi line
*/

// Variable

// console.log('This is just for consol test');
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
// (function newFunc(){
//     console.log('invoked automatically');
// }());
// !function anotherFunc(){
//     console.log('invoked automatically too');
// }();

// var world = 100;

// (function localFunc(){
//     var local = 'local variable'

//     console.log(world)
//     console.log(local)
// }());

// (function thisFunc(){
//     'use strict'
//     console.log(this);
    
//     var object = {
//         property : 'Hi, I am This',
//         method: function(){
//             return this.property;
//         }
//     }

//     console.log(object.method());
// }());

// var myClass = 200
// console.log(myClass)
// (function(){
//     'use strict';
    // if(true == false){
    //     console.log('we well see this')
    // }
    // else{
    //     console.log('this is from else statement')
    // }
    // if(1){
    //     console.log('')
    // }
    // var array = ['item1'];
    // if(array.length){
    //     console.log(array[0]);
    // }

    // (true) ? console.log('This is true - a ternary ternary truethy value') : console.log('This is a falsy value')



//     //switch
//     var switcher = 'one';
//     switch(switcher){
//         case 'one':
//             console.log('one');
//             break;
//         case 'two':
//             console.log('two')
//             break;
//     }
// // for loop 
// var anArray = ['item1','item2','item3'];
// for (var x = 0; x < anArray.length; x++){
//     console.log(anArray[x]);
// }
// //for in loop 
//     var anObject = {
//         prop1 : 'property1',
//         prop1 : 'property2',
//         prop3 : 'property3'
//     };
//     for (var prop in anObject){
//         if(anObject.hasOwnProperty(prop)){
//             console.log(anObject[prop]);
//         }
//     }
//     //while loop
//     var limit = 0;
//     while(limit < 5){
//         if(limit==3){
//             break;
//         }
//         console.log(limit+=1)
//     }
    // //do while
    // var exe = true;
    // do{
    //     console.log('once');
    //     break;
    // }while(exe)

    // //setTimeout
    // function log(msg){
    //     console.log(msg)
    // }

    // setTimeout(function(){
    //     log('hello!!');
    // },2000);

    // //setInterval
    // function inter(){
    //     console.log('this is interval');
    //     counter+=1;

    //     if(counter === 5){
    //         clearInterval(intervalID)
    //     }
    // }
    // var intervalID = setInterval(inter, 1000);
    // var counter = 0;

    //String

// }());

(function(){
    'use strict';

    // var testString = 'test string';

    // console.log(testString.length);
    // console.log(testString.split(' '));
    // console.log(testString.indexOf('t', 1));
    // console.log(testString.lastIndexOf('t'));


    // console.log(testString.toUpperCase());
    // console.log(testString.toLowerCase());

    // console.log(testString.substring(3))
    // console.log(testString.substring(0,4))

    // console.log(testString.slice(5))
    // console.log(testString.slice(-2))

    // console.log('    this  '.trim());

    var array1 = ['one', 'two', 'three','four'];
    console.log(array1.length);

    array1.push('five');
    array1.unshift('zero');
    array1.pop();
    array1.splice(0,2);
    array1.splice(0,4,'a','b','c','d');
    array1.reverse();
    array1.sort();
    console.log(array1);

    var array2 = [20,30,100,10];
    array2.sort();

    console.log(array2);




}())

