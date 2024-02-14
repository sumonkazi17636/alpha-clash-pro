// function play(){

//     hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    //console.log('player pressed',playerPressed);

    //stop the game
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //target alphabet
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    //console.log(playerPressed,expectedAlphabet);

    //match the player pressed with target pressed that player pressed wrong or right keyword

    if(playerPressed === expectedAlphabet){
        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score',updatedScore);
        //console.log('you got a point');
        //update the score:
        //get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        //increased the current score 
        //const newScore = currentScore + 1;

        //show the updated score
        //currentScoreElement.innerText = newScore;
        //start a new game
        removeBackgroundColorByID(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you missed.you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life',updatedLife);

        if(updatedLife === 0){
            gameOver();
        }

        //get the current life number
            // const currentLifeElement = document.getElementById('current-life');
            // const currentLifeText = currentLifeElement.innerText;
            // const currentLife = parseInt(currentLifeText);
        //reduce the current life number
        //const reduceLife = currentLife - 1;

        //display the updated life number
        //currentLifeElement.innerText = reduceLife;
    }
}

//capture keyboard key press
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    // random alphabet create
    const alphabet = getARandomAlhabet();
    //console.log('your alphabet is:',alphabet);

    // show the random alphabet on the display

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set alphabet background color 
    setBackgroundColorByID(alphabet);
    //removeBackgroundColorByID(alphabet);

}

function play(){
    //hide everything except play-ground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    //reset life and score
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score',0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');

    //updated final score

    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('last-score',lastScore);

    //clear the last selected alphabet highlight

    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorByID(currentAlphabet);
}