const start_btn = document.querySelector(".start_button button");
const info_box = document.querySelector(".Info_box");
const exit_btn = info_box.querySelector(".buttons .exit_btn");
const continue_btn = info_box.querySelector(".buttons .continue_btn");
const quiz_box = document.querySelector(".quiz_box");
const timeCount = quiz_box.querySelector(".timer .Timer_sec")
const timeLine = quiz_box.querySelector("header .time_line");
const timeOff = quiz_box.querySelector(".timer .Timer_text")
var new_btn = document.createElement("BUTTON");
var form_page = document.createTextNode("Click Me");
const option_list = document.querySelector(".option_list");

start_btn.onclick = ()=>{
    info_box.classList.add("activeInfo");
}

exit_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
}

continue_btn.onclick = ()=>{
    info_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
    startTimerLine(0);
}

let que_count = 0;
let que_num = 1;
let counter;
let counterLine;
let timeValue = 15;
let widthValue = 0;
let userScore = 0;

const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

//go back to starting position when clicked on "Quit Quiz"
quit_quiz.onclick = ()=>{
    window.location.reload();
}

//restart the quiz, reset everything when cliked on "Replay Quiz"
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove("activeResult");
    let que_count = 0;
    let que_num = 1;
    let timeValue = 15;
    let widthValue = 0;
    let userScore = 0;
    showQuestions(que_count);
    queCounter(que_num);
    clearInterval(counter);
    startTimer(timeValue);
    clearInterval(counterLine);
    startTimerLine(widthValue);
    next_btn.style.display = "none";
}

//finished the question and user clicks on "next" button to proceed to next question
next_btn.onclick = ()=>{
    if(que_count < questions.length -1 ){
        que_count++;
        que_num++;
        showQuestions(que_count);
        queCounter(que_num);
        clearInterval(counter);
        startTimer(timeValue);
        clearInterval(counterLine);
        startTimerLine(widthValue);
        next_btn.style.display = "none";
        timeOff.textContent = "Time Left";
    }else{
        clearInterval(counter);
        clearInterval(counterLine);
        console.log("Questions completed")
        showResultBox();
    }
}

//function to show all questions and their index
function showQuestions(index){
    const que_text = document.querySelector(".queue_text");
    
    let que_tag = '<span>'+ questions[index].num + '.' + questions[index].question +'</span>';  //"1.What does HTML stands for?""
    let option_tag = '<div class="option">' + questions[index].option[0] + '<span></span></div>'  //all the options provided for question
                     + '<div class="option">' + questions[index].option[1] + '<span></span></div>'
                     + '<div class="option">' + questions[index].option[2] + '<span></span></div>'
                     + '<div class="option">' + questions[index].option[3] + '<span></span></div>'; 
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++)
    {
        option[i].setAttribute("onclick", "optionSelected(this)")
    }
}

let tickIcon = '<div class="icon correct"><i class="fas fa-check"></i></div>'
let crossIcon = '<div class="icon wrong"><i class="fas fa-times"></i></div>'

//if correct or wrong 
function optionSelected(answer){
    clearInterval(counter);
    clearInterval(counterLine);
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    let allOptions = option_list.children.length;
    if(userAns == correctAns)
    {
        userScore +=1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Correct Answer!");
        answer.insertAdjacentHTML("beforeend", tickIcon);  //tick icon for correct
    }
    else{
        answer.classList.add("incorrect");
        console.log("Sorry it is an incorrect answer.");
        answer.insertAdjacentHTML("beforeend", crossIcon);  //cross icon for wrong 

        //if wrong answer chosen, will show correct answer 
        for (let i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
                option_list.children[i].setAttribute("class", "option correct");
                option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
            }
        }
    }

    for (let i = 0; i < allOptions; i++) {
        option_list.children[i].classList.add("disabled");
    }
    next_btn.style.display = "block";
}

//show different result messages when have different scores 
function showResultBox(){
    info_box.classList.remove("activeInfo");
    info_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");
    if(userScore == 5){
        let scoreTag = '<span> and congratulations!, You got <p>'+ userScore + '</p> out of <p>'+ questions.length+'</p></span>';
        scoreText.innerHTML = scoreTag;
        //new_btn.appendChild(form_page);
        //document.body.appendChild(new_btn);
        
    }
    else if(userScore > 3){
        let scoreTag = '<span>and congrats!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else if(userScore > 1){
        let scoreTag = '<span>and nice!, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{
        let scoreTag = '<span>and sorry, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

//count the number of questions (1 out of 5 questions etc)
function queCounter(index){
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>'+ index +'</p><p>of</p><p>'+ questions.length +'</p><p>Questions</p></span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;

}

//15 seconds timer 
function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
            timeCount.textContent = "00";
            timeOff.textContent = "Time is up.";

            let correctAns = questions[que_count].answer;
            let allOptions = option_list.children.length;

            for (let i = 0; i < allOptions; i++) {
                if(option_list.children[i].textContent == correctAns){
                    option_list.children[i].setAttribute("class", "option correct");
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIcon);
                }
            }
            for (let i = 0; i < allOptions; i++) {
                option_list.children[i].classList.add("disabled");
            }
            next_btn.style.display = "block";
        }
    }
}

//to stop the timer for each question
function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time +=1;
        timeLine.style.width = time + "px"
        if(time > 549){
            clearInterval(counterLine);
        }
    }
}