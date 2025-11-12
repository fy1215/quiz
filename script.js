const questions = [
    {
        question: "JavaScriptで変数を宣言するキーワードは？",
        choices: ["var", "let", "const", "全部正解"],
        correct: 3
    },
    {
        question: "HTML要素を取得するメソッドは？",
        choices: ["getElement", "getElementById", "selectElement", "findElement"],
        correct: 1
    },
    {
        question: "配列の要素数を取得するプロパティは？",
        choices: ["size", "count", "length", "total"],
        correct: 2
    },
    {
        question: "CSSで中央揃えにするプロパティは？",
        choices: ["align: center", "text-align: center", "center: true", "position: center"],
        correct: 1
    },
    {
        question: "非同期処理を扱うキーワードは？",
        choices: ["await", "async", "promise", "全部正解"],
        correct: 3
    }
];

const ques = document.getElementById('question');
const choices = document.getElementsByClassName('choices');
const BtnClass = document.getElementById('BtnClass');
const corAry = [];
let score = 0;
let random = null;

const showQuestion = () => {
    random = Math.floor(Math.random() * questions.length);
    if (!corAry.includes(random)) {
        corAry.push(random);
        ques.textContent = questions[random].question;
        replace();
    } else if (corAry.length === questions.length) {
        BtnClass.remove();
        ques.textContent = `Score : ${score} / ${questions.length}`;
        return;
    }
    else {
        showQuestion();
    };
}

const decision = (e) => {
    if (e.target === choices[questions[random].correct]) {
        new Audio('Quiz-Ding_Dong02-2(Fast-Single).mp3').play();
        score++;
    } else {
        new Audio('Quiz-Buzzer05-2(Short).mp3').play();
    }
    showQuestion();
}

const replace = () => {
    Array.from(choices).forEach((id, index) => {
        id.textContent = questions[random].choices[index];
    })
}

document.addEventListener('DOMContentLoaded', () => {
    showQuestion();

    Array.from(choices).forEach((id) => {
        id.addEventListener('click', decision);
    });
});








