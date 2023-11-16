const formCon = document.querySelector(".form_con")
const form = document.getElementById("form")
const quizBtn = document.querySelector(".start")
const closeBtn = document.querySelector(".close_btn")
const options = document.querySelectorAll(".option")
const counter = document.querySelector(".count")
const max = document.querySelector(".max_count")
const questions = [
    ["1?","2?","3?","4?","5?"],
    ["24?","14?","34?","44?","54?"],
    ["13?","23?","33?","43?","53?"],
    ["11","21?","31?","41?","51?"],
    ["15?","24?","33?","42?","51?"]
]
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
  function updateCount(){
    counter.innerHTML = count
  }
  function newQuestion() {
    count++
    if(count>MAXCOUNT){
        hiddenForm();
        return
    }
    for(let i = 1; i<=MAXCOUNT; i++){
        let id = "o" + i
        document.querySelector(`label[for=${id}]`).innerHTML = questions[count - 1][i-1]
    }
    updateCount()
  }
quizBtn.addEventListener("click", showForm);
closeBtn.addEventListener("click", hiddenForm);

options.forEach((option) => {
    option.addEventListener("click", newQuestion)
})