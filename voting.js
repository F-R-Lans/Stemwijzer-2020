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
        } else if (counter == "ambivalent" && Question_Number != subjects.length) {
            Question_Number++
            ShowQuestion();
        } else if (counter == 'null' && Question_Number != subjects.length) {
            ShowQuestion();
        } else if (counter == 'next' && Question_Number != subjects.length) {
            Calc_Results();

        }
    }
}



// Calc_Results function calculates results, compares with party position, and adds to array if matches

function Calc_Results() {
    for (let z = 0; z < Answers.length; z++) { //make a loop, initialize a variable z, make it zero, increment z in z is smaller than answers.length, run everything below as long as z is smaller than answers.length
        for (let x = 0; x < Final_Results.length; x++) { //make a nested loop, run loop 2 every time loop 1 is run, do the same with var y as var z
            if (Answers[z] == subjects[z].parties[x].position) { //make a nested if, only run everything after this is if is met, if z in array answers is equal to z in subjects and x in parties.position
                for (let y = 0; y < Final_Results.length; y++) { //make a nested for, if IF above is met, make a var y, and repeat what's done in z and x
                    if (subjects[z].parties[x].name == Final_Results[y].name) //make a nested if, if z in subjects and x in parties.name are equal to y in Final_results.name, 
                        Final_Results[y].points++; //increments points in final_results
                }
            }
        }
    }
    // z is created to ensure the loop goes through all questions, z increments every time the answers.length goes up 1, 
    // x increments every time Final_results.length goes up by 1
    // z and x give an array number to the list. if answers[1] matches subjects [1].parties.[1].position, run so points can be added to that party.
    // y increments every time Final_results.length goes up by 1, y is added to when the match is made with the party
    // if subjects[1].parties[1].name is equal to final_results[1].name add 1 to points

    // the loop takes a question, tries to match the answer with a party, if it matches, it adds 1 to their "points" and runs again, until let z is higher than question.length

    Final_Results.sort(function(a, b) { //.sort makes vars a and b, and orders from b(high), to a(low)
        return b['points'] - a['points']
    });
    Show_Final_Results()
}

//Show_Final_Results function prints out the final results
function Show_Final_Results() {
    console.log(Final_Results);
}