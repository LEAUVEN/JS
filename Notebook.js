/* That's My Learning Javascript Journey with Programming with JavaScript from Meta in Coursera. This will also work as a notebook and blog. I will share all the codes I wrote and my experiences. */ 
/* Week 1 Reading: Reading Exercise: Declaring variables */ 
/* Tasks
Declare a new variable named petDog and give it the name Rex.

Declare a new variable named petCat and give it the name Pepper.

Console.log the petDog variable.

Console.log the petCat variable.

Console.log the text "My pet dog's name is: " and the petDog variable.

Console.log the text "My pet ceat's name is: " and the petCat variable.

Declare another variable and name it catSound. Assign the string of "purr" to it.

Declare another variable and name it dogSound. Assign the string of "woof" to it.

Console.log the variable petDog, then the string "says", then the variable dogSound.

Console.log the variable petCat, then the string "says", then the variable catSound.

Reassign the value stored in catSound to the string "meow".

Console.log the variable petCat, then the string "now says", then the variable catSound.

Make sure to output all your variables. Feel free to play. 
*/ 

/* My Codes : 
var petDog="Rex"
var petCat="Pepper"
console.log(petDog)
console.log(petCat)
console.log("My pet dog's name is :",petDog)
console.log("My pet cat's name is :",petCat)
var catSound="purr"
var dogSound="woof"
console.log(petDog," says:",dogSound)
console.log(petCat," says:",catSound)
catSound="meow"
console.log(petCat," now says:",catSound)
*/

