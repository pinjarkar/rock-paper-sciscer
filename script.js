
let container = document.querySelector(".container");
let container2 = document.querySelector(".container2");
let rock = document.querySelector(".rock");
let paper = document.querySelector(".paper");
let scissor = document.querySelector(".scissor");
let tryAgainBtn = document.querySelector(".tryAgain");
let playAgainBtn = document.querySelector(".playAgainBtn");
let scoreBtn = document.querySelector(".score");
let hover = document.querySelector(".imgBox1");
let hover2 = document.querySelector(".imgBox3");
let hover3 = document.querySelector(".imgBox4");
let inner = document.querySelectorAll(".innerBox");
let gameRules = document.querySelector(".gameRules");
let score = 0;

let actions = [rock, paper, scissor];
let interval;
def();
actions.forEach((item) => {
    item.addEventListener("click", () => {
        def();
        verdict(item.classList[0]);
    })
})

function verdict(player) {

    let num = Math.floor(Math.random() * 1000) % 3;
    let computer = actions[num].classList[0];


    if (player == computer) {
        console.log("Draw");
        blink();

    }

    else if (player == "rock") {
        if (computer == "scissor") {
            display(player, computer, true);
        }
        else if (computer == "paper") {
            display(player, computer, false);
        }
    }
    else if (player == "scissor") {
        if (computer == "rock") {

            display(player, computer, false);
        }
        else if (computer == "paper") {
            display(player, computer, true);

        }
    }
    else if (player == "paper") {
        if (computer == "rock") {

            display(player, computer, true);
        }
        else if (computer == "scissor") {

            display(player, computer, false);

        }
    }
}


function display(player, computer, isWin) {
    let playerAction = document.querySelector(".playerAction");
    playerAction.src = `images/${player}.svg`;

    let pcAction = document.querySelector(".pcAction");
    pcAction.src = `images/${computer}.svg`;

    let res = document.querySelector("h1");
    if (isWin) {
        score++;
        res.innerText = "YOU WON";
    }
    else {
        res.innerText = "YOU LOSE";
    }
    resultScreen();
}

function blink() {
    console.log("in blink");
    interval = setInterval(() => {
        if (tryAgainBtn.textContent == "TRY AGAIN")
            tryAgainBtn.textContent = "";
        else
            tryAgainBtn.textContent = "TRY AGAIN";
    }, 500);
}

function def() {
    tryAgainBtn.textContent = "";
    clearInterval(interval);


    playAgainBtn.addEventListener("click", () => {
        container.style.display = "flex";
        container2.style.display = "none";
    })
}

function resultScreen() {
    container.style.display = "none";
    container2.style.display = "flex";


    scoreBtn.innerText = score;
}

hover.addEventListener("mouseenter", () => {

    inner[0].style.height = '150px';
    inner[0].style.width = '150px';

    scissor.style.height = '100px';
    scissor.style.width = '100px';

})

hover.addEventListener("mouseleave", () => {

    inner[0].style.height = '100px';
    inner[0].style.width = '100px';

    scissor.style.height = '57px';
    scissor.style.width = '42px';
})

hover2.addEventListener("mouseenter", () => {

    inner[1].style.height = '150px';
    inner[1].style.width = '150px';

    rock.style.height = '100px';
    rock.style.width = '100px';

})
hover2.addEventListener("mouseleave", () => {

    inner[1].style.height = '100px';
    inner[1].style.width = '100px';

    rock.style.height = '59px';
    rock.style.width = '80px';
})

hover3.addEventListener("mouseenter", () => {

    inner[2].style.height = '150px';
    inner[2].style.width = '150px';

    paper.style.height = '100px';
    paper.style.width = '100px';
})
hover3.addEventListener("mouseleave", () => {

    inner[2].style.height = '100px';
    inner[2].style.width = '100px';

    paper.style.height = '72px';
    paper.style.width = '72px';
})

let rulesBtn = document.querySelector(".rules");

rulesBtn.addEventListener("click", () => {
    gameRules.style.display = "block";

})


let closeBtn = document.querySelector(".closeBtn");
closeBtn.addEventListener("click", () => {
    gameRules.style.display = "none";
})