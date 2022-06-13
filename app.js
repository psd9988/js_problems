// Practice Problems

// 1. Write a  program to accept two integers and check whether they are equal or not.
// Test Data : 15 15
// Expected Output :
// Number1 and Number2 are equal

/* Your answer here*/

// My answer number 1:-

// let num1 = 15;
// let num2 = 15;

// if(num1 === num2){
//     console.log(`Number1 and Number2 are equal`);
// }


















// let a = 356;

// let first_number = Math.floor(a%10);

// let second_number = 152%100;

// second_number = Math.floor(second_number/10);

// let third_number = Math.floor(a/100);

// let reverse = first_number*100 + second_number*10 + third_number;

// console.log(reverse);





























// 2. Write a  program to check whether a given number is even or odd.
// Test Data : 15
// Expected Output :
// 15 is an odd integer
// Your answer here

// Answer no 2 below:-

// let num = 15;

// if(num%2 === 0){
//     console.log(num, `is an even integer`);
// }
// else{
//     console.log(num, `is an odd integer`);
// }




// 3. Write a  program to check whether a given number is positive or negative.
// Test Data : 15
// Expected Output :
// 15 is a positive number
/* Your answer here*/

  // Answer no 3 below:-



// let Num = 15;
// if(num > 0){
//     console.log(Num, `is a positive number`);
// }
// else if(num < 0){
//     console.log(Num, `is a negative number`);
// }
// else{
//     console.log(Num, `is zero`);}

  




// 4. Write a  program to find whether a given year is a leap year or not.
// Test Data : 2016
// Expected Output :
// 2016 is a leap year.
/* Your answer here*/

  // Answer no 4 below:-

  // let Year = 2200;

  // if(Year%4==0 && Year%100!=0 || Year%400==0 ){
  //   console.log(Year,'Leap year');
  // }
  // else{
  //   console.log(Year,'Not a leap year');
  // }





















// 5. Write a  program to read the age of a candidate and determine whether it is eligible for casting his/her own vote.
// Test Data : 21
// Expected Output :
// Congratulation! You are eligible for casting your vote.
/* Your answer here*/

  // Answer no 5 below:-

  // let age = 16;

  // if(age >= 18){
  //   console.log(`Congratulations! You are eligible for casting your vote.`);
  // }
  // else{
  //   console.log(`Sorry! You are not eligible for casting your vote.`);
  // }




















// 6. Write a program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
// Test Data : -5
// Expected Output :
// The value of n = -1
/* Your answer here*/

  // Answer no 6 below:-


  // let m = -5;

  // if(m > 0){
  //   console.log(`The value of n = 1`);
  // }
  // else if(m === 0){
  //   console.log(`The value of n = 0`);
  // }
  // else{
  //   console.log(`The value of n = -1`);
  // }



















// 7. Write a  program to accept the height of a person in centimeter and categorize the person according to their height.
// Test Data : 135
// Expected Output :
// The person is Dwarf.
/* Your answer here*/

  // Answer no 7 below:-

  // let height = 200;

  // if(height <= 135){
  //   console.log(`The person is Dwarf.`);
  // }
  // else if(height <= 150){
  //   console.log(`The person is Short.`);
  // }
  // else if(height <= 175){
  //   console.log(`The person is Medium.`);
  // }
  // else if(height <= 200){
  //   console.log(`The person is Tall.`);
  // }























// 8. Write a program to find the largest of three numbers.
// Test Data : 12 25 52
// Expected Output :
// 1st Number = 12,        2nd Number = 25,        3rd Number = 52
// The 3rd Number is the greatest among three
/* Your answer here*/


  // Answer no 8 below:-

  // let num1 = 12;
  // let num2 = 105;
  // let num3 = 52;

  // if(num1 > num2 && num1 > num3){
  //   console.log(`1st Number =`,num1, `2nd Number =`, num2, `3rd Number =`, num3);  
  //   console.log(`The 1st Number is the greatest among three`);
  // }
  // else if(num2 > num1 && num2 > num3){
  //   console.log(`1st Number =`,num1, `2nd Number =`, num2, `3rd Number =`, num3);
  //   console.log(`The 2nd Number is the greatest among three`);
  // }
  // else{
  //   console.log(`1st Number =`,num1, `2nd Number =`, num2, `3rd Number =`, num3);
  //   console.log(`The 3rd Number is the greatest among three`);
  // }





