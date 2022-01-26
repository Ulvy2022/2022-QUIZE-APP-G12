

// hide banner and show start quiz
function displayStartQuze(){
    banner.style.display='none'
    containerAll.style.display='none'
    btn_viewsQuizes.style.display='none'
    quiz.style.display='none'
    viewQuizs.style.display='none'
    start_quiz.style.display='block'
    
}
let start_quiz=document.getElementById('start_quiz')
let banner=document.getElementById('banner')

let clickOnMenuQuiz=document.getElementById('quize-bar')
clickOnMenuQuiz.addEventListener('click', displayStartQuze)



// hide shart quiz and show play quiz
function playQuiz(){
    start_quiz.style.display='none'
    containerAll.style.display='none'
    btn_viewsQuizes.style.display='none'
    quiz.style.display='block'

}

let clickOnBtnStartQuiz=document.getElementById('btn-start')
clickOnBtnStartQuiz.addEventListener('click', playQuiz)



// click on btn create to show create-form and hide all
function displayCreateForm(){
    start_quiz.style.display='none'
    viewQuizs.style.display='none'
    btn_viewsQuizes.style.display='none'
    quiz.style.display='none'
    banner.style.display='none'
    containerAll.style.display='block'

}
var viewQuizs=document.getElementById("viewquiz")
let createQuiz=document.getElementById('createForm')
let clickOnBtnCreate=document.getElementById('create-bar')
clickOnBtnCreate.addEventListener('click', displayCreateForm)









// get value from from-container
var container = document.querySelector(".form-container");
var containerAll=document.querySelector('.container-form-showQuestion')
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
    let P_div = document.createElement("p");
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
    containerAll.appendChild(showQuestion);

    // clear all question after click on btn add
    clearForm();
    

}
// clear form
function clearForm(){
    var getA1 = document.getElementById("a1").value = "";
    var getA2 = document.getElementById("a2").value = "";
    var getA3 = document.getElementById("a3").value = "";
    var getA4 = document.getElementById("a4").value = "";
    var get_Q = document.getElementById("Que").value = "";
    var correctAnswer = document.getElementById("correct_Ans").value = "";
}

// show quiz form for create 
function showFormCreateQuestion(event) {

    event.preventDefault();
    container.style.display = "block";
}


// get value from question

// get vaue from q & a
var correct = document.getElementById("correct_Ans").value;
var get_Q = document.querySelector(".form-custom");
var get_A = document.querySelectorAll(".form-control");

// store information
// var arrayOfDict = []
var dict = {};

// gett value from question
var arr = [];
var getValueFromQuiz = [];
var getValueAsDict = {};

// btn for selte quiz
let getCreateValue = document.getElementById("create-bar");
getCreateValue.addEventListener("click", showFormCreateQuestion);

// btn-add
let btn_next = document.querySelector(".next");
btn_next.addEventListener("click",create_display)




// play quiz and view answer

const arrayOfDict = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "javascript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
       
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

let totalScore=arrayOfDict.length*25
///////// DECLEAR FILE FROM HTML ///////////

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

var getscore=document.getElementById("getScore")

document.getElementById("totalScore").textContent=totalScore
const submitBtn = document.getElementById('submit')

let currentQuiz = 0

let score = 0

//////////////// VIEW QUIZ /////////////////////

var viewQuizs=document.getElementById("viewquiz")

function displayQuiz(){
    for (i=0;i<arrayOfDict.length;i++){
        let ul=document.createElement("div")
        ul.className="ul-ViewsAnswers"
        ul.style.color="white"
        let h3=document.createElement("h3")
        h3.id="viewQ"
        h3.style.color="black"
        let li_a1=document.createElement("li")
        li_a1.className="li-answer"
        let li_a2=document.createElement("li")
        li_a2.className="li-answer"
        let li_a3=document.createElement("li")
        li_a3.className="li-answer"
        let li_a4=document.createElement("li")
        li_a4.className="li-answer"
        h3.textContent=arrayOfDict[i].question
        li_a1.textContent=arrayOfDict[i].a
        li_a2.textContent=arrayOfDict[i].b
        li_a3.textContent=arrayOfDict[i].c
        li_a4.textContent=arrayOfDict[i].d
        if (arrayOfDict[i].correct.toLowerCase()=="a"){
            li_a1.style.backgroundColor="green"
            li_a2.style.backgroundColor="red"
            li_a3.style.backgroundColor="red"
            li_a4.style.backgroundColor="red"
  
        }else if (arrayOfDict[i].correct.toLowerCase()=="b"){

            li_a2.style.backgroundColor="green"
            li_a3.style.backgroundColor="red"
            li_a4.style.backgroundColor="red"
            li_a1.style.backgroundColor="red"

        }else if (arrayOfDict[i].correct.toLowerCase()=="c"){
            li_a3.style.backgroundColor="green"
            li_a2.style.backgroundColor="red"
            li_a4.style.backgroundColor="red"
            li_a1.style.backgroundColor="red"

           
        }else if (arrayOfDict[i].correct.toLowerCase()=="d"){
            
            li_a4.style.backgroundColor="green"
            li_a3.style.backgroundColor="red"
            li_a2.style.backgroundColor="red"
            li_a1.style.backgroundColor="red"

           
        }
        
        ul.appendChild(h3)
        ul.appendChild(li_a1)
        ul.appendChild(li_a2)
        ul.appendChild(li_a3)
        ul.appendChild(li_a4)
        viewQuizs.appendChild(ul)
       
    }
    viewQuizs.classList.remove("hide")
    btn_viewsQuizes.classList.add="hide"
}




//////////////////////////////////////////

loadQuiz()

/////////// FUNCTION DISPLAY QUIZ /////////////

function loadQuiz() {
    deSelected()
    const currentQuizData = arrayOfDict[currentQuiz]
    questionEl.textContent = currentQuizData.question
    a_text.textContent = currentQuizData.a
    b_text.textContent = currentQuizData.b
    c_text.textContent = currentQuizData.c
    d_text.textContent = currentQuizData.d
}

/////////// CHECK SELECT ANSWERS ////////
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id 
        }
    })
    return answer
}

function deSelected(){
    answerEls.forEach(answerEl=>answerEl.checked=false)
}

////////// CHECK BUTTON SUBMIT /////////////////

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === arrayOfDict[currentQuiz].correct) {
        //    arrayCorrectAnswer.push(currentQuiz)
           score+=25
           getscore.textContent=score
        //    console.log(arrayCorrectAnswer)
       }
       currentQuiz++

       if(currentQuiz < arrayOfDict.length) {
           loadQuiz()
       } else {
           btn_viewsQuizes.classList.remove("hide")
           viewQuizs.style.display='block'
           btn_viewsQuizes.style.display='block'
           quiz.innerHTML=""
           

       }
       
    }else{
        alert("Please select answer")
    }
})
//////////// BUTTON CLICK SHOW VIEW QUIZ /////////////

let btn_viewsQuizes=document.getElementById("viewAll-answer")
btn_viewsQuizes.addEventListener("click",displayQuiz)