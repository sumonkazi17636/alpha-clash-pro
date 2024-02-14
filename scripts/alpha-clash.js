// function play(){

//     hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     show the playground
//     const playGroundSection = document.getElementById('play-ground');
//     playGroundSection.classList.remove('hidden');
// }

function continueGame(){
    // random alphabet create
    const alphabet = getARandomAlhabet();
    console.log('your alphabet is:',alphabet);

    // show the random alphabet on the display

    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // set alphabet background color 
    setBackgroundColorByID(alphabet);
    //removeBackgroundColorByID(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}