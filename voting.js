//define vars
var Question_Number = 0; //question number starts at 0 and counts up
var Answers = []; //answers are stored in an array
var Final_Results = [] //final results are stored in an array
for (var i = 0; i < parties.length; i++) {
    Final_Results[i] = { "name": parties[i].name, "points": 0 };
} // initializes Final_Results array with 0 points

//define opinion id's
const Short = document.getElementById("Statement_Short");
const Long = document.getElementById("Statement_Long");
const Choice = document.getElementById("Final_Results");

//onclick Generates Question (onclick->start_survey->show question) (done)
function Start_Survey() {
    ShowQuestion();
    document.getElementById("Question_Buttons").style.display = "block";
    document.getElementById("Start_Button").style.display = "none";
}

//ShowQuestion generates questions given in data.js.short.inner is title, long.inner is statement (done)
function ShowQuestion() {
    Short.innerHTML = subjects[Question_Number].title;
    Long.innerHTML = subjects[Question_Number].statement;
}

//AddAnswer function saves given answer in an array (works, not sure why yet)
function AddAnswer(Answer, VoteCount) {
    Answers[Question_Number] = Answer;
    NextQuestion(VoteCount)
}


//NextQuestion function looks if answer is given and goes to next question (done)
function NextQuestion(counter) {
    if (subjects[Question_Number]) {
        if (counter == 'next' && Question_Number != subjects.length - 1) {
            Question_Number++
            ShowQuestion();
        } else if (counter == 'previous' && Question_Number != 0) {
            Question_Number--
            ShowQuestion();
        } else if (counter == 'next' && Question_Number != subjects.length) {
            Calc_Results();
        }

    }
}



// Calc_Results function calculates results, compares with party position, and adds to array if matches

function Calc_Results() {
    for (let z = 0; z < Answers.length; z++) {
        for (let x = 0; x < Final_Results.length; x++) {}

        //results.sort sorts voting results from highest to lowest. (forgot syntax, read up again)
        /*Final_Results.sort(function(a, b) {
            return b["points"] - a["points"]
        });*/

        //Show_Final_Results function prints out the final results

        /*complete calc_results function from 2019, learn to read
        function calc_results() {
    for (var z = 0; z < answers.length; z++) {
        for (var x = 0; x < final_results.length; x++) {
            if (answers[z] == subjects[z].parties[x].position) {
                for (var y = 0; y < final_results.length; y++) {
                    if (subjects[z].parties[x].name == final_results[y].name)
                        final_results[y].points++;
                }
            }
        }
    }*/