
// ------------------------------------------------------------------------
//      CONSTANTS
// ------------------------------------------------------------------------
 

// ------------------------------------------------------------------------
//      VARIABLES
// ------------------------------------------------------------------------

// the array contain all the question and the player answwer
let questionsAndAnswers = []
let score = 0
let currentQuizIndex = 0
let indexWrightAnswer = []
let wrongAnswers = []
let input_All=false
let countAddQ=0
<<<<<<< HEAD
let storageDataViewQuiz=[]
=======
var storageDataViewQuiz=[]

>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03

// ------------------------------------------------------------------------
//      FUNCTIONS
// ------------------------------------------------------------------------

function show(element) {
    element.style.display = 'block'
}
function hide(elem) {
    elem.style.display = 'none'
}

function onClickOnQuiz() {
    if(questionsAndAnswers.length==0){
        swal.fire({
            icon: 'error',
            title: 'Cannot play quiz',
            text: 'Please create quiz',
            timer: 5000
        })
    }else{
        // Show the start quiz button
        hide(banner)
        hide(containerFormShowQuestion)
        hide(btn_viewsQuizes)
        hide(quiz)
        hide(viewQuizs)
        show(start_quiz)
<<<<<<< HEAD
        currentQuizIndex=0
        score=0
        getscore.textContent = score
        storageDataViewQuiz=[]
        
        loadQuiz()

=======
        score = 0
        currentQuizIndex = 0
        desClearViewQuiz()
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
    }
}

function onClickOnStartQuiz() {
    // Show the  quiz 
    hide(start_quiz)
    hide(containerFormShowQuestion)
    hide(btn_viewsQuizes)
    show(quiz)
}


// click on btn create to show create-form and hide all
function displayCreateForm() {
    hide(start_quiz)
    hide(viewQuizs)
    hide(btn_viewsQuizes)
    hide(quiz)
    hide(banner)
    show(containerFormShowQuestion)
}

// alert if emtyp input
// sweet alert
function inputAll() {
    swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your question has been added',
        showConfirmButton: false,
        timer: 3000
    })
    input_All=true
    addQuestion();
}

/////////// ALERT IF SOME INPUT NOTHING ////////////
function ifEmpty() {
    swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Fill the form first...!',
        timer: 3000
    })
    input_All=false
    
}

////// CHECK INPUT ////////////////
function if_empty() {
    var getA1 = document.getElementById("a1").value;
    var getA2 = document.getElementById("a2").value;
    var getA3 = document.getElementById("a3").value;
    var getA4 = document.getElementById("a4").value;
    var get_Q = document.getElementById("Que").value;
    var correctAnswer = document.getElementById("correct_Ans").value;

    if (getA1 == "" || getA2 == "" || getA3 == "" || getA4 == "" || correctAnswer == "" || get_Q == "") {
        ifEmpty();
        
        
    }
    else {
        inputAll();
    }

}
<<<<<<< HEAD
 
=======

>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
function saveQuestions() {
    localStorage.setItem("local", JSON.stringify(questionsAndAnswers));
    input_All=true
}

function loadQuestions() {
    questionsAndAnswers = JSON.parse(localStorage.getItem("local"))
}

///////////////// EDIT QUESTION ////////////////

function displayEditQuestions() {
    
}

function addQuestion() {

    // 1 - create new question
    
        let getA1 = document.getElementById("a1").value;
        let getA2 = document.getElementById("a2").value;
        let getA3 = document.getElementById("a3").value;
        let getA4 = document.getElementById("a4").value;
        let get_Q = document.getElementById("Que").value;
        let correctAnswer = document.getElementById("correct_Ans").value;
        let newQuestion = { question: get_Q, a: getA1, b: getA2, c: getA3, d: getA4, correct: correctAnswer.toLowerCase() };
    
        // 2 - add this new question
        questionsAndAnswers.push(newQuestion);
    
        // 3 - save to local storage
        saveQuestions();
    
        // 4 - Clear from
        clearForm()
    
        // Diplay question
        displayEditQuestions();
    
   
}

function clearForm() {
    document.getElementById("a1").value = "";
    document.getElementById("a2").value = "";
    document.getElementById("a3").value = "";
    document.getElementById("a4").value = "";
    document.getElementById("Que").value = "";
    document.getElementById("correct_Ans").value = "";
}

function refrshId(){
    let id=0
    let div_showQuestion=document.getElementsByClassName('div_showQuestion')
    for(let item of div_showQuestion){
        item.id=id
        id++
    }

}

function deleteItem(e) {
    if (e.target.className == "img_dele") {
        e.target.parentElement.parentElement.remove()
        
        let idQues=e.target.parentElement.parentElement.id
        console.log(idQues)
        questionsAndAnswers.splice(idQues,1)
        localStorage.setItem('local' , JSON.stringify(questionsAndAnswers))
        refrshId()

        countAddQ-=1

    }
}

function getRightAnswer(index) {
    indexWrightAnswer.push(index)
    console.log("right", indexWrightAnswer)
}

function checkWrongAnswers(wrong) {
    wrongAnswers.push(wrong)
    getRightAnswer()

}

