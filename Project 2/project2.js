/*
@Project 2
@author: Caden Goodman
@file: project2.js
@description: changes content of index.html 
@date: 16 March 2025
*/

myName = "Caden Goodman";
para1 = document.getElementById("p1");
para1.textContent = myName;

n1 = 15;
n2 = 2;
numberSum = n1 + n2;
document.getElementById("p2").textContent = numberSum;

numberMult = n1 * n2;
document.getElementById("p3").textContent = numberMult;

myNameAddNum = myName + " " + n1;
document.getElementById("p4").textContent = myNameAddNum;

myNameMultNum = myName * n2;
document.getElementById("p5").textContent = myNameMultNum;

ageCompare = 26 > numberMult;
document.getElementById("p6").textContent = ageCompare;