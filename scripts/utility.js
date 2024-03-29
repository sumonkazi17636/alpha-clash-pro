function hideElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('hidden');

}

function showElementById(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('hidden');
}

function setBackgroundColorByID(elementid){
    const element = document.getElementById(elementid);
    element.classList.add('bg-orange-400');

}

function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;

}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function removeBackgroundColorByID(elementid){
    const element = document.getElementById(elementid);
    element.classList.remove('bg-orange-400');

}

function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

function getARandomAlhabet(){
    //get or create an alphabets array
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetsString.split('');
    //console.log(alphabets);

    //get a random index 0 - 25

    const randomNumber = Math.random()*25;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    //console.log(index,alphabet,);
    return alphabet;
}