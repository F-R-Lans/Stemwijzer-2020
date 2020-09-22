//define vars
var Question_Number = 0; //question number starts at 0 and counts up
var Answers = []; //answers are stored in an array
var Final_Results = [] //final results are stored in an array
for (var i = 0; i < parties.length; i++) {
    final_results[i] = { "name": parties[i].name, "points": 0 };
}
console.log(final_results);

//define opinion id's
const Short = document.getElementById("Statement_Short");
const Long = document.getElementById("Statement_Long");
const Choice = document.getElementById("Results");

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
};

//AddAnswer function saves given answer in an array ()
function AddAnswer(answer, VoteCount) {
    answers[Question_Number] = answer;
    console.log(answers);
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
            calc_results();
        }

    }
}



// Calc_Results function calculates results, compares with party position, and adds to array if matches.button
// function Calc_Results()

//Show_Final_Results function prints out the final results 

// function Show_Final_Results()