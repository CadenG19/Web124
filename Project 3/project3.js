/*
@Project 2
@author: Caden Goodman
@file: project2.js
@description: changes content of index.html 
@date: 16 March 2025
*/

var my_name = "Caden Goodman"
var my_desired_salary = 1000000
var vetran_status = true
var friend_names = ["Quintin", "Jenny", "Jude"]
var friends_desired_salary = [1000001, 1000002, 1000003]
var another_friend = {first_name: "Frank", last_name: "Wright", desired_salary: 1000004}

console.log(my_name)
console.log(my_desired_salary)
console.log(vetran_status)
for (let i = 0; i < friend_names.length; i++){
    console.log(friend_names[i])
    console.log(friends_desired_salary[i])
}
for(const key in another_friend){
    console.log(key + " " + another_friend[key])
}