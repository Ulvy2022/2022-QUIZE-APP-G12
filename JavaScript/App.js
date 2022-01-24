
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