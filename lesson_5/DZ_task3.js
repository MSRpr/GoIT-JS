/* Задание 3 (Калькулятор)
Напишите код, который:
•	Запрашивает по очереди значения при помощи prompt и сохраняет их в массиве.
•	Заканчивает ввод, как только посетитель введёт пустую строку, не число или нажмёт «Отмена».
•	При этом ноль 0 не должен заканчивать ввод, это разрешённое число.
•	Выводит сумму всех значений массива когда ввод прекращен.
 */
function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var sum = [];
var res = 0;
do {
    var ask = +prompt('Введите число: ');
    if (isNumeric(ask)&& ask) {
        sum.push(ask);
    } else {
        for (var i = 0; i < sum.length; i++) {
            res += sum[i];
        }
        break;
    }
} while (true);

console.log(res);