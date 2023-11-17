const formCon = document.querySelector(".form_con")
const form = document.getElementById("form")
const quizBtn = document.querySelector(".start")
const closeBtn = document.querySelector(".close_btn")
const options = document.querySelectorAll(".option")
const counter = document.querySelector(".count")
const max = document.querySelector(".max_count")
const question = document.querySelector(".question")
const resultCon = document.querySelector(".result_con")
const resultHtml = resultCon.innerHTML
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
let givenAnswers = []
let count = 0
const MAXCOUNT = questions.length > options.length ? options.length : questions.length
newQuestion()
updateCount(count)
max.innerHTML = MAXCOUNT
  function reset() {
    count = 0;
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
    resultCon.innerHTML = resultHtml
    formCon.style.top = null;
  }
  function updateCount(){
    counter.innerHTML = count
    return
  }
  function newQuestion() {
    count++
    if(count>MAXCOUNT){
        let html = ""
        let sum = 0;
        givenAnswers.forEach((i) =>{
          sum += i
        })
        html += `<div class="result_title"><div>You've got ${sum} questions right<div/>`
        console.log(html)
        let i = 1
        givenAnswers.forEach((answer) => {
          let str = answer ? "+" : "-"
          html += `<div>${i}) ${str} <div/>`
          i++
        })
        html += "<div/>"
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
  function answerGiven(optionNumber){
    console.log(optionNumber)
    givenAnswers.push(correctAnswers[count - 1] == optionNumber)
    newQuestion();
  }
quizBtn.addEventListener("click", showForm);
closeBtn.addEventListener("click", hiddenForm);

for(let i = 0; i<options.length; i++){
  options[i].addEventListener("click", answerGiven)
}