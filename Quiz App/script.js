const question = [
    {
        question : "Which is larget animal in the world" , 
        answer:[
            {text: "Shark" , correct: false},
            {text: "Blue whale" , correct: true},
            {text: "Elephant" , correct: false},
            {text: "Giraffe" , correct: false},
        ]
    },

    {
        question : "Which is the smallest country in the world" , 
        answer:[
            {text: "Vatican city" , correct: true},
            {text: "Butan" , correct: true},
            {text: "Naple" , correct: false},
            {text: "Shre Lanka" , correct: false},
        ]
    },

    {
        question : "Which is the larget desert in the world" , 
        answer:[
            {text: "Kalahari" , correct: false},
            {text: "Gobi" , correct: false},
            {text: "Sahara" , correct: false},
            {text: "Antarctica" , correct: true},
        ]
    },

    {
        question : "Which is the smollest continent in the world" , 
        answer:[
            {text: "Asia" , correct: false},
            {text: "Australia " , correct: true},
            {text: "Arcti" , correct: false},
            {text: "Afric" , correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex =0;
    score = 0;
    nextButton.innerHTML = "next"
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + " . " + currentQuestion.
    question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer)
    });
}

function resetState(){
    nextButton.style.display="none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectdbtn = e.target;
    const isCorrect = selectdbtn.dataset.correct === "true";
    if(isCorrect){
        selectdbtn.classList.add("correct");
        score++;
    }else{
        selectdbtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
        });
       
     nextButton.style.display ="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You second ${score} out of ${question.length}`;
        
        nextButton.innerHTML = "Play Again";
        nextButton.style.display ="block";
}

function hendlNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click" , ()=>{
    if(currentQuestionIndex < question.length){
        hendlNextButton();
    }else{
        startQuiz();
    }
})

startQuiz();