
/*Задачка 1
Напишите функцию sumTo(n), которая для данного n вычисляет сумму чисел от 1 до n

    sumTo(3) = 3 + 2 + 1 = 6
    sumTo(4) = 4 + 3 + 2 + 1 = 10

    • Рекурсия
    • Цикл
    • Формула арифметической прогрессии
*/
    function sumTo(n) {
        return (n > 1) ? n + sumTo(n - 1) : n;
    }

    console.log('Задачка 1');
    console.log(sumTo(5));

/*Задачка 2
Написать функцию вычисляющую факториал числа n
    n! = n * (n - 1) * (n - 2) * … * 1
*/
    function factorial(n) {
        return (n > 1) ? n * factorial(n - 1) : 1;
    }

    console.log('Задачка 2');
    console.log(factorial(5));

/*Задачка 3
Написать функцию которая возвращает случайное число из интервала (0, max)
*/
    function rand1(n) {
        return Math.round(Math.random() * n)
    }

    console.log('Задачка 3');
    console.log(rand1(5));

/*Задачка 4
Написать функцию которая возвращает случайное число из интервала (min, max)
*/
    function rand2(min, max) {
        return Math.round(min + Math.random() * (max - min));
    }

    console.log('Задачка 4');
    console.log(rand2(1, 10));

/*Задачка 5
Написать функцию которая возвращает строку с заглавным первым символом
    upperFirst('hello') == 'Hello';
    upperFirst('') == ''; // нет ошибок при пустой строке
*/
    function upperFirst(str) {
        return str.toString().substring(0, 1).toUpperCase() + str.toString().substring(1);
    }

    console.log('Задачка 5');
    console.log(upperFirst('string'));