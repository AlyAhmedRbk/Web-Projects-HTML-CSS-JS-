const questions = [{
    'que' : "Which of the following is Markup Language",
    'a' : "HTML",
    'b' : "CSS",
    'c' : "JS",
    'd' : "PHP",
    "correct" : 'a'
},
{
    'que' : "HTML is stand for _________",
    'a' : "Holistick Technical Method Library",
    'b' : "Hyper Text Markup Language",
    'c' : "Hyper Tax Makes Line",
    'd' : "None of the above",
    "correct" : 'b'
},
{
    'que' : " ALL HTML tags are enclosed in what?",
    'a' : "# and #",
    'b' : "? and !",
    'c' : "< and >",
    'd' : "{ and }",
    "correct" : 'c'
},
]

let index = 0;
let totalQuestion = questions.length;
let right = 0;
let wrong = 0;
const quesBox = document.getElementById('quesBox');
const optionsInput = document.querySelectorAll('.options');

const loadQuestion = ()=>{
    if(index === totalQuestion){
        return endQuiz();
    }
    reset();

    const data = questions[index];
    // console.log(data);
    quesBox.innerText = `${index+1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}


const submitQuiz = () => {
    const ans = getAnswer();
    const data = questions[index];
    
    if(ans === data.correct){
        right++;
    }else{
        wrong--;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = ()  => {
    let answer;
    optionsInput.forEach((input)=>{
        if(input.checked){
            answer =  input.value;
        }
    })

    return answer;
}

const reset = () => {
    optionsInput.forEach((inputs)=>{
        inputs.checked = false;
    })
}

const endQuiz = () => {
        document.getElementById('box').innerHTML = `
        <div style="text-align:center;"> 
            <h2>Thank You For Playing The Quiz</h2>
            <h2>${right}/${totalQuestion} are correct</h2>
        </div>
        `;
}
loadQuestion();