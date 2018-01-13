/*Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря, умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(1, 100) = 1 * 1 * ...* 1 = 1*/

function pow(x, c) {
    var res = x;
    for (var i = 0; i < c; i++) {
        res *= x;
    }
    return res;
}
console.log(pow(2, 4));