// 9. Write a  program to accept a coordinate point in a XY coordinate system and determine in which quadrant the coordinate point lies.
// Test Data : 7 9
// Expected Output :
// The coordinate point (7,9) lies in the First quadrant.
/* Your answer here*/


  // Answer no 9 below:-
  
  // let x = 7;
  // let y = 9;

  // if(x > 0 && y > 0){
  //   console.log(`The coordinate point (${x},${y}) lies in the First quadrant.`);
  // }
  // else if(x < 0 && y > 0){
  //   console.log(`The coordinate point (${x},${y}) lies in the Second quadrant.`);
  // }
  // else if(x < 0 && y < 0){
  //   console.log(`The coordinate point (${x},${y}) lies in the Third quadrant.`);
  // }
  // else if(x > 0 && y < 0){
  //   console.log(`The coordinate point (${x},${y}) lies in the Fourth quadrant.`);
  // }








// 10. Write a  program to find the eligibility of admission for a professional course based on the following criteria:
// Eligibility Criteria : Marks in Maths >=65 and Marks in Phy >=55 and Marks in Chem>=50 and Total in all three subject >=190 or Total in Maths and Physics >=140

// Input the marks obtained in Physics :65
// Input the marks obtained in Chemistry :51
// Input the marks obtained in Mathematics :72
// Total marks of Maths, Physics and Chemistry : 188
//  Total marks of Maths and Physics : 137
// Expected Output :
// The candidate is not eligible for admission.

/* Your answer here*/


  // Answer no 10 below:-

  // let Physics = 65;
  // let Chemistry = 51;
  // let Maths = 72;
  // let Total = 188;
  // let totalMathsPhysics = 137;

  // if(Physics >= 65 && Chemistry >= 55 && Maths >= 50 && Total >= 190 || totalMathsPhysics >= 140){
  //   console.log(`The candidate is eligible for admission.`);
  // }
  // else{
  //   console.log(`The candidate is not eligible for admission.`);
  // }











// 11. Write a program to calculate the root of a Quadratic Equation.
// Test Data : 1 5 7
// Expected Output :
// Root are imaginary;
// No solution.
/* Your answer here*/


  // Answer no 11 below:-





















// 12. Write a program to read roll no, name and marks of three subjects and calculate the total, percentage and division.
// Test Data :
// Input the Roll Number of the student :784
// Input the Name of the Student :James
// Input the marks of Physics, Chemistry and Computer Application : 70 80 90
// Expected Output :
// Roll No : 784
// Name of Student : James
// Marks in Physics : 70
// Marks in Chemistry : 80
// Marks in Computer Application : 90
// Total Marks = 240
// Percentage = 80.00
// Division = First
/* Your answer here*/


  // Answer no 12 below:-


    // let rollNo = 784;
    // let name = "James";
    // let physics = 70;
    // let chemistry = 80;
    // let computerApplication = 90;
    // let total = physics + chemistry + computerApplication;
    // let percentage = total / 300 * 100;
    // let division;

    // if(percentage >= 75){
    //   division = "First";
    // }
    // else if(percentage >= 60){
    //   division = "Second";
    // }
    // else if(percentage >= 45){
    //   division = "Third";
    // }
    // else{
    //   division = "Fail";
    // }

    // console.log(`Roll No : ${rollNo}`);
    // console.log(`Name of Student : ${name}`);
    // console.log(`Marks in Physics : ${physics}`);
    // console.log(`Marks in Chemistry : ${chemistry}`);
    // console.log(`Marks in Computer Application : ${computerApplication}`);
    // console.log(`Total Marks = ${total}`);
    // console.log(`Percentage = ${percentage}`);
    // console.log(`Division = ${division}`);


     


// 13. Write a program to read temperature in centigrade and display a suitable message according to temperature state below :
// Temp < 0 then Freezing weather
// Temp 0-10 then Very Cold weather
// Temp 10-20 then Cold weather
// Temp 20-30 then Normal in Temp
// Temp 30-40 then Its Hot
// Temp >=40 then Its Very Hot
// Test Data :
// 42
// Expected Output :
// Its very hot.
/* Your answer here */


  // Answer no 13 below:-

  // let temp = 42;

  // if(temp < 0){
  //   console.log(`Freezing weather`);
  // }
  // else if(temp >= 0 && temp <= 10){
  //   console.log(`Very Cold weather`);
  // }
  // else if(temp >= 10 && temp <= 20){
  //   console.log(`Cold weather`);
  // }
  // else if(temp >= 20 && temp <= 30){
  //   console.log(`Normal in Temp`);
  // }
  // else if(temp >= 30 && temp <= 40){
  //   console.log(`Its Hot`);
  // }
  // else{
  //   console.log(`Its Very Hot`);
  // }











