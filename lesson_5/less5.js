/* Задачка 1
• Создайте пустой объект user.
• Добавьте свойство name со значением Sergey.
• Добавьте свойство surname со значением Petrov.
• Поменяйте значение name на Andrey.
• Добавьте свойство age со значением 30.
• Удалите свойство name из объекта.
• Выведите объект в консоль.
 */

var obj = {
    name: 'Sergey',
    surname: 'Petrov'
};

obj.name = 'Andrey';
obj['age'] = 30;
delete obj.name;

console.log(obj);

/* Задачка 2
Создайте функцию isEmpty(obj), которая
возвращает true, если в объекте нет свойств
и false — если хоть одно свойство есть.
 */

/*//Вар.1
function isEmptyObject(obj) {
    for (var i in obj) {
        if (obj.hasOwnProperty(i)) {
            return false;
        }
    }
    return true;
}

//Вар.2
function isEmpty(obj) {
    return (Object.keys(obj).length === 0)? console.log(true) : console.log(false);
}*/

//Вар.3 мой вариант
function isEmpty(obj) {
    var counter = 0;
    for (var item in obj) {
        counter += item;
    }
    return (counter === 0) ? console.log(true) : console.log(false);
}

var obj2 = {};
obj2['name'] = 'Max';
delete obj2.name;
isEmpty(obj2);


/* Задачка 3
Создайте функцию которая возвращает общий
размер фонда зарплат (сумму) всего отдела.
*/
var salaries = {
    'junior': 1000,
    'middle': 2500,
    'senior': 3500,
    'lead': 5000
};

function totalSumOut(obj) {
    var sum = 0;
    for (var key in obj) {
        sum += obj[key];
    }
    return console.log('Total salary fond: ' + sum);
}

totalSumOut(salaries);

/* Задачка 4
Написать функцию которая принимает на вход
массив и возвращает последний элемент массива.
*/

/* не совсем верный вариант, нужно не изменять массив, а просто вывести последний элемент.
function getLastIndex(arr) {
    return arr.pop();
}*/

function getLastIndex(arr) {
    return arr[arr.length - 1];
}

var x = [1, 2, 3, 4, 'string'];
console.log(getLastIndex(x));

/* Задачака 5
Написать функцию которая принимает на вход
2 параметра: массив, и элемент (любого типа).
Этот элемент нужно добавить в конец массива.
Функция должна вернуть массив с добавленным
новым элементом.
 */

function addLastIndex(arr, x) {
    arr.push(x);
    return arr;
}

var arr = [1, 2, 3, 4, 'string'];
console.log(addLastIndex(arr, 'model'));

/* Задачка 6
1. Создайте массив fruits с элементами «apple», «orange».
2. Добавьте в конец значение «kiwi»
3. Замените предпоследнее значение с конца на «pear». Код замены предпоследнего значения должен работать для массивов любой длины.
4. Удалите первое значение массива и выведите его console.
5. Добавьте в начало значения «apricot» и «peach».
*/

var arr6 = ['apple', 'orange', 'apple', 'orange'];
arr6.push('kiwi');
arr6[arr6.length - 2] = 'pear';
console.log(arr6.shift());
arr6.unshift('apricot', 'peach');
console.log(arr6);

/* Задачка 7
Написать функцию которая принимает на вход массив и
возвращает случайное значение из этого массива.
 */

function getRandArr(arr) {
    return 1 + Math.floor((Math.random() * arr.length));
}

console.log(getRandArr(arr6));

/* Задачка 8
Создайте функцию find(arr, value), которая ищет в массиве
arr значение value и возвращает его позицию, если найдено,
или -1, если не найдено.
 */

//Вар.1 мой вариант
function find(arr, value) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return console.log(i);
        }
    }
    return console.log(-1);
}

var arr8 = ['apple', 'orange', 'kiwi', 'orange', 3, 45, 12];
find(arr8, 12);

/*//Вар.2 проверяет браузер на indexOf
    if ([].indexOf) {
        var find = function (arr, value) {
            return arr.indexOf(value);
        }
    } else {
        var find = function (arr, value) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] === value) return i;
            }
            return -1;
        }
    }

var arr8 = ['apple', 'orange', 'kiwi', 'orange', 3, 45, 12];
console.log(find(arr8, 'kiwi'));
*/

/* Задачка 9
Создайте фунцию filterRange(arr, a, b), которая принимает массив чисел arr и возвращает новый массив, который содержит только числа из arr из диапазона от a до b.
То есть, проверка имеет вид a ≤ arr[i] ≤ b.
Функция не должна менять arr.
var arr = [5, 7, 4, 8, 3, 0];
var filtered = filterRange(arr, 3, 5);
// filtered = [5, 4, 3];
// arr = [5, 7, 4, 8, 3, 0];
 */

function filterRange(arr, a, b) {
    var filtered = [];
    for (var i = 0; i < arr.length; i++) {
        if (a <= arr[i] && arr[i] <= b) {
            filtered.push(arr[i]);
        }
    }
    return filtered;
}

var arr2 = [5, 7, 4, 8, 3, 0];
console.log(filterRange(arr2, 3, 5));


/*
var menuSetup = {
    width: 300,
    height: 200,
    title: 'Menu'
};
var counter = 0;
for (var item in menuSetup) {
    //console.log(item + ': ' + menuSetup[item]);
    counter++;
}
console.log(counter);

var message = 'Hello';
var phrase = message;
phrase += ' World';
console.log(message);

var message2 = {
    key1:'Hello'
};
var phrase2 = message2;
phrase2['key2']='World';
console.log(message2);


var user = {
    name: 'Sergey',
    age: 30
};
var clone = {}; // новый пустой объект
// скопируем в него все свойства user
for (var key in user) {
    clone[key] = user[key];
}
// теперь clone - полностью независимая копия
clone.name = 'Andrey'; // поменяли данные в clone
console.log( user.name ); // по-прежнем "Sergey"


var arr = ["Яблоко", "Апельсин", "Груша"];
for (var i = 0; i < arr.length; i++) {
    console.log( arr[i] );
}
function arrlog(item) {
    console.log(item);
}
arr.forEach(arrlog);

var matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log( matrix[1][1] ); // 5
*/
