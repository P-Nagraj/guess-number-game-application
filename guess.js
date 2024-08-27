let userElement=document.getElementById("userInput");
let gameResultElement=document.getElementById("gameResult")
let Random_number_element=Math.ceil(Math.random()*100);

function checkGuess(){
    let guessed_number=parseInt(userElement.value);

    if(guessed_number>Random_number_element){
        gameResultElement.textContent="Too High! Try Again.";
        gameResultElement.style.backgroundColor="#1e217c";

    }
    else if(guessed_number<=Random_number_element){
        gameResultElement.textContent="Too Low! Try Again.";
        gameResultElement.style.backgroundColor="#1e217c";
    }
    else if(guessed_number==Random_number_element){
        gameResultElement.textContent="Congratulation You Got It Right..!";
        gameResultElement.style.backgroundColor="green";
    }
    else{
        gameResultElement.textContent="Enter a valid Input";
        gameResultElement.style.backgroundColor="red"
    }
}