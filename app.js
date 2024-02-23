let user = 0;
let comp = 0;

let uInput = "";
let cInput = "";

let inputs = ["rock", "paper", "scissors"];

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userScore = document.querySelector("#user-score");
let compScore = document.querySelector("#comp-score");

choices.forEach((choice) =>{
    choice.addEventListener("click", () =>{
        uInput = choice.getAttribute("id");
        checkWinner(uInput);
        updateScore();
    });
});

const checkWinner = (uInput) =>{
    cInput = inputs[Math.floor(Math.random() * 3)];
    if(cInput===uInput){
        msg.style.backgroundColor = "#344e41";  
        msg.innerText = "Game was Draw. Play again!";
    }
    else if(uInput=="rock" && (cInput=="scissors")){
        msg.style.backgroundColor = "green";
        msg.innerText = "You win! Your Rock beats Scissors";
        user++;
    }
    else if(uInput=="paper" && (cInput=="rock")){
        msg.style.backgroundColor = "green";
        msg.innerText = "You win! Your Paper beats Rock";
        user++;
    }
    else if(uInput=="scissors" && (cInput=="paper")){
        msg.style.backgroundColor = "green";
        msg.innerText = "You win! Your Scissors beats Paper";
        user++;
    }
    else if(cInput=="rock" && (uInput=="scissors")){
        msg.style.backgroundColor = "red";
        msg.innerText = "You lost, Rock beats your Scissors";
        comp++;
    }
    else if(cInput=="paper" && (uInput=="rock")){
        msg.style.backgroundColor = "red";
        msg.innerText = "You lost, Paper beats your Rock";
        comp++;
    }
    else if(cInput=="scissors" && (uInput=="paper")){
        msg.style.backgroundColor = "red";
        msg.innerText = "You lost, Scissors beats your Paper";
        comp++;
    }
};

const updateScore = ()=>{
    userScore.innerText = `${user}`;
    compScore.innerText = `${comp}`;
}
