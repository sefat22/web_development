console.log("Sefat Monzor")
console.log("==== Example 1 : if statement ==== ")
let day = true;//lowercase boolean for js

if (day){
      console.log("Good morning!")
}
//The console will only print the message if the boolean value is true


console.log("==== Example 2: if-else statement ==== ")
//if-else is like a switch, when if statement is true it will print if statement
let n1 = 5, n2 = 8 

if(n1===n2){    ///=== checks if two values are exactly equal, same value and same data type=
      console.log("They are equal")
}
else{
      console.log("They are different")
}

console.log("==== Example 3: multiway condition statement ==== ")
//check if a number is positive, negative, or zero 
//even if we write it as a string it will think it is a number 
//but symbols will be undefined 
let number = 9
if (number>0){
      console.log(`Number ${number} is positive`)
}
else if(number<0){
      console.log(`Number ${number} is negative`)
}
else if(number===0){
      console.log("The number is zero")
}
else{
      console.log(`${number} is undefined!`)
}

console.log("==== Example 4:  multiway condition statement in prompt function ==== ")
//check if a user enters a number, didnt enter anything or pressed cancel button 
let n = prompt("Enter a number: ")

//when we press cancel the console prints null
if(n===null){
      console.log("Cancel was pressed")
}
else if(n===""){
      console.log("Ok button is pressed")
}
//if user typed in number 
else if(isNaN(n)){
      console.log(`${n} is a string`)
}
//isNaN is a boolean function that returns if the value is a number or not 
else{
      console.log(`${n} is a number`)
}

console.log("==== Example 4:  nested conditional statement ==== ")
//check if a password has at least 6+ characters and no space 
let password = prompt("Enter a password")

//to find the number of characters in a string we use the method .length
if(password.length>=6){
      console.log(`Password ${password} has ${password.length} characters`)
      if(password.indexOf(" ")=== -1) {//if there is no space in the password it enters -1 
            console.log(`Password ${password} has NO SPACE`)
      }
      else{
            console.log(`Password ${password} HAS SPACE`)
      }
}
else{
      console.log(`Password ${password} has less than 6 characters`)
}
//To find a letter in a word, we use .index method. 
//if its not in the word, it will give back -1.

console.log("========= EXERCISE ==========")
let value = prompt("Enter a value: ")
console.log(typeof(value))
if(value>0){
      console.log(`${value} is a positive number`)
}
else if(value<0){
      console.log(`${value} is a negative number`)
}
else if(value===0){
      console.log(`${value} is zero`)
}
else{
      console.log(`${value} is not a number`)
}

console.log("============= Example 6: LIST ============")
//in variable we can only store one value 
//But in list we can store more than one value

let colors = ['yellow','megenta', 'red', 'olive', 'orange', 'babyblue', 'hotpink'] 
//we had 5 colors in list, but then we added more colors later on in the list 
//declaring a list 
//list elements will be inside a square bracket
//if we need a specific value from the list, we use index numbers starting from 0 the leftmost and onwards 1, 2, 3,

console.log(`The third color is ${colors[2]}`) 
//To print write the list name, and the index number inside the square braket 

let selectcolor = prompt("Example 6: Select a color using an index")
switch(selectcolor){
      case '0':
            console.log(`Selected color = ${colors[0]}`)//instead of using color, we can also use the index, then no matter what the color list is, and if it is updated, it will give the value automatically. More dynamic
            break
      case '1':
            console.log(`Selected color = ${colors[1]}`)
            break
      case '2':
            console.log(`Selected color = ${colors[2]}`)
            break
       case '3':
            console.log(`Selected color = ${colors[3]}`)
            break
      case '4':
            console.log(`Selected color = ${colors[4]}`)
            break
      default:
            console.log('Color is not in the list')
}


console.log("============= Example 7: STRING ============")
let greeting ="Good evening"
console.log(`The seventh character ${greetig[6]}`)





