/* Outputs: 
Rex
Pepper
My pet dog's name is : Rex
My pet cat's name is : Pepper
Rex  says: woof
Pepper  says: purr
Pepper  now says: meow
*/ 
/* Exercise: Advanced use of operators
Task 1: Using the logical && operator
You are coding an RPG game, where each character has certain skill levels based on the value saved in their score.

Create a variable named  score and set it to  8

Use console.log() that includes the string "Mid-level skills:" and compares the score variable to above 0 and below 10 using the && operator

The expected output in the console should be: "Mid-level skills: true".

CODE : "
var score=8;
console.log("Mid-level skills:",score  > 0 && score  < 10)
"
Task 2: Using the logical || operator
Imagine you are coding a video game. Currently, you’re about to code some snippets related to the game over condition.

You need to code a new variable named timeRemaining and set it to 0. You also need to code a new variable named energy and set it to 10.

Next, you should write a piece of code that could be used to determine if the game is over, based on whether either the value of the timeRemaining variable is 0 or the value of the energy variable is 0.

Complete the task using the following steps:

Declare the variable timeRemaining, and assign the value of 0 to it.

Declare the variable energy, and assign the value of 10 to it.

Console log the following parameters: "Game over: ", and timeRemaining == 0 || energy == 0

Note that the expected output in the console should be: "Game over: true".

CODE : "
var timeRemaining=0;
var energy=10;
console.log("Game over: ",timeRemaining==0 ||energy == 0)
"
Task 3: Using the modulus operator, %, to test if a given number is odd
You need to code a small program that takes a number and determines if it's an even number (like 2, 4, 6, 8, 10).

To achieve this task, you need to declare six variables, as follows:

The first variable, named num1,  should be assigned a number value of 2.

The second variable, named num2, should be assigned a number value of 5.

The third variable, named test1, should be assigned the calculation of num1 % 2. Note: executing this code will return a number.

The fourth variable, named test2, should be assigned the calculation of num2 % 2. Note: executing this code will also return a number.

The fifth variable, named result1, should be assigned the result of comparing if the number stored in the test1 variable is not equal to 0, in other words, this: test1 == 0.

The sixth variable, named result2, should be assigned the result of comparing if the number stored in the test2 variable is not equal to 0, in other words, test2 == 0.

Run console log two times after you've set the variables:

The first console log should have the following code between parentheses: "Is", num1, "an even number?", result1

The second console log should have the following code between parentheses: "Is", num2, "an even number?", result2

Note: The output to the console should be as follows:

Is 2 an even number? true

Is 5 an even number? false

CODE : "
var num1=2
var num2=5
var test1=num1 % 2
var test2=num2 % 2
let result1 = test1 == 0;
let result2 = test2 == 0;
console.log("Is",num1,"an even number?",result1)
console.log("Is",num2,"an even number?",result2)
"
Task 4: Add numbers using the + operator
Console log the result of adding two numbers, 5 and 10, using the + operator.

Note: This task should be completed on a single line of code. The output in the console should be 15.
CODE : "
console.log(5+10)
"

Task 5: Concatenate numbers and strings using the + operator
Code three variables:

The first variable should be a string with the following value: "Now in ". Name the variable now.

The second variable should be a number with the value: 3. Name the variable three.

The third variable should a string with the following value: "D!". Name the variable d.

Console log the following code: now + three + d.

Note: The expected output should be: "Now in 3D!".

CODE : "
var now="Now in "
var three=3
var d="D!"
console.log(now+three+d)
"

Task 6: Use the += operator to accumulate values in a variable
Code a new variable and name it counter, assigning it to the value of 0.

On the next line, use the += operator to increase the value of counter by 5.

On the next line, use the += operator to increase the value of counter by 3.

On the fourth line, console log the value of the counter variable.

Note: The output value should be 8.

CODE : "
var counter=0
counter+=5
counter+=3
console.log(counter)
"

Exercise: Practice conditional statements

Introduction
In this exercise, you will practice working with if else statements. By the end of this exercise, you will be able to write an if else statement that determines your source of income based on your age. You will also be able to write a switch statement that determines your evening routine based on the day of the week.

Complete the following steps to create: Are You Old Enough? 
Declare a variable age using the var keyword and set it to the number 10.

Add an if statement that checks if the value of the age variable is greater than or equal to the number 65. Inside the if block, console.log the sentence: "You get your income from your pension".

Add an "else if",  where you'll check if the value of the age is less than 65 and greater than or equal to 18. Inside this "else if" block, type "console.log" and then "Each month you get a salary".

Add another "else if", and this time check if the value of the age is under 18. Inside the "else if" block, "type console.log" and then "You get an allowance".

Add an "else" statement to capture any other value. Inside the block, type "console.log" and then "The value of the age variable is not numerical".

Try adjusting the age and executing the program to see how it will affect the output.

Code the days of the week program as a switch statement
On the next line, define a new variable, name it day, and set its value to "Sunday".

Start coding a switch statement, passing the day variable as the expression to evaluate.

Inside the switch, add cases for every day of the week, starting with 'Monday', and ending with 'Sunday'. Make sure to use string values for days. Inside each case, for now, just add a console.log('Do something'), and add a break; on the line below.

At the very bottom of the switch statement, add the default case and add a console.log('There is no such day').

Finally, update the console.log calls for each case, based on whatever activity you have on each of the days.

Tips
If you need to make sure that multiple conditions are true in an if statement, you can do so using the && operator

In JavaScript, the correct syntax of the "greater than or equal to" operator is: >=.

Don't forget to add a break at the very end of each case in a switch statement.

Note: You can find solutions in a separate reading (following this one)

CODE : " 
var age=10
if (age>=65){
    console.log("You get your income from your pension")
    }
else if (age<65 && age>=18){
    console.log("Each month you get a salary")
}
else if (age<18){
    console.log("You get an allowance")
    }
else {
    console.log("The value of the age variable is not numerical")
}

let day = "Sunday";
switch (day) {
  case "Monday":
    console.log("Start the work week");
    break;
  case "Tuesday":
    console.log("Continue working");
    break;
  case "Wednesday":
    console.log("Middle of the week");
    break;
  case "Thursday":
    console.log("Almost there");
    break;
  case "Friday":
    console.log("Weekend is coming");
    break;
  case "Saturday":
    console.log("Enjoy your weekend");
    break;
  case "Sunday":
    console.log("Relax and recharge");
    break;
  default:
    console.log("There is no such day");
}
"
Exercise: Repetitive tasks with loops
In this exercise, you will practice writing "for" and "while" loops.

Task 1
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
for (let i=1;i<6;i++){
    console.log(i)
    }
console.log('Counting completed!')
Task 2 
Write a "for" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
for(let i=5;i>0;i--){
    console.log(i)

}
console.log('Countdown finished!')
Task 3
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
let i=1
while(i<6){

    console.log(i)
    i++
}
console.log('Counting completed!')
Task 4
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
let i=5
while(i>0){
    console.log(i)
    i--
}
console.log('Countdown finished!')
Task 5
Write a "while" loop that will perform exactly the same repetitive code as this:
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)
let i=2018
while(i<2023){
    console.log(i)
    i++

}*/ 