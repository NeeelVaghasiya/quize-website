const questions = [


        {
            question: "Which car manufacturer produces the Mustang?",
            optionA: "A) Ford",
            optionB: "B) Chevrolet",
            optionC: "C) Dodge",
            optionD: "D) Toyota",
            correctOption: "optionA"
        },
        {
            question: "What does SUV stand for?",
            optionA: "A) Sports Utility Vehicle",
            optionB: "B) Super Urban Vehicle",
            optionC: "C) Special Utility Van",
            optionD: "D) Standard Urban Vehicular",
            correctOption: "optionA"
        },
        {
            question: "Which automaker is known for its luxury brand, Lexus?",
            optionA: "A) Toyota",
            optionB: "B) BMW",
            optionC: "C) Mercedes-Benz",
            optionD: "D) Volkswagen",
            correctOption: "optionA"
        },
        {
            question: "What is the top speed of a Bugatti Veyron Super Sport?",
            optionA: "A) 180 mph",
            optionB: "B) 220 mph",
            optionC: "C) 250 mph",
            optionD: "D) 280 mph",
            correctOption: "optionD"
        },
        {
            question: "What type of fuel does a hybrid car primarily use?",
            optionA: "A) Diesel",
            optionB: "B) Natural Gas",
            optionC: "C) Electricity and Gasoline",
            optionD: "D) Ethanol",
            correctOption: "optionC"
        },
        {
            question: "Who founded the Tesla electric car company?",
            optionA: "A) Elon Musk",
            optionB: "B) Steve Jobs",
            optionC: "C) Bill Gates",
            optionD: "D) Larry Page",
            correctOption: "optionA"
        },
        {
            question: "Which country is known for producing the iconic Mini Cooper?",
            optionA: "A) Germany",
            optionB: "B) Japan",
            optionC: "C) Italy",
            optionD: "D) United Kingdom",
            correctOption: "optionD"
        },
        {
            question: "What is the most popular car color worldwide?",
            optionA: "A) Red",
            optionB: "B) Black",
            optionC: "C) White",
            optionD: "D) Blue",
            correctOption: "optionC"
        },
        {
            question: "What does ABS stand for in the context of car brakes?",
            optionA: "A) Automated Brake System",
            optionB: "B) Anti-Brake System",
            optionC: "C) Anti-Lock Brake System",
            optionD: "D) Advanced Brake Safety",
            correctOption: "optionC"
        },
        {
            question: "Which car manufacturer produces the Civic and Accord models?",
            optionA: "A) Ford",
            optionB: "B) Toyota",
            optionC: "C) Honda",
            optionD: "D) Chevrolet",
            correctOption: "optionC"
        },
        {
            question: "What is the name of the famous Italian supercar manufacturer?",
            optionA: "A) Ferrari",
            optionB: "B) Lamborghini",
            optionC: "C) Porsche",
            optionD: "D) Bugatti",
            correctOption: "optionA"
        },
        {
            question: "In which year was the Ford Model T, the first mass-produced car, introduced?",
            optionA: "A) 1900",
            optionB: "B) 1910",
            optionC: "C) 1920",
            optionD: "D) 1930",
            correctOption: "optionB"
        },
        {
            question: "What does RPM stand for in a car's engine performance?",
            optionA: "A) Revolutions Per Minute",
            optionB: "B) Road Performance Measurement",
            optionC: "C) Random Power Mode",
            optionD: "D) Rear Passenger Mobility",
            correctOption: "optionA"
        },
        {
            question: "Which car brand features a prancing horse in its logo?",
            optionA: "A) Mercedes-Benz",
            optionB: "B) Porsche",
            optionC: "C) Ferrari",
            optionD: "D) Audi",
            correctOption: "optionC"
        },
        {
            question: "Which automaker produces the Prius, a popular hybrid car model?",
            optionA: "A) Nissan",
            optionB: "B) Honda",
            optionC: "C) Toyota",
            optionD: "D) Hyundai",
            correctOption: "optionC"
        },
        {
            question: "What is the term for a car's ability to maintain constant speed without using the accelerator pedal?",
            optionA: "A) Cruise control",
            optionB: "B) Turbo boost",
            optionC: "C) Overdrive",
            optionD: "D) Speed limit assist",
            correctOption: "optionA"
        },
        {
            question: "What does 4WD stand for in the context of car drivetrains?",
            optionA: "A) Four Wheel Drive",
            optionB: "B) Forward Wheel Drive",
            optionC: "C) Four-Wheeled Drifting",
            optionD: "D) Front and Rear Wheel Drive",
            correctOption: "optionA"
        },
        {
            question: "Which car company is known for the 'Model S' electric car?",
            optionA: "A) Ford",
            optionB: "B) Tesla",
            optionC: "C) Nissan",
            optionD: "D) Chevrolet",
            correctOption: "optionB"
        },
        {
            question: "What is the term for a car with a hard top that can be removed to make it open-roofed?",
            optionA: "A) Convertible",
            optionB: "B) Sedan",
            optionC: "C) Coupe",
            optionD: "D) Station Wagon",
            correctOption: "optionA"
        },
        {
            question: "What is the term for the glass roof commonly used in cars?",
            optionA: "A) Windshield",
            optionB: "B) Moonroof",
            optionC: "C) Headlight",
            optionD: "D) Grille",
            correctOption: "optionB"
        },
        {
            question: "What is the term for a car that is designed to resemble a classic or vintage model?",
            optionA: "A) Retro car",
            optionB: "B) Vintage vehicle",
            optionC: "C) Classic cruiser",
            optionD: "D) Oldtimer",
            correctOption: "optionA"
        },
        {
            question: "In car terms, what is a 'hatchback'?",
            optionA: "A) A car with a detachable roof",
            optionB: "B) A car with a rear door that opens upward",
            optionC: "C) A car with a convertible top",
            optionD: "D) A car with a rear storage compartment that opens with the trunk",
            correctOption: "optionB"
        },
        {
            question: "What is the term for the car's ability to switch between two-wheel and four-wheel drive mode?",
            optionA: "A) 4WD",
            optionB: "B) AWD",
            optionC: "C) RWD",
            optionD: "D) FWD",
            correctOption: "optionB"
        },
        
        {
            question: "What is the term for a car's ability to generate and store energy during braking to improve fuel efficiency?",
            optionA: "A) Regenerative Braking",
            optionB: "B) Dynamic Acceleration",
            optionC: "C) Braking Boost",
            optionD: "D) Power Steering",
            correctOption: "optionA"
        },
        {
            question: "What does MPG stand for when referring to a car's fuel efficiency?",
            optionA: "A) Miles Per Gallon",
            optionB: "B) Miles Per Hour",
            optionC: "C) Miles Per Gear",
            optionD: "D) Miles Per Grid",
            correctOption: "optionA"
        },
        {
            question: "What is the term for the car's ability to switch between two-wheel and four-wheel drive mode?",
            optionA: "A) 4WD",
            optionB: "B) AWD",
            optionC: "C) RWD",
            optionD: "D) FWD",
            correctOption: "optionB"
        },
        {
            question: "Which car manufacturer is known for its Golf and Passat models?",
            optionA: "A) Ford",
            optionB: "B) Toyota",
            optionC: "C) Volkswagen",
            optionD: "D) Honda",
            correctOption: "optionC"
        },
        {
            question: "What does EV stand for in the context of cars?",
            optionA: "A) Electric Vehicle",
            optionB: "B) Eco Vehicle",
            optionC: "C) Efficient Vehicle",
            optionD: "D) Engineless Vehicle",
            correctOption: "optionA"
        },
        {
            question: "What is the term for a car's ability to generate and store energy during braking to improve fuel efficiency?",
            optionA: "A) Regenerative Braking",
            optionB: "B) Dynamic Acceleration",
            optionC: "C) Braking Boost",
            optionD: "D) Power Steering",
            correctOption: "optionA"
        },
        {
            question: "What does MPG stand for when referring to a car's fuel efficiency?",
            optionA: "A) Miles Per Gallon",
            optionB: "B) Miles Per Hour",
            optionC: "C) Miles Per Gear",
            optionD: "D) Miles Per Grid",
            correctOption: "optionA"
        },
    
    
   
    
   

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