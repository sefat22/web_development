console.log("Sefat Monzor")
// for (initial_value; loop condition; update_initial_value){ }
// for = syntax
// initial value = initializer 
// loop condition = condiation to repeat the loop 
// update_initial_value = changes the initial values/modifier 


console.log("======= Example 1: for loop as a counter ======")
let i = 1; //initializing the variable 
for(i; i < 5; i++ )//3 statements inside the for loop, the i++ modifier simply means that the i value will be changed each time the loop is run
      {
            console.log(`iteration = ${i}`)
      }


console.log("======= Example 2: for loop as a decrement counter ======")
//create a loop counter from 10 to 0
for(let n = 10; n > 0; n--){ // n-- = n-1
      console.log(`iteration = ${n}`)
}

console.log("======= Example 3: Condition inside the loop ======")
//Check how many even numbers are in between -5 and 5
let counter = 0 
for(let m = -5; m<5; m++){
      console.log(`iteration = ${m}`) //1. at first we will check if the loop and iteration works or not
      if(m%2 === 0 && m !== 0){ //at this point we are checking if the numbers are even 
            // now that we set the condition to find the even numbers we have to find how many even numbers are there?
            // to count the even numbers we need a counter, we are setting a counter on line 25, outside the for loop
            counter++
            }
}
console.log(`There are total ${counter} even numbers. `)

console.log("======= Example 4: While loop as a counter ======")
//display number from 0 to 4
// Need an initial value to start the while loop 

let p = 0;
while(p <= 4){
      console.log(`number = ${p}`)
      p++   // here i did not think about the counter
      //but if i dont use the counter the initial value of p = 0, is always the same and it will not increase. 
      //and if it does not increase it will always be less than 4. 
      //as a result the loop will keep running and running which will be infinity loop
      //to protect our code from infinity loop we need to add counter. 
}

console.log("======= Example 5: While loop application ======")
//guess number game 

// first declaring the secret number, using constant 
const SECRET = 8
//what does prompt do? = It creates a small pop up box where the user can write their inputs 
let guessnumber = (prompt('Guess a number between 1 to 10'))
//So when we use prompt, everything comes out as a string. So to get the integer value we use parseInt

//================== Using While loop ==================
while(guessnumber !== SECRET){
      guessnumber = parseInt(prompt('Guess a number between 1 to 10'))
}
console.log(`Great! You guessed it! The secret number is ${SECRET}`)

//================== Using If else statement ==================
      // if(guessnumber == SECRET){
      //       console.log('Congratulations! You won')
      // }
      // else{
      //       console.log('Try again!')
      // }

console.log("======= Example 6: Using while loop in a list ======")
//In this problem i have to find 
let colors =['magenta','olive','babyblue']
let sizeofcolors = colors.length
console.log(sizeofcolors)
let index = 0
while(index < sizeofcolors ){
      console.log(colors[index])
      index++
}

console.log("======= Example 7: While loop to simulate a password log-in ======")
//terminate the loop if password fails in three attempts 
const password = 'peterpan'
let userpassword = prompt('Enter a password: ')
numberattempt = 0   //counter 
while(userpassword !== password){
      numberattempt++
      if(numberattempt>2){
            console.log('Your account is locked!')
            break
      }
      userpassword = prompt(`You have ${3-numberattempt} attempts left. Enter a password again`)
}
console.log('Have a good day!')

console.log("======= Example 8: Do-While loop to simulate a withdraw from a bank account ======")
//The difference between while and do-while loop is that do-while loop will run at least once
// Difference is it will run the do statement first and check if it works
//user try to withdraw money from an account with balance of $1000
let withdraw = 0
let balance = 1000
do{
//whatever is inside the do loop will run once and check if the while statement is true
//if true it will run do again 
//and will run while again
//if false it will go to the next line 
withdraw = parseInt(prompt("How much you want to withdraw?"))
if(withdraw <= balance){
      balance = balance - withdraw 
      break // we need to break after the money is withdrawn. Otherwise it will keep asking how much we want to withdraw
}
else{
      console.log("Insuffiient balance. Try again.")
}
}while(withdraw > balance)
console.log(`Your new balance is ${balance}`)
//We use backticks when we need to display a variable 

console.log("======= Exercise ======")
// 1. simulate the collection of a pin number of 4 digits 
// 2. Ask the user to pick a transaction: view the balance, deposit and withdraw.--- flow control (if, else if, else)
// 3. ask the user if they want another transaction.
// 4. print results  
// 2 and  will be combined using do and while 

const pin = 1234 //This is the correct password 
//creating a prompt for user to put pin
userpin = parseInt(prompt("Enter your 4 digit pin number: "))
pinattempt = 0
while(pin !== userpin){
      //1. when pin is not equal to userpin, it will ask user to try again. 
      //2. but it cannot have unlimited try. So we need a counter 
      pinattempt++
      if(pinattempt>2){
            prompt('Your account is locked')
      }
      userpin = parseInt(prompt(`You have ${3-pinattempt} attempts left. Enter your 4 digit pin number: `))
}
console.log('Welcome to you account!')

