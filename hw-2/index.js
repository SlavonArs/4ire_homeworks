// Реализовать функцию для подсчета n-го обобщенного числа Фибоначчи.

// Написать функцию для подсчета n-го обобщенного [числа Фибоначчи](https://ru.wikipedia.org/wiki/%D0%A7%D0%B8%D1%81%D0%BB%D0%B0_%D0%A4%D0%B8%D0%B1%D0%BE%D0%BD%D0%B0%D1%87%D1%87%D0%B8). Аргументами на вход будут три числа - F0, F1, n, где F0, F1 - первые два числа последовательности (могут быть любыми целыми числами), n - порядковый номер числа Фибоначчи, которое надо найти. Последовательнось будет строиться по следующему правилу F2 = F0 + F1, F3 = F1 + F2 и так далее.

// Считать с помощью модального окна браузера число, которое введет пользователь (n).

// С помощью функции посчитать n-е число в обобщенной последовательности Фибоначчи и вывести его на экран.

// Пользователь может ввести отрицательное число - результат надо посчитать по такому же правилу (F-1 = F-3 + F-2).

let proces = true;

while (proces == true) {


do {
    firstNumber = +prompt("Enter First number", "1");
} while (isNaN(firstNumber) || firstNumber == "");
do {
    secondNumber = +prompt("Enter second number", "2");
} while (isNaN(secondNumber) || secondNumber == "");
do {
    steps = +prompt("Enter number of steps", "10");
} while (isNaN(steps) || steps == "");


function fibonachi(f0, f1, n) {
    let f2;
    if (n === 0) {
        return f0;
    }
    if (n === 1) {
        return f1;
    }
    if (n > 1) {
        for(let i = 1; i <= n; i++) {
            f2 = f0 + f1;
            f0 = f1;
            f1 = f2;
        }
    }
    if (n < 0) {
        for(i = 1; i <= n; i++) {
            f2 = f0 - f1;
            f0 = f1;
            f1= f2;
        }
    }
    return f2;
}

alert(`Your Fibonachi number is ${fibonachi(firstNumber, secondNumber, steps)}`);

proces = confirm("Try again?");
}