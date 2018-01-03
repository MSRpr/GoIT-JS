/*Напишите код, который будет запрашивать логин пользователя (prompt).
Если посетитель вводит 'admin', то спрашивать пароль, если нажал отмена (escape) — выводить 'Canceled', если вводит что-то другое — 'Access denied'.
Пароль проверять так. Если введён пароль 'passw0rd', то выводить 'Welcome home!', иначе — 'Wrong password', при отмене — 'Canceled'.*/

var ask = prompt('Enter login: ');
var ask2;
var log;
var pass;
if(ask =='admin'){
    log=ask;
    ask2 = prompt('Enter password: ');
    if(ask2 == 'passw0rd'){
        pass = ask2;
        alert('Welcome home!');
    }else {
        alert('Wrong password');
    }
}else if(ask==null){
    alert('Canceled');
}else {
    alert('Access denied');
}
