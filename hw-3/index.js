// - Написать функцию filterBy(), которая будет принимать в себя 2 аргумента. Первый аргумент - массив, который будет содержать в себе любые данные, второй аргумент - тип данных.
// - Функция должна вернуть новый массив, который будет содержать в себе все данные, которые были переданы в аргумент, за исключением тех, тип которых был передан вторым аргументом. То есть, если передать массив ['hello', 'world', 23, '23', null], и вторым аргументом передать 'string', то функция вернет массив [23, null].

let confirmation = true;

while(confirmation == true) {

    const randomArray = [
        false,
        567,
        Symbol(574),
        null,
        undefined,
        { 1: 12 },
        ["text", 1, "567", {}],
        true,
        "text",
        function () {},
        "love 4ire academy",
        "mentor very cool",
        457456456,
    ];

    let type = prompt("Choise ono of this js Data Types: number, undefined, bigint, boolean, string, object, function, symbol,", "number");

    function filterBy(array, dataType) {
    let changedArray = array.filter(arrayElement => typeof arrayElement !== dataType);
    return changedArray;
    }

    console.log(filterBy(randomArray, type));

    confirmation = confirm("Try again");
}