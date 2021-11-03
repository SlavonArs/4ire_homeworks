// Вам нужно оформить программу конвертер валют, используя пройденные темы.
// Программа должна уметь переводить 5 валют друг в друга (валюты на ваше усмотрение). Пользователь вводит сначала название валюты, затем вводит сумму, и название валюты в которую хочет перевести, после чего получает ответ (для общения с пользователем используем prompt и alert подробнее тут). 
// Если пользователь ввел что-то неверно, нужно повторить ввод этой информации. 
// По окончании конвертации спросить у пользователя хочет ли он произвести конвертацию еще раз. Если да - то повторить все о'и. Если нет - выполнить выход из программы.


let exchangeProces = true;
let givenCurrency;
let receivedCurrency;

const USD = 26.22;
const EUR = 30.3;
const RUB = 0.34;
const PLN = 6.4;
const GBP = 35.2;

while (exchangeProces == true) {
  
    do {
        givenCurrency = prompt("Enter given currency", "USD");
    } while (givenCurrency.toUpperCase() !== "USD" && givenCurrency.toUpperCase() !== "EUR" && givenCurrency.toUpperCase() !== "RUB" && givenCurrency.toUpperCase() !== "PLN" && givenCurrency.toUpperCase() !== "GBP");

    do {
        amount = prompt("Enter convertible amount", "100");
    } while (amount < 0 || isNaN(amount));

    do {
        receivedCurrency = prompt("Enter received currency", "EUR");
    } while (receivedCurrency.toUpperCase() !== "USD" && receivedCurrency.toUpperCase() !== "EUR" && receivedCurrency.toUpperCase() !== "RUB" && receivedCurrency.toUpperCase() !== "PLN" && receivedCurrency.toUpperCase() !== "GBP");

    if (givenCurrency.toUpperCase() === receivedCurrency.toUpperCase()) {
        alert(amount);
    } else if (givenCurrency.toUpperCase() === "USD" && receivedCurrency.toUpperCase() ==="EUR") { //USD EUR
            result = amount * (USD / EUR);
            alert(result);
    } else if (givenCurrency.toUpperCase() === "USD" && receivedCurrency.toUpperCase() ==="RUB") { //USD RUB
        result = amount * (USD / RUB);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "USD" && receivedCurrency.toUpperCase() ==="PLN") { //USD PLN
        result = amount * (USD / PLN);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "USD" && receivedCurrency.toUpperCase() ==="GBP") { //USD GBP
        result = amount * (USD / GBP);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "EUR" && receivedCurrency.toUpperCase() ==="USD") { //EUR USD 
        result = amount * (EUR / USD);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "EUR" && receivedCurrency.toUpperCase() ==="RUB") { //EUR RUB
        result = amount * (EUR / RUB);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "EUR" && receivedCurrency.toUpperCase() ==="PLN") { //EUR PLN 
        result = amount * (EUR / PLN);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "EUR" && receivedCurrency.toUpperCase() ==="GBP") { //EUR GBP
        result = amount * (EUR / GBP);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "RUB" && receivedCurrency.toUpperCase() ==="USD") { //RUB USD 
        result = amount * (RUB / USD);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "RUB" && receivedCurrency.toUpperCase() ==="EUR") { //RUB EUR 
        result = amount * (RUB / EUR);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "RUB" && receivedCurrency.toUpperCase() ==="PLN") { //RUB PLN 
        result = amount * (RUB / PLN);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "RUB" && receivedCurrency.toUpperCase() ==="GBP") { //RUB GBP 
        result = amount * (RUB / GBP);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "PLN" && receivedCurrency.toUpperCase() ==="USD") { //PLN USD 
        result = amount * (PLN / USD);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "PLN" && receivedCurrency.toUpperCase() ==="EUR") { //PLN EUR 
        result = amount * (PLN / EUR);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "PLN" && receivedCurrency.toUpperCase() ==="RUB") { //PLN RUB
        result = amount * (PLN / RUB);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "PLN" && receivedCurrency.toUpperCase() ==="GBP") { //PLN GBP 
        result = amount * (PLN / GBP);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "GBP" && receivedCurrency.toUpperCase() ==="USD") { //GBP USD 
        result = amount * (GBP / USD);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "GBP" && receivedCurrency.toUpperCase() ==="EUR") { //GBP EUR
        result = amount * (GBP / EUR);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "GBP" && receivedCurrency.toUpperCase() ==="RUB") { //GBP RUB
        result = amount * (GBP / RUB);
        alert(result);
    } else if (givenCurrency.toUpperCase() === "GBP" && receivedCurrency.toUpperCase() ==="PLN") { //GBP PLN 
        result = amount * (GBP / PLN);
        alert(result);
    }

    exchangeProces = confirm("Exchange again?");
}