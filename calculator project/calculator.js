/*
@author Caden Goodman
@date 04 May 2025
@file calculator.js
*/
const MAX_TABLE_ROW = 10
inputText = document.getElementById("num");
inputButton = document.getElementById("calculate");
addTag = document.getElementById("add");
subTag = document.getElementById("sub");
mulTag = document.getElementById("mul");
divTag = document.getElementById("div");

function generateAdditionTable(paragraphTag, number){
    
    newText = String()
    for (let i = 1; i <= MAX_TABLE_ROW; i++){
        value = i + number
        newText += `${i} + ${number} = ${value}\n` 
    }
    paragraphTag.innerText = newText;
};

function generateSubtractionTable(paragraphTag, number){
    newText = String()
    count = 1;
    while(count <= MAX_TABLE_ROW){
        value = count - number
        newText += `${count} - ${number} = ${value}\n` 
        count += 1;
    }
    paragraphTag.innerText = newText;
};

function generateMultiplicationTable(paragraphTag, number){
    newText = String()
    count = 1;
    do{
        value = count * number
        newText += `${count} * ${number} = ${value}\n` 
        count += 1;
    }while(count <= MAX_TABLE_ROW);
    paragraphTag.innerText = newText;
};

function generateDivisionTable(paragraphTag, number){
    newText = String()
    for(let i = 1; i <= MAX_TABLE_ROW; i++ ){
        value = (i / number).toFixed(2)
        newText += `${i} / ${number} = ${value}\n` 
    }
    paragraphTag.innerText = newText;

};

inputButton.addEventListener('click', function(){
    number = Number(inputText.value);
    generateAdditionTable(addTag, number);
    generateSubtractionTable(mulTag, number);
    generateMultiplicationTable(subTag, number);
    generateDivisionTable(divTag, number);
});