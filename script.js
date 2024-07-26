document.getElementById('show_rules').addEventListener('click', function() {
    var rules = document.getElementById('rules');
    if (rules.style.display === 'none' || rules.style.display === '') {
        rules.style.display = 'block';
    } else {
        rules.style.display = 'none';
    }
});
const choices=["rock","paper","scissors","lizard","spock"];
const playerDisplay=document.getElementById("playerDisplay");
const computerDisplay=document.getElementById("computerDisplay");
const resultDisplay=document.getElementById("resultDisplay");

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random()*5)];
    let result="";
    if(playerChoice===computerChoice){
        result="IT'S A TIE!";
    }
    else{
        switch (playerChoice) {
            case "rock":
                result=(computerChoice==="scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "rock":
                result=(computerChoice==="lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;
            case "scissors":
                result=(computerChoice==="paper") ? "YOU WIN!" : "YOU LOSE!";
                break;                
            case "scissors":
                result=(computerChoice==="lizard") ? "YOU WIN!" : "YOU LOSE!";
                break;  
            case "paper":
                result=(computerChoice==="rock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "paper":
                result=(computerChoice==="spock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "lizard":
                result=(computerChoice==="spock") ? "YOU WIN!" : "YOU LOSE!";
                break;                
            case "lizard":
                result=(computerChoice==="paper") ? "YOU WIN!" : "YOU LOSE!";
                break;  
            case "spock":
                result=(computerChoice==="rock") ? "YOU WIN!" : "YOU LOSE!";
                break; 
            case "spock":
                result=(computerChoice==="scissors") ? "YOU WIN!" : "YOU LOSE!";
                break;   
        } 
    }
    playerDisplay.textContent='PLAYER: '+playerChoice;
    computerDisplay.textContent='COMPUTER: '+computerChoice;
    resultDisplay.textContent=result;
}