function desClearViewQuiz(){
    let allQquestions = document.querySelectorAll("#viewQ")
    let allAnswer=document.querySelectorAll(".li-answer")
    allQquestions.forEach(oneQuestion => oneQuestion.value="")
    allAnswer.forEach(oneAnswer => oneAnswer.value="")
    loadQuiz()
}

<<<<<<< HEAD
function clearViewQuiz(){
=======

//////////////// VIEW QUIZ /////////////////////

function viewQuiz() {
    checkWrongAnswers()
    console.log("gotData",storageDataViewQuiz)
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
    for (i = 0; i < storageDataViewQuiz.length; i++) {
        let ul = document.createElement("div")
        ul.className = "ul-ViewsAnswers"
        ul.style.color = "white"
        let h3 = document.createElement("h3")
        h3.id = "viewQ"
        h3.style.color = "black"
        let li_a = document.createElement("li")
        li_a.className = "li-answer"
        let li_b = document.createElement("li")
        li_b.className = "li-answer"
        let li_c = document.createElement("li")
        li_c.className = "li-answer"
        let li_d = document.createElement("li")
        li_d.className = "li-answer"
        h3.textContent = storageDataViewQuiz[i].question
        li_a.textContent = storageDataViewQuiz[i].a
        li_b.textContent = storageDataViewQuiz[i].b
        li_c.textContent = storageDataViewQuiz[i].c
        li_d.textContent = storageDataViewQuiz[i].d
<<<<<<< HEAD
    }
}


function viewQuiz() {
    checkWrongAnswers()

    for (i = 0; i < storageDataViewQuiz.length; i++) {
        let ul = document.createElement("div")
        ul.className = "ul-ViewsAnswers"
        ul.style.color = "white"
        let h3 = document.createElement("h3")
        h3.id = "viewQ"
        h3.style.color = "black"
        let li_a = document.createElement("li")
        li_a.className = "li-answer"
        let li_b = document.createElement("li")
        li_b.className = "li-answer"
        let li_c = document.createElement("li")
        li_c.className = "li-answer"
        let li_d = document.createElement("li")
        li_d.className = "li-answer"
        h3.textContent = storageDataViewQuiz[i].question
        li_a.textContent = storageDataViewQuiz[i].a
        li_b.textContent = storageDataViewQuiz[i].b
        li_c.textContent = storageDataViewQuiz[i].c
        li_d.textContent = storageDataViewQuiz[i].d
=======
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        ///////////// CHECK GOOD ANSWER ////////////

        for (u of indexWrightAnswer) {
            if (u === i) {
                ul.style.border = "4px solid green"
            }
        }

<<<<<<< HEAD
        // ////////////////////////////////////////
        // check good answer
=======
        // ////////////// CHECK GOOD ANSWER ///////////////////
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        if (storageDataViewQuiz[i].correct == "a") {
            console.log("fsdfdfsd", storageDataViewQuiz[i].correct);
            li_a.style.backgroundColor = "green"

        } else if (storageDataViewQuiz[i].correct == "b") {

            li_b.style.backgroundColor = "green"

        } else if (storageDataViewQuiz[i].correct == "c") {
            li_c.style.backgroundColor = "green"

        } else if (storageDataViewQuiz[i].correct == "d") {
            li_d.style.backgroundColor = "green"
        }

        ///////////////////// CHECK WRONG ANSWER /////////////////

        if (i < wrongAnswers.length - 1) {
            console.log("wrong Answers", wrongAnswers)
            if (wrongAnswers[i].getIndex === i && wrongAnswers[i].getId == 'a') {
                li_a.style.backgroundColor = "red"

<<<<<<< HEAD
            } if (wrongAnswers[i].index === i && wrongAnswers[i].id == 'b') {
                li_b.style.backgroundColor = "red"
                console.log("showb", wrongAnswers[i].id);
            } if (wrongAnswers[i].index === i && wrongAnswers[i].id == 'c') {
                li_c.style.backgroundColor = "red"
                console.log("showc", wrongAnswers[i].id);
            } if (wrongAnswers[i].index === i && wrongAnswers[i].id == 'd') {
=======
            }if (wrongAnswers[i].getIndex === i && wrongAnswers[i].getId == 'b') {
                li_b.style.backgroundColor = "red"
               
            }if (wrongAnswers[i].getIndex === i && wrongAnswers[i].getId == 'c') {
                li_c.style.backgroundColor = "red"
               
            }if (wrongAnswers[i].getIndex === i && wrongAnswers[i].getId == 'd') {
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
                li_d.style.backgroundColor = "red"
                
            }
        }

        ul.appendChild(h3)
        ul.appendChild(li_a)
        ul.appendChild(li_b)
        ul.appendChild(li_c)
        ul.appendChild(li_d)
        viewQuizs.appendChild(ul)
    }


    viewQuizs.classList.remove("hide")
}

/////////// FUNCTION DISPLAY QUIZ /////////////


function loadQuiz() {
    deSelected()
    let getData={}
    if (questionsAndAnswers.length > 0) {
        const currentQuizData = questionsAndAnswers[currentQuizIndex]
        questionEl.textContent = currentQuizData.question
        a_text.textContent = currentQuizData.a
        b_text.textContent = currentQuizData.b
        c_text.textContent = currentQuizData.c
        d_text.textContent = currentQuizData.d
<<<<<<< HEAD

=======
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        getData.question = currentQuizData.question
        getData.a = currentQuizData.a
        getData.b = currentQuizData.b
        getData.c = currentQuizData.c
        getData.d = currentQuizData.d
        getData.correct = currentQuizData.correct
        storageDataViewQuiz.push(getData)
    }
    
}

/////////// CHECK SELECT ANSWERS ////////

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

function deSelected() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

////////// CHECK BUTTON SUBMIT /////////////////
const submitBtn = document.getElementById('submit')
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    let getWrongAnswer = {}
    if (answer) {
        if (answer === questionsAndAnswers[currentQuizIndex].correct) {
            score += 20
            getscore.textContent = score
            getRightAnswer(currentQuizIndex)

        } else if (answer != questionsAndAnswers[currentQuizIndex].answer) {
            getWrongAnswer.getIndex = currentQuizIndex
            getWrongAnswer.getId = answer
            checkWrongAnswers(getWrongAnswer)
        }
        currentQuizIndex++

        if (currentQuizIndex < questionsAndAnswers.length) {
            loadQuiz()
        } else {
            btn_viewsQuizes.classList.remove("hide")
            viewQuizs.style.display = 'block'
            
            quiz.style.display='none'
            btn_viewsQuizes.style.display = 'block'
            
            document.getElementById("totalScore").textContent = questionsAndAnswers.length * 20
<<<<<<< HEAD
            
=======
           
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        }

    } else {
        swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please select the answer!',
            timer: 3000

        })

    }
})
 
