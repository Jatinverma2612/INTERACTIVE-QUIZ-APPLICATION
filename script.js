let questions = [
    {question : "What is the capital of India?", options : ["Mumbai"," Delhi "," Kolkata","Chennai"], answer: " Delhi" },
    {question : "Which is the smallest planet in our solar system?" , options : [" Mars","Neptune","Mercury","Venus"], answer: "Mercury" },
    {question : "How many continents are there in the world?" , options : ["5","6","7","8"], answer: "7" },
    {question : "Which is the national animal of India?" , options : ["Elephant","Lion","Tiger","Deer"], answer: "Tiger" },
    {question : "What is H2O commonly known as?" , options : ["Oxygen","Hydrogen","Water","Carbon Dioxide"], answer: "Water" }  
];

let currentQns = 0;
let score = 0;

let loadQuestion = function(){
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn2").style.display = "none";
    document.getElementById("questions").innerText = questions[currentQns].question;

    let optionsHtml = "";
    questions[currentQns].options.forEach(option => {
        optionsHtml += `<button onclick='selectAnswer(this, "${option}")'>${option}</button>`;
    });
    document.getElementById("options").innerHTML = optionsHtml;
}

function selectAnswer(button, option){
    let buttons = document.querySelectorAll(".options button");
    buttons.forEach(btn => btn.disabled = true);
    if (option.trim() === questions[currentQns].answer.trim()) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
        buttons.forEach(btn => {
            if (btn.innerText.trim() === questions[currentQns].answer.trim()) {
                btn.classList.add("correct");
            }
        });
    }
    document.getElementById("btn1").style.display = "block";
}

function nextQuestion() {
    currentQns++;
    if (currentQns< questions.length) {
        loadQuestion();
    } else {
        document.getElementById("questions").style.display = "none";
        document.getElementById("options").style.display = "none";
        document.getElementById("btn1").style.display = "none";
        document.getElementById("btn2").style.display = "block";
    }
}

let showScore = function(){
    document.getElementById("btn2").style.display = "none";
    document.getElementById("Score").style.display = "block";
    document.getElementById("your-score").innerText = `${score} / ${questions.length}`;
}

loadQuestion();
