// Certain keywords in javascript are reserved and cannot be used 
 
/*  >>>>>> reference this https://www.w3schools.com/js/js_reserved.asp


//keyword .................... varable ...............assignment ..........value

let ..............................myvariable ................. =..............."is this"
    

    >>>>>>  Global variables
*/

var myGlobalvariable = "hi im a global variable"; // dont use var


// block  - scoped - variables


const myConst = 7; // camnot be overridden

/* myConst = 10; // throws type error >>>>>>>>>>>>> TypeError: Assignment to constant variable. */
let myLet = "pizza"; // let can be overriden they are mutable (or can be changed)

myLet = "orange"

console.log(myLet) // so then we get orange back let decides depending on position of assignment 


// let and var can be declared without initialization 

/* let uninitLet
var uninitVar

console.log(uninitLet, uninitVar); // undefined undefined >>>>>>>>>> we need to define them first */


let uninitLet
var uninitVar

uninitLet = "see this "
uninitVar = "this wont"

console.log(uninitLet, uninitVar) 

/* ┌─[dawit@LAPTOP-4A1TTFUL] - [~/coursework/unit2-1] - [Tue Apr 18, 19:29]
└─[$]> node variable.js
Debugger attached.
orange
see this  this wont
Waiting for the debugger to disconnect.... */
.