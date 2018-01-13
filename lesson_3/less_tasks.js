//Задачка 1
switch(browser) {
    case 'IE':
        alert('О, да у вас IE!');
        break;
    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
        alert('Браузер норм!');
        break;
    default:
        alert('Кто здесь?');
}
var browser = prompt('Введите браузером которым вы пользуетесь: ', 'Yandex');
if (browser == 'IE') {
    alert('О, да у вас IE!');
} else if (browser == 'Chrome' || browser == 'Firefox' || browser == 'Safari' || browser == 'Opera') {
    alert('Да, и эти браузеры мы поддерживаем');
} else {
    alert('Мы надеемся, что и в вашем браузере все ок!');
}

//Задачка 2
var a = +prompt('Pls enter A?', '');
if (a === 0) {
alert(0);
}
if (a === 1) {
alert(1);
}
if (a === 2 || a === 3) {
alert('2, 3');
}

//Задачка 3
var a = +prompt('Pls enter A?', '');
switch (a) {
    case 0:
        alert(0);
        break;
    case 1:
        alert(1);
        break;
    case 2:
    case 3:
        alert('2,3');
        break;
    default:
        alert('none');
}

//Задача 4
var i = 3;
while(i) {
    console.log( i-- );
}
for (var i = 2; i < 10; i += 2) {
    console.log(i);
}
var x = '';
for (var i = 0; i < 7; i++) {
    console.log(x += '#');
}

//Задача 5
function sum(a,b){
    return a+b;
}
console.log(sum(2,5));

////Задача 6
function min(a, b) {
    var res = (a < b) ? a : b;
    return res;
}
console.log(min(-4, -71));
