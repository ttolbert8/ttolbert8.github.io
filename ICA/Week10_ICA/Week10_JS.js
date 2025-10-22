let triviaBtn = document.querySelector("#js-new-quote"); //trivia button
let answerBtn = document.querySelector("#js-tweet"); //reveal answer button
const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"; //christmas api

triviaBtn.addEventListener('click', newTrivia); //calls newTrivia function
answerBtn.addEventListener('click', newAnswer); //calls newAnswer function

let current = {
    question: "",
    answer: ""
}

async function newTrivia() {
    //console.log("working")
    try {
        const response = await fetch(endpoint); //await results of a fetch endpoint command
        if (!response.ok) {
            throw Error(response.statusText);
        }
        const json = await response.json(); //assign json response to variable
        current.question = json["question"];
        current.answer = json["answer"]
        displayTrivia(current.question);

        console.log(current.question + current.answer);
    }
    catch (error){
        console.log(error);
        alert("Failed to get new trivia")
    }
}

function displayTrivia(question) {
    const questionText = document.querySelector("#js-quote-text");
    const answerText = document.querySelector("#js-answer-text")
    questionText.textContent = question;
    answerText.textContent = "";
}

function newAnswer() {
    const answerText = document.querySelector("#js-answer-text");
    answerText.textContent = current.answer;
}

newTrivia();