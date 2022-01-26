
// hide banner and show start quiz

function displayStartQuze(){
    banner.style.display='none'
    createQuiz.style.display='none'
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
    createQuiz.style.display='none'
    quiz.style.display='block'
   

}
// let quiz=document.getElementById('quiz')
let clickOnBtnStartQuiz=document.getElementById('btn-start')
clickOnBtnStartQuiz.addEventListener('click', playQuiz)

// click on btn create to show create-form and hide all
function displayCreateForm(){
    start_quiz.style.display='none'
    quiz.style.display='none'
    banner.style.display='none'
    createQuiz.style.display='block'


}
let createQuiz=document.getElementById('createForm')
let clickOnBtnCreate=document.getElementById('create-bar')
clickOnBtnCreate.addEventListener('click', displayCreateForm)






// ulvy responsible

// get value from from-container
var container = document.querySelector(".form-container");
container.style.display = "none";

var showQue = document.querySelector(".show-que");
// showQue.style.display = "none"

var formGroup = document.querySelector(".form-group");


var form_Group = document.querySelector(".form-group");

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
    P_div.textContent = 'get_Q';
    P_div.className = "q_tion";
    div_P.appendChild(P_div);

    showQuestion.appendChild(div_P);

    let div_An1 = document.createElement("div");
    let input_an1 = document.createElement("input");
    input_an1.className='rad'
    input_an1.type = "radio";
    input_an1.id = "rad";
    let label_An1 = document.createElement("label");
    label_An1.className = "radio";
    label_An1.textContent = 'getA1';
    div_An1.appendChild(input_an1)
    div_An1.appendChild(label_An1)
    showQuestion.appendChild(div_An1);


    let div_An2 = document.createElement("div");
    let input_an2 = document.createElement("input");
    input_an2.type = "radio"
    input_an2.id = "rad1";
    input_an2.className='rad'
    let label_An2 = document.createElement("label");
    label_An2.className = "radio";
    label_An2.textContent = 'getA2';
    div_An2.appendChild(input_an2)
    div_An2.appendChild(label_An2)
    showQuestion.appendChild(div_An2);

    let div_An3 = document.createElement("div");
    let input_an3 = document.createElement("input");
    input_an3.type = "radio";
    input_an3.id = "rad2";
    input_an3.className='rad'
    let label_An3 = document.createElement("label");
    label_An3.className = "radio";
    label_An3.textContent = 'getA3';
    div_An3.appendChild(input_an3)
    div_An3.appendChild(label_An3)
    showQuestion.appendChild(div_An3);

    
    let div_An4 = document.createElement("div");
    let input_an4 = document.createElement("input");
    input_an4.type = "radio";
    input_an4.id = "rad3";
    let label_An4 = document.createElement("label");
    label_An4.className = "radio";
    label_An4.textContent = 'getA4';
    div_An4.appendChild(input_an4)
    div_An4.appendChild(label_An4)
    showQuestion.appendChild(div_An4);

  
    document.body.appendChild(showQuestion);
    console.log(arrayOfDict);

    let get_valueLabel = document.querySelectorAll(".show-que div label");
    let IfLooped = false;
    for ( let index of arrayOfDict){

        for (let val in index){

            if (val == "correct" && !IfLooped){
                console.log(index[val]);
                console.log(get_valueLabel[0].textContent );
                if ( get_valueLabel[0].textContent == index[val] ){
                    document.getElementById("rad").checked= true;
                }

                else if ( get_valueLabel[1].textContent == index[val] ){
                    document.getElementById("rad1").checked= true;

                }

                else if ( get_valueLabel[2].textContent == index[val] ){
                    document.getElementById("rad2").checked= true;

                }

                else if ( get_valueLabel[3].textContent == index[val] ){
                    document.getElementById("rad3").checked= true;
                    console.log("hfds");

                }
                
                IfLooped = true;
            }
        }
    }
    

}

// show quiz form for create 
function show_quiz(event) {

    event.preventDefault();
    container.style.display = "block";
}

// clear question and answer
function clearQuesAns (event) {
    event.preventDefault();
    var getA1 = document.getElementById("a1").value = "";
    var getA2 = document.getElementById("a2").value = "";
    var getA3 = document.getElementById("a3").value = "";
    var getA4 = document.getElementById("a4").value = "";
    var get_Q = document.getElementById("Que").value = "";
    var correctAnswer = document.getElementById("correct_Ans").value = "";

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
let getCreateValue = document.getElementById("create");
getCreateValue.addEventListener("click", show_quiz);

// btn-add
let btn_next = document.querySelector(".next");
btn_next.addEventListener("click",create_display)



