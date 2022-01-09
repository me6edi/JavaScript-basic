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

// (function(){
//     'use strict';

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

    // var array1 = ['one', 'two', 'three','four'];
    // console.log(array1.length);

    // array1.push('five');
    // array1.unshift('zero');
    // array1.pop();
    // array1.splice(0,2);
    // array1.splice(0,4,'a','b','c','d');
    // array1.reverse();
    // array1.sort();


    // var array2 = [20,30,100,10];
    // array2.sort(function(a,b){
    //     if(a < b){
    //         return -1;
    //     }else if(a === b){
    //         return 0;
    //     }else{
    //         return 1;
    //     }
    // });
    // console.log(array2);

    // console.log(array1.join(""));

    // array1.indexOf('c');
    // console.log(array1)
    // var array = ['one','two','three'];
    // array.forEach(function(value,index){
    //     console.log('This is the value' + value + 'and this is the index number' + index)
    // });
    // console.log(array.every(function(value){
    //     return typeof value === 'string'
    // }));
    
    // console.log([1, 'one', 'five', 7,8].filter(function(value){
    //     return typeof value !== 'number';
    // }));

    // console.log(array.map(function(value){
    //     return value.toUpperCase();
    // }));

    // console.log([1,2,3,4,5].reduce(function(total,value){
    //     return total += value;
    // },100));


// }());
// (function(){
//     'use strict'

//     var myObject = {};
//     var myArray = [1,2,3,4];
//     console.log(myObject.constructor);
//     console.log(myArray.constructor);

//     console.log(myObject.hasOwnProperty('constructor'));
//     myObject.newProperty = "New Property";
//     console.log(myObject.hasOwnProperty('newProperty'));

//     console.log(myObject.propertyIsEnumerable('constructor'));
//     console.log(myObject.propertyIsEnumerable('newProperty'));

//     console.log(myObject.toString());
//     console.log(myArray.toString());

//     console.log(Object.prototype.toString.call([]));
// }());
 
// (function(){
//     'use strict';
//     var newFunc = function newFunc(arg1, arg2, arg3){
//         return arg1+arg2+arg3;
//     };
//     console.log(newFunc.length);

//     var person = {
//         name: "Dan",
//         profession: "developer"
//     }; 
//     function hello(user1){
//         return console.log('Hi '+ user1 +' , My name is ' + this.name + 'and my profession is ' + this.profession);
//     }
//     hello.call(person ,'mehedi');

//     function introduce(us1, us2){
//         return console.log('Hi ' + us1 + ' and ' + us2 + this.name + ', do you feel good as a '+ this.profession);
//     }
//     function declare(mode, object, argu){
//         mode.apply(object, argu);
//     }
//     declare(hello, person, ['Amin']);
//     declare(introduce, person, ['Mark', 'Bob']);

//     function addToCart(price){
//         if(!this.total){
//             this.total = 0;
//         }
//         this.total += price;
//         return this.name + ' , your total cart is $' +this.total; 
//     }
//     var dansCart = addToCart.bind(person,3);
//     console.log(dansCart(50));
//     console.log(dansCart(100));
//     console.log(dansCart(99));

//     var bob = {
//         name: "Bob"   
//     }
//     var bobsCart = addToCart.bind(bob,10);
//     console.log(bobsCart(50));
//     console.log(bobsCart(100));
//     console.log(bobsCart(99));
// }());

// (function(){
//     'use strict';

//     var newDate = new Date();
//     console.log(newDate);
//     console.log(typeof(newDate));

//     var dob = new Date("february 10 1998");
//     console.log(dob);

//     var anotherDate = new Date('2002 , 1, 23');
//     console.log(anotherDate)

//     console.log(dob.getDate());
//     console.log(dob.getMonth());
//     console.log(dob.getTime());
//     console.log(dob.getFullYear());

//     console.log(dob.getUTCDate());
//     console.log(dob.getUTCDay());
//     console.log(dob.getUTCMonth());
//     console.log(dob.getFullYear());

//     console.log(dob.getDay());
//     console.log(dob.getUTCDay());

//     console.log(dob.toString());
//     console.log(dob.toUTCString());
//     console.log(dob.toTimeString());
//     console.log(dob.toISOString());
//     console.log(dob.toLocaleString());
// }());

(function(){
    'use strict';

    console.log(Math.PI);
    console.log(Math.ceil(1.2));
    console.log(Math.floor(1.2));
    
}())