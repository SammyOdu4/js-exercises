/*
================
EXERCISE 1

Task 1
Using setTimeout, change the background colour of the page after 5 seconds (5000 milliseconds).

Task 2
Update your code to make the colour change every 5 seconds to something different. Hint: try searching for setInterval.

================
*/

//task 1
setTimeout(function(){
    document.body.style.backgroundColor = "yellow";

}, 5000);

//task 2.
let colours = ["pink", "red", "blue"];
setInterval(function(){
    document.body.style.backgroundColor = "yellow";

}, 5000);

