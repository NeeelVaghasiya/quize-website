const questions = [

        {
            question: "What is a century in cricket?",
            optionA: "A) A cricket match that lasts for 100 overs",
            optionB: "B) A score of 100 or more runs by a batsman",
            optionC: "C) A bowler taking 100 wickets in a season",
            optionD: "D) A type of cricket ball used in test matches",
            correctOption: "optionB"
        },
        {
            question: "What is the highest individual score by a batsman in a One Day International (ODI) cricket match?",
            optionA: "A) 175",
            optionB: "B) 194",
            optionC: "C) 200",
            optionD: "D) 264",
            correctOption: "optionC"
        },
        {
            question: "How many players are there in a full cricket team, including both batting and bowling sides?",
            optionA: "A) 9",
            optionB: "B) 10",
            optionC: "C) 11",
            optionD: "D) 12",
            correctOption: "optionC"
        },
        {
            question: "Which country has won the most Cricket World Cups?",
            optionA: "A) India",
            optionB: "B) Australia",
            optionC: "C) England",
            optionD: "D) West Indies",
            correctOption: "optionB"
        },
        {
            question: "In cricket, what does LBW stand for?",
            optionA: "A) Leg Before Wicket",
            optionB: "B) Love of Bowling Wins",
            optionC: "C) Long Boundary Wall",
            optionD: "D) Leg Break Wobble",
            correctOption: "optionA"
        },
        {
            question: "Who is known as the 'God of Cricket'?",
            optionA: "A) Ricky Ponting",
            optionB: "B) Vivian Richards",
            optionC: "C) Sachin Tendulkar",
            optionD: "D) Jacques Kallis",
            correctOption: "optionC"
        },
        {
            question: "What is a 'Hat-trick' in cricket?",
            optionA: "A) Three sixes in a row",
            optionB: "B) Three wickets in three consecutive deliveries by a bowler",
            optionC: "C) A player scoring a fifty and taking five wickets in a match",
            optionD: "D) Three catches by a fielder in a match",
            correctOption: "optionB"
        },
        {
            question: "Which cricket format is the shortest in terms of the number of overs per side?",
            optionA: "A) Test cricket",
            optionB: "B) One Day International (ODI)",
            optionC: "C) Twenty20 (T20)",
            optionD: "D) Super Over",
            correctOption: "optionC"
        },
        {
            question: "What is the term for a delivery bowled by a spinner that turns sharply and unexpectedly after bouncing?",
            optionA: "A) Leg cutter",
            optionB: "B) Doosra",
            optionC: "C) Inswinger",
            optionD: "D) Yorker",
            correctOption: "optionB"
        },
        {
            question: "Who is the captain of the Indian cricket team as of 2021?",
            optionA: "A) Virat Kohli",
            optionB: "B) Rohit Sharma",
            optionC: "C) MS Dhoni",
            optionD: "D) Hardik Pandya",
            correctOption: "optionA"
        }
    
    
    // You can now use the 'cricketQuestions' array in your JavaScript code.
    
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions out of all available questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
//app would be dealing with 10questions per session
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1 //holds the current question number
let playerScore = 0  //holds the player score
let wrongAttempt = 0 //amount of wrong answers picked by player
let indexNumber = 0 //will be used in displaying next question

// function for displaying next question in the array to dom
//also handles displaying players and quiz information to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })

    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "green"
            playerScore++ //adding to player's score
            indexNumber++ //adding 1 to index so has to display next question..
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "green"
            wrongAttempt++ //adds 1 to wrong attempts 
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer() //check if player picked right or wrong option
    unCheckRadioButtons()
    //delays next question displaying for a second just for some effects so questions don't rush in on player
    setTimeout(() => {
        if (indexNumber <= 9) {
//displays next question as long as index number isn't greater than 9, remember index number starts from 0, so index 9 is question 10
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()//ends game if index number greater than 9 meaning we're already at the 10th question
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Bad Grades, Keep Practicing."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "Average Grades, You can do better."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "Excellent, Keep the good work going."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal, resets game and reshuffles questions
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}