function createQuestion(e){
    e.preventDefault()
    if_empty()
    if(input_All){
        
        const divShowQuestion=document.createElement('div') 
        divShowQuestion.className='div_showQuestion'
<<<<<<< HEAD
       
        // divShowQuestion.id=countAddQ
        
=======
    
        divShowQuestion.id=countAddQ
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        
        const showQuestion=document.createElement('div')
        showQuestion.className='show-que'

        const p=document.createElement('p')
        p.className='q_tion'
        p.textContent=questionsAndAnswers[countAddQ].question;
        showQuestion.appendChild(p)
        divShowQuestion.appendChild(showQuestion)
      
        let div_btn_del_edit=document.createElement('div')
        div_btn_del_edit.className='btnDE'
        
        let img_dele=document.createElement('img')
        img_dele.className='img_dele'
        img_dele.id='idDele'
        img_dele.src='images/delete.png'
        div_btn_del_edit.appendChild(img_dele)
       
        let img_edit=document.createElement('img')
        img_edit.className='img_edit'
        img_edit.id='idEdit'
        img_edit.src='images/edite.png'
        div_btn_del_edit.appendChild(img_edit)
        divShowQuestion.appendChild(div_btn_del_edit)

        contShowQus.appendChild(divShowQuestion);
        img_dele.addEventListener("click",deleteItem)

<<<<<<< HEAD
        refrshId()
=======
>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
        countAddQ++
        

    }

}

// ------------------------------------------------------------------------
//      MAIN
// ------------------------------------------------------------------------

<<<<<<< HEAD
=======

>>>>>>> e51658f360cbb155f5054d4b62d1d313e5db0e03
// EDIT QUIZ   VIEW - ------------------------------------------------------------------------------

const start_quiz = document.getElementById('start_quiz')
const banner = document.getElementById('banner')

const viewQuizs = document.getElementById("viewquiz")
const createQuiz = document.getElementById('createForm')

const formContainer = document.querySelector(".form-container");

const contShowQus = document.getElementById('cont_show_que')
const showQue = document.querySelector(".show-que");
const formGroup = document.querySelector(".form-group");
const get_Q = document.querySelector(".form-custom");
const get_A = document.querySelectorAll(".form-control");

const clickOnMenuQuiz = document.getElementById('quize-bar')
clickOnMenuQuiz.addEventListener('click', onClickOnQuiz)

const clickOnBtnStartQuiz = document.getElementById('btn-start')
clickOnBtnStartQuiz.addEventListener('click', onClickOnStartQuiz)

const containerFormShowQuestion = document.querySelector('.container-form-showQuestion')
const clickOnBtnCreate = document.getElementById('create-bar')
clickOnBtnCreate.addEventListener('click', displayCreateForm)

const btn_next = document.querySelector(".next");
btn_next.addEventListener("click", createQuestion)

const div_showQuestion = document.querySelector(".div_showQuestion")

const btn_viewsQuizes = document.getElementById("viewAll-answer")

let firstClick=true
btn_viewsQuizes.addEventListener("click", function () {
    if (firstClick) {
        viewQuiz()
        firstClick=false
    }
})

// PLAY QUIZ   VIEW ------------------------------------------------------------------------------
const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const getscore = document.getElementById("getScore")


 