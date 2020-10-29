//define vars/const
var Question_Number = 0; //question number starts at 0 and counts up
var Answers = []; //answers are stored in an array
var Final_Results = [] //final results are stored in an array
for (var i = 0; i < parties.length; i++) {
    Final_Results[i] = { "name": parties[i].name, "points": 0 };
}; // initialize Final_Results array with 0 points
const big_party = 15


//define opinion id's
const Short = document.getElementById("Statement_Short");
const Long = document.getElementById("Statement_Long");
const Choice = document.getElementById("Final_Results");


//onclick Generates Question (onclick->start_survey->show question) (done)
function Start_Survey() {
    ShowQuestion();
    document.getElementById("Question_Buttons").style.display = "block";
    document.getElementById("Start_Button").style.display = "none";
};


//ShowQuestion generates questions given in data.js.short.inner is title, long.inner is statement (done)
function ShowQuestion() {
    Short.innerHTML = subjects[Question_Number].title;
    Long.innerHTML = subjects[Question_Number].statement;
};


//AddAnswer function saves given answer in an array
function AddAnswer(Answer, VoteCount) {
    Answers[Question_Number] = Answer;
    NextQuestion(VoteCount)
};


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
            Weigh_Final_Results();
        }
    }
};


// Calc_Results function calculates results, compares with party position, and adds to array if matches
//loops through questions, checks if answer matches party position, adds if matches, loops through all parties, repeats for all questions

function Calc_Results() {
    for (let z = 0; z < Answers.length; z++) {
        for (let x = 0; x < Final_Results.length; x++) {
            if (Answers[z] == subjects[z].parties[x].position) {
                for (let y = 0; y < Final_Results.length; y++) {
                    if (subjects[z].parties[x].name == Final_Results[y].name)
                        Final_Results[y].points++;
                }
            }
        }
    }

    Show_Final_Results();
};

function Weigh_Final_Results() {
    document.getElementById("QuestionPage").style = "display: none";
    document.getElementById("WeighPage").style = "display: block";
}


//Show_Final_Results function prints out the final results. 
//.sort sorts from high(b) to low(a)
//.map converts objects in array to string
// .join makes line break and removes comma
function Show_Final_Results() {
    document.getElementById("WeighPage").style = "display: none";
    document.getElementById("ResultPage").style = "display: block";
    Final_Results.sort((a, b) => b.points - a.points);
    let decide = Final_Results.map(object => `Partij: ${object.name} Punten: ${object.points}`).join("<br/>");
    Choice.innerHTML = decide;
};