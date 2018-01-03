/*Используя конструкцию if..else, напишите код, который будет спрашивать: 'Введите любое целое число?'
Затем выведите alert:1, если значение больше нуля, -1, если значение меньше нуля, 0, если значение равно нулю.*/


    var ask = +prompt('Введите любое целое число?');
    if (Number.isInteger(ask) && ask > 0) {
        alert(1);
    } else if (Number.isInteger(ask) && ask < 0) {
        alert(-1);
    } else if (Number.isInteger(ask) && ask == 0) {
        alert(0);
    } else {
        alert('Введите любое целое число');
    }


