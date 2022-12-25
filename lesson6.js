/*Створити скрипт який має визначити середнє арифметичне трьох чисел з насутпними умовами:

отримати від користувача через три prompt три числа
показати через alert середнє арифметичне цих чисел*/


const first = +prompt("Enter first number");
const second = +prompt("Enter second number");
const three = +prompt("Enter three number");

if (!isNaN(first) && !isNaN(second) && !isNaN(three)) {
    alert((first + second + three) / 3)
}else {
    alert('You entered the wrong number')
}