// 14. Write a program to check whether a triangle is Equilateral, Isosceles or Scalene.
// Test Data :
// 50 50 80
// Expected Output :
// This is an isosceles triangle.
/* Your answer here */


  // Answer no 14 below:-

  // let a = 50;
  // let b = 50;
  // let c = 80;

  // if( a+b+c == 180 && ((a+b)>c || (b+c)>a || (a+c)>b) && (a!=0 && b!=0 && c!=0)){
	//   console.log("VALID");
	//   if( a==b && b==c){  // a==b==c
 	// 	  console.log("EQUILALTERAL");
	//   }else if(a==b || b==c || c==a){
	// 	  console.log("ISOSCELES");
	//   }else{
	// 	  console.log("SCALENE");
	//   }
  // }else{
	//   console.log("NOT VALID");
  // }























// 15. Write a program to check whether a triangle can be formed by the given value for the angles.
// Test Data :
// 40 55 65
// Expected Output :
// The triangle is not valid.
/* Your answer here */


  // Answer no 15 below:-

  // let a = 40;
  // let b = 55;
  // let c = 65;

  // if( a+b+c == 180 && ((a+b)>c || (b+c)>a || (a+c)>b) && (a!=0 && b!=0 && c!=0)){
  //   console.log("The triangle is valid.");
  // }
  // else{
  //   console.log("The triangle is not valid.");
  // }







// 16. Write a program to check whether a character is an alphabet, digit or special character.
// Test Data :
// @
// Expected Output :
// This is a special character.
// Hint: ASCII character
/* Your answer here */


  // Answer no 16 below:-






// 17. Write a  program to check whether an alphabet is a vowel or consonant.
// Test Data :
// k
// Expected Output :
// The alphabet 'k' is a consonant.
/* Your answer here */


  // Answer no 17 below:-

  // let alphabet = "k";

  // if(alphabet == "a" || alphabet == "e" || alphabet == "i" || alphabet == "o" || alphabet == "u"){
  //   console.log(`The alphabet '${alphabet}' is a vowel.`);
  // }
  // else{
  //   console.log(`The alphabet '${alphabet}' is a consonant.`);
  // }

 



// 18. Write a program to calculate profit and loss on a transaction.
// Test Data :
// Input buy price: 500
// Input sell price: 700
// Expected Output :
// You have made a profit of : 200
/* Your answer here */


  // Answer no 18 below:-

  // let buyPrice = 500;
  // let sellPrice = 700;
  // let profit = sellPrice - buyPrice;
  // let loss = buyPrice - sellPrice;

  // if(profit > 0){
  //   console.log(`You have made a profit of : ${profit}`);
  // }
  // else if(loss > 0){
  //   console.log(`You have incurred a loss of : ${loss}`);
  // }
  // else{
  //   console.log("No profit or loss.");
  // }





// 19. Write a program  to calculate and print the Electricity bill of a given customer. The customer id., name and unit consumed by the user should be taken from the keyboard and display the total amount to pay to the customer. The charge are as follow :

// Unit Charge/unit
// upto 199 @1.20
// 200 and above but less than 400  @1.50
// 400 and above but less than 600  @1.80
// 600 and above    @2.00
// If bill exceeds Rs. 400 then a surcharge of 15% will be charged and the minimum bill should be of Rs. 100/-

// Test Data :
// 1001
// James
// 800
// Expected Output :
// Customer ID-NO :1001
// Customer Name :James
// unit Consumed :800
// Amount Charges @Rs. 2.00 per unit : 1600.00
// Surchage Amount : 240.00
// Net Amount Paid By the Customer : 1840.00
/* Your answer here */


  // Answer no 19 below:-

  // let customerId = 1001;
  // let customerName = "James";
  // let unitConsumed = 800;
  // let amountCharges = 0;
  // let surcharge = 0;
  // let netAmount = 0;

  // if(unitConsumed <= 199){
  //   amountCharges = unitConsumed * 1.2;
  // }
  // else if(unitConsumed >= 200 && unitConsumed < 400){
  //   amountCharges = unitConsumed * 1.5;
  // }
  // else if(unitConsumed >= 400 && unitConsumed < 600){
  //   amountCharges = unitConsumed * 1.8;
  // }
  // else if(unitConsumed >= 600){
  //   amountCharges = unitConsumed * 2;
  // }

  // if(amountCharges > 400){
  //   surcharge = amountCharges * 0.15;
  // }
  // else{
  //   surcharge = 0;
  // }

  // netAmount = amountCharges + surcharge;

  // console.log(`Customer ID-NO :${customerId}`);
  // console.log(`Customer Name :${customerName}`);
  // console.log(`unit Consumed :${unitConsumed}`);
  // console.log(`Amount Charges @Rs. 2.00 per unit :${amountCharges}`);
  // console.log(`Surchage Amount :${surcharge}`);
  // console.log(`Net Amount Paid By the Customer :${netAmount}`);



















// 20. Write a program to accept a grade and declare the equivalent description :

