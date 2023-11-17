const formCon = document.querySelector(".form_con")
const formConHtmlForm = formCon.innerHTML
const form = document.getElementById("form")
const formHtml = form.innerHTML
const resultCon = document.querySelector(".result_con")
const resultHtml = resultCon.innerHTML
const quizBtn = document.querySelector(".start")
const options = document.querySelectorAll(".option")
const counter = document.querySelector(".count")
const max = document.querySelector(".max_count")
const question = document.querySelector(".question")

const questions = [
  "1+1?",
  "10+14?",
  "11+2?",
  "15-4?",
  "3*5?"
]
const correctAnswers = [1,0,0,0,0]
const answers = [
    ["1","2","3","4","5"],
    ["24","14","34","44","54"],
    ["13","23","33","43","53"],
    ["11","21","31","41","51"],
    ["15","24","33","42","51"]
]
let quizTitle = "Quiz guide"
let quizText = "quiz text"


let formConDefHtml = `<div class="quiz_title">${quizTitle}</div><div class="quiz_text">${quizText}</div>`
formCon.innerHTML = formConDefHtml
const buttons = document.createElement("div")
const nextBtn = document.createElement("button")
const closeBtn = document.createElement("button")
nextBtn.setAttribute("id", "next_btn")
nextBtn.classList.add("smaller_btn")
nextBtn.innerHTML = "next"
closeBtn.setAttribute("id", "close_btn")
closeBtn.classList.add("smaller_btn")
closeBtn.innerHTML = "close"
buttons.appendChild(nextBtn)
buttons.appendChild(closeBtn)
formCon.appendChild(buttons)

let givenAnswers = []
let count = 0
const MAXCOUNT = questions.length > options.length ? options.length : questions.length
function quizInit(){
  formCon.innerHTML = formConHtmlForm
  newQuestion()
  updateCount(count)
  max.innerHTML = MAXCOUNT
}
function reset() {
  count = 0;
  givenAnswers = []
  newQuestion();
}
function showForm() {
  formCon.style.top = "0px";
}

function hiddenForm() {
  formCon.style.top = null;
  reset();
}
function showResult(){
  hiddenForm();
  resultCon.style.top = "0px"
}
function hideResult(){
  hiddenForm();
  resultCon.style.top = null;
  setTimeout(() => {
    resultCon.innerHTML = resultHtml
  }, 500) 
}
function updateCount(){
  counter.innerHTML = count
  return
}
function newQuestion() {
  count++
  if(count>MAXCOUNT){
    console.log(givenAnswers)
      let html = ""
      let sum = 0;
      givenAnswers.forEach((i) =>{
        sum += i
      })
      html += `<div class="result_title"><div>You've got ${sum} questions right</div>`
      console.log(html)
      let i = 1
      givenAnswers.forEach((answer) => {
        let str = answer ? "+" : "-"
        html += `<div>${i}) ${str} <div/>`
        i++
      })
      html += '<div class="click_tip">Click anywhere to close</div></div>'
      resultCon.innerHTML = html
      showResult();
      return
  }
  question.innerHTML = questions[count - 1]
  for(let i = 1; i<=MAXCOUNT; i++){
      let id = "o" + i
      document.querySelector(`label[for=${id}]`).innerHTML = answers[count - 1][i-1]
  }
  updateCount();
  return
}
function answerGiven(optionNumber, event){
  console.log(optionNumber, event)
  givenAnswers.push(correctAnswers[count - 1] == optionNumber)
  newQuestion();
}
quizBtn.addEventListener("click", showForm);
closeBtn.addEventListener("click", hiddenForm);
nextBtn.addEventListener("click", quizInit)
resultCon.addEventListener("click", hideResult)
for(let i = 0; i<options.length; i++){
  options[i].addEventListener("click", answerGiven.bind(null, i))
}