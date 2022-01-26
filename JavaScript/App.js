

// hide banner and show start quiz
function displayStartQuze(){
    banner.style.display='none'
    createQuiz.style.display='none'
    // formShowQuestion.style.display='none'
    quiz.style.display='none'
    start_quiz.style.display='block'
    
}
let start_quiz=document.getElementById('start_quiz')
let banner=document.getElementById('banner')

let clickOnMenuQuiz=document.getElementById('quize-bar')
clickOnMenuQuiz.addEventListener('click', displayStartQuze)



// hide shart quiz and show play quiz
function playQuiz(){
    start_quiz.style.display='none'
    // formShowQuestion.style.display='none'
    createQuiz.style.display='none'
    quiz.style.display='block'

}

let clickOnBtnStartQuiz=document.getElementById('btn-start')
clickOnBtnStartQuiz.addEventListener('click', playQuiz)



// click on btn create to show create-form and hide all
function displayCreateForm(){
    // formShowQuestion.style.display='none'
    start_quiz.style.display='none'
    quiz.style.display='none'
    banner.style.display='none'
    createQuiz.style.display='block'

}
let createQuiz=document.getElementById('createForm')
let clickOnBtnCreate=document.getElementById('create-bar')
clickOnBtnCreate.addEventListener('click', displayCreateForm)









// get value from from-container
var container = document.querySelector(".form-container");
container.style.display = "none";

var showQue = document.querySelector(".show-que");
// showQue.style.display = "none"

var formGroup = document.querySelector(".form-group");


function create_display(event) {
    event.preventDefault();
    // get data from answer and question
    var getA1 = document.getElementById("a1").value;
    var getA2 = document.getElementById("a2").value;
    var getA3 = document.getElementById("a3").value;
    var getA4 = document.getElementById("a4").value;
    var get_Q = document.getElementById("Que").value;
    var correctAnswer = document.getElementById("correct_Ans").value;

    // append data into dict and append dict into arrayofdict
    dict = {question:get_Q, a:getA1, b:getA2, c:getA3, d:getA4, correct:correctAnswer};
    arrayOfDict.push(dict);

    // check if match answer
    
    let showQuestion = document.createElement("div");
    showQuestion.className = "show-que";
    
    let div_P = document.createElement("div");
    let P_div = document.createElement("span");
    P_div.textContent = get_Q;
    P_div.className = "q_tion";
    div_P.appendChild(P_div);

    showQuestion.appendChild(div_P);

    let div_An1 = document.createElement("div");
    let input_an1 = document.createElement("span");
    input_an1.type = "text";
    input_an1.className = "rad1";
    input_an1.textContent ="Answer 1 : "+ getA1;
    div_An1.appendChild(input_an1)
    showQuestion.appendChild(div_An1);


    let div_An2 = document.createElement("div");
    let input_an2 = document.createElement("span");
    input_an2.type = "text"
    input_an2.className = "rad1";
    input_an2.textContent ="Answer 2 : "+ getA2;
    div_An2.appendChild(input_an2)
    showQuestion.appendChild(div_An2);

    let div_An3 = document.createElement("div");
    let input_an3 = document.createElement("span");
    input_an3.type = "text";
    input_an3.className = "rad1";
    input_an3.textContent = "Answer 3 : "+getA3;
    div_An3.appendChild(input_an3)
    showQuestion.appendChild(div_An3);

    
    let div_An4 = document.createElement("div");
    let input_an4 = document.createElement("span");
    input_an4.type = "text";
    input_an4.className = "rad1";
    input_an4.textContent = "Answer 4 : "+getA4;
    div_An4.appendChild(input_an4)
    showQuestion.appendChild(div_An4);

    let div_correct = document.createElement("div");
    let corr = document.createElement("span");
    corr.textContent ="Correct Answer : "+ correctAnswer;
    corr.className = "rad1"
    div_correct.appendChild(corr);
    showQuestion.appendChild(div_correct);
    
    container.appendChild(showQuestion);

    // clear all question after click on btn add
    var getA1 = document.getElementById("a1").value = "";
    var getA2 = document.getElementById("a2").value = "";
    var getA3 = document.getElementById("a3").value = "";
    var getA4 = document.getElementById("a4").value = "";
    var get_Q = document.getElementById("Que").value = "";
    var correctAnswer = document.getElementById("correct_Ans").value = "";
    

}
// show quiz form for create 
function show_quiz(event) {

    event.preventDefault();
    container.style.display = "block";
}


// get value from question

// get vaue from q & a
var correct = document.getElementById("correct_Ans").value;
var get_Q = document.querySelector(".form-custom");
var get_A = document.querySelectorAll(".form-control");

// store information
var arrayOfDict = []
var dict = {};

// gett value from question
var arr = [];
var getValueFromQuiz = [];
var getValueAsDict = {};

// btn for selte quiz
let getCreateValue = document.getElementById("create-bar");
getCreateValue.addEventListener("click", show_quiz);

// btn-add
let btn_next = document.querySelector(".next");
btn_next.addEventListener("click",create_display)