// Grade    Description
// E    Excellent
// V    Very Good
// G    Good
// A    Average
// F    Fail
// Test Data :
// Input the grade :A
// Expected Output :
// You have chosen : Average
/* Your answer here*/


  // Answer no 20 below:-

  // let grade = "E";

  // if(grade == "E"){
  //   console.log("You have chosen : Excellent");
  // }
  // else if(grade == "V"){
  //   console.log("You have chosen : Very Good");
  // }
  // else if(grade == "G"){
  //   console.log("You have chosen : Good");
  // }
  // else if(grade == "A"){
  //   console.log("You have chosen : Average");
  // }
  // else if(grade == "F"){
  //   console.log("You have chosen : Fail");
  // }
  // else{
  //   console.log("Invalid Grade");
  // }














 

// 21. Write a program to read any day number in integer and display day name in the word.
// Test Data :
// 4
// Expected Output :
// Thursday
/* Your answer here */


  // Answer no 21 below:-

  // let day = 4;

  // if(day == 1){
  //   console.log("Monday");
  // }
  // else if(day == 2){
  //   console.log("Tuesday");
  // }
  // else if(day == 3){
  //   console.log("Wednesday");
  // }
  // else if(day == 4){
  //   console.log("Thursday");
  // }
  // else if(day == 5){
  //   console.log("Friday");
  // }
  // else if(day == 6){
  //   console.log("Saturday");
  // }
  // else if(day == 7){
  //   console.log("Sunday");
  // }
  // else{
  //   console.log("Invalid Day");
  // }






// 22. Write a program to read any digit, display in the word.
// Test Data :
// 4
// Expected Output :
// Four
/* Your answer here */


  // Answer no 22 below:-

  // let digit = 4;

  // if(digit == 0){
  //   console.log("Zero");
  // }
  // else if(digit == 1){
  //   console.log("One");
  // }
  // else if(digit == 2){
  //   console.log("Two");
  // }
  // else if(digit == 3){
  //   console.log("Three");
  // }
  // else if(digit == 4){
  //   console.log("Four");
  // }
  // else if(digit == 5){
  //   console.log("Five");
  // }
  // else if(digit == 6){
  //   console.log("Six");
  // }
  // else if(digit == 7){
  //   console.log("Seven");
  // }
  // else if(digit == 8){
  //   console.log("Eight");
  // }
  // else if(digit == 9){
  //   console.log("Nine");
  // }
  // else{ 
  //   console.log("Invalid Digit");
  // }











// 23. Write a program to read any Month Number in integer and display Month name in the word.
// Test Data :
// 4
// Expected Output :
// April
/* Your answer here */


  // Answer no 23 below:-

  // let month = 4;

  // switch(month){
  //   case 1:
  //     console.log("January");
  //     break;
  //   case 2:
  //     console.log("February");
  //     break;
  //   case 3:
  //     console.log("March");
  //     break;
  //   case 4:
  //     console.log("April");
  //     break;
  //   case 5:
  //     console.log("May");
  //     break;
  //   case 6:
  //     console.log("June");
  //     break;
  //   case 7:
  //     console.log("July");
  //     break;
  //   case 8:
  //     console.log("August");
  //     break;
  //   case 9:
  //     console.log("September");
  //     break;
  //   case 10:
  //     console.log("October");
  //     break;
  //   case 11:
  //     console.log("November");
  //     break;
  //   case 12:
  //     console.log("December");
  //     break;
  //   default:
  //     console.log("Invalid Month");
  // }








// 24. Write a program to read any Month Number in integer and display the number of days for this month.
// Test Data :
// 7
// Expected Output :
// Month have 31 days


  // Answer no 24 below:-

  // let month = 7;

  // switch(month){
  //   case 1:
  //     console.log("Month have 31 days");
  //     break;
  //   case 2:
  //     console.log("Month have 28 days");
  //     break;
  //   case 3:
  //     console.log("Month have 31 days");
  //     break;
  //   case 4:
  //     console.log("Month have 30 days");
  //     break;
  //   case 5:
  //     console.log("Month have 31 days");
  //     break;
  //   case 6:
  //     console.log("Month have 30 days");
  //     break;
  //   case 7:
  //     console.log("Month have 31 days");
  //     break;
  //   case 8:
  //     console.log("Month have 31 days");
  //     break;
  //   case 9:
  //     console.log("Month have 30 days");
  //     break;
  //   case 10:
  //     console.log("Month have 31 days");
  //     break;
  //   case 11:
  //     console.log("Month have 30 days");
  //     break;
  //   case 12:
  //     console.log("Month have 31 days");
  //     break;
  //   default:
  //     console.log("Invalid Month");
  // }

