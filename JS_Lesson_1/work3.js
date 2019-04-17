'use strict';

var a = 5;
console.log(a);

// let arr = ['plum.png','onrange.jpg','aple.bmp']; // МАССИВ
// console.log(arr[1]);

// //alert("Hello world!"); // всплывающее окно "OK"

// // let answer = confirm("Are you here?"); // всплывающее окно да/нет true/false

// // console.log(answer);

// let answer = +prompt ("Есть ли вам 18?", "ДА"); // + превращает строку в число

// console.log(typeof(answer)) // typeof проверяет тип данных 

// console.log("arr" + " - object");

// console.log(4 + +" - object"); 

//инкримен/декримент

// Префикная форма

let incr = 1, decr = 1;

// incr++; // увеличить на 1
// decr--; // уменьшить на 1

// console.log(incr);
// console.log(decr);

 console.log(++incr); // +1
 console.log(--decr); // -1

// Постфиксная форма

console.log(incr++);
console.log(decr--);

console.log(5%2); // = 1 остаток от деления
console.log("2" == 2); // сравнение обычное
console.log("2" === 2); // сравнение по типам

// и/или

let isChecked = true, isClose = false;


    console.log(isChecked || isClose); // && - это И / || - это ИЛИ
    // если И то true будет только если все переменные true
    // если ИЛИ то true будет  если  хоть в отдной переменной есть true
    // если ! - отрицание