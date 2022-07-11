//Q1 Store Mark's and John's mass and height in variables.

let massMark = 95;  //weight is in kgs
let heightMark = 1.82 //height in meters

let massJohn = 88;
let heightJohn = 1.68;

//Q2 Calculate both their BMIs and store their BMIs in variables. 



const bmiMark = massMark / (heightMark * heightMark) ;
const bmiJohn = massJohn / (heightJohn * heightJohn);

//Q3 Create a boolean variable containing information about whether Mark has a higher BMI than John.

const trueValue = "true";
const falseValue = "false";



//Q4 Print a string to the console containing the variable from step 3 using string interpolation. (e.g. "Is Mark's BMI higher than John's? Why yes, it's [boolean], it is"). 



console.log("Is Mark's BMI higher than John's? " ,bmiMark > bmiJohn ?   `yes, it's ${trueValue}, value is ${bmiMark}` :`no it is ${falseValue}`);

//Q5 Create an *if* statement which prints the name and BMI of the person with the highest BMI. 

if(bmiMark > bmiJohn ){

    console.log(`BMI of mark ${bmiMark} is greater than BMI of John ${bmiJohn}`);
}
else{
    console.log(`BMI of John ${bmiJohn} is greater than BMI of Mark ${bmiMark}`);
}

