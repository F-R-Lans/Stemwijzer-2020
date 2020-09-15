/*note on for loop 
for (initialExpression, condition, incrementExpression) {
    statements
}
initial expression defines an expression
condition compares the initial expression, as long as the value is true, the for loop will run
incrementExpression; add an operator to increment the initial expression


for(let i = 0; i <5;) {
    console.log('hello World');
}
i = index/loop variable
i<5: run as long as the value of i is less than 5, a value above 5 means the condition is not met
++ = increment operator
statements run as long as the for loop runs

*/


//define vars
var Question_Number = 0; //question number starts at 0 and counts up
var Answers = []; //answers are stored in an array
var Final_Results = [] //final results are stored in an array
    /*for(var r = 0; r<parties.length; r++) {
        final_results[r]={"name":parties[r].name, "points":0}; 
    } console.log(final_results); old code to log final results*/

//define opinion id's
const Short = document.getElementById("Opinion_Short");
const Long = document.getElementById("Opinion_Long");
const Choice = document.getElementById("Results");

//onclick Generates Question (onclick->start_survey->show question)
function Start_Survey() {
    ShowQuestion();
    document.getElementById("Start_Button").style.display = "none";
    document.getElementById("Question_Buttons").style.display = "block";
    console.log("Question_Buttons");
}
//TODO: make Start_Button dissapear on onclick

//short.inner is title, long.inner is statement
function ShowQuestion() {
    Short.innerHTML = subjects[Question_Number].title;
    Long.innerHTML = subjects[Question_Number].statement;
};

/*AddAnswer function saves given answer in an array
function AddAnswer()

//NextQuestion function looks if answer is given and goes to next question 
function NextQuestion()

//Calc_Results function calculates results, compares with party position, and adds to array if matches.button
function Calc_Results()

//Show_Final_Results function prints out the final results 

function Show_Final_Results() */