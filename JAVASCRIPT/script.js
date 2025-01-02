const d = new Date();
let time = d.toLocaleString();

console.log(time);



const showtime = document.querySelector('.date');
showtime.style.color = "red";

console.log(showtime);

console.log(11 + 11 + "11");

let y = 10;
console.log(y === "10");
console.log(y == "10");


let a = true;
b = false;
console.log();



let score = 60;

if (score >= 80) {
    console.log("A");
} else if(score >= 60 && score < 80){
    console.log("B");
} else if(score >= 40 && score < 60){
    console.log("C");
} else (score > 0 && score < 40){
    console.log("D");
}