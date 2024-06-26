/**
 * Sefat Monzor
 * June 15, Function and Object
 */
console.log('Sefat Monzor') //Using as reference for prof 

//defining function 
//This function does not have any parameter
function msg(){
      console.log("Hello World")
}

//function to print numbers between 1 and 3, inclusive
function printcount(){   //I have to write/ CALL the function name in the console
      for(let x = 1; x <=3; x++){
            console.log(x)
      }
}

//How to pass an argument, 
//we use parrameter to pass an argument 
//parameters are the placeholders for the variables. 


//function that passes a name as argument
function greetings(name){
      console.log(`Welcome to JavaScript ${name}`)
}

//function that passes multiple arguments 
function fullname(firstname, lastname){
      console.log(`Welcome to JS, ${firstname} ${lastname[0]}`) //The zero will only print the first letter of my last name 
      //if i put any number in my varibale, it will be undefined in this case, bcz there is no index in the number
}

//Function without parameter but return value 
function sumxy(){
      let x = 10
      let y = -2
      return x+y  //This is the end of the function
      //  x = 10
      //  y = -2
      // return x+y
      //after the 1st return statement, the function will stop executing
}

//function with parameters and return a value 
function sum (x,y){
      return x + y
      //when in console, sum("3", "5") is given, it will return 35. concatenation of the two strings
}
//calling sum()
let s = sum(5, 10)
console.log(`The sum is ${s}`)

//function check if a number is postitive 
function checkpositive(num){
      if(num>0){
            return true
      }
      else{
            return false 
      }
}
//call the function 
//declaring the value of a number in the program first 
let n = -5  
let check = checkpositive(n)
console.log(`is number ${n} postive? ${check}`)

//save a function in a variable annonymous function 
// function  sum = function(num1, num2){
//       return num1 + num2}
//Can also be used let instead of const
//CONST is used when the value of the variable is not going to change
//Const is like locking the variable 
const addition = function(num1, num2){ //This is an annonymous function
      return num1 + num2
}

//regular variable function 
// const product = function(num1, num2){return num1 * num2}

//ARROW FUNCTION
//Arrow function is a shorter way to write a function
const product = (num1, num2) => {return num1 * num2}

//ANNONYMOUS FUNCTION
//The function does not have a name
(
      function(){
            console.log("This is an annonymous function")
      }
)();

(
      ()=> {console.log("This is an annonymous function using arrow")}
)();

//OBJECT 
//Real world objects are all around us and they each have properties ad behaviors that can describe 
//attributes describe the features that an object has. 
//behaviors describe actions that an object can perform

//car is the object 
let car = {
      //attributes MEANING PROPERTIES of the car inside the curly bracket
      make:"Ford", 
      year: 2021,
      color:"red",
      model:"Mustang",
      startmileage: 10,
      endmileage: 50,

      //Methods = the functions are the behavior of the car 
      //Accelerate is the name of the function/method 
      accelerate: function(){return this.model},
      //returning a property of this same object, so we sue This keyword
      brake: function(){return this.make},    
      distancetravel:function(){return this.endmileage - this.startmileage}
}

//add a method 'start' to the car object 
car.start = function(){
      return `${this.make} of ${this.model} is running`
}

//add a property 'price'
car.price = 30000

