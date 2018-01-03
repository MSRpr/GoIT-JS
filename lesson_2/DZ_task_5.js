/*Перепишите if..else с использованием нескольких операторов '?':
var name = 'admin', text;
if (name == 'admin') {
    text = 'Hi';
} else if (name == 'manager') {
    text = 'Hello';
} else if (name == '') {
    text = 'No login';
} else {
    text = '';
}*/


var name = 'admin', text;
var res = (name == 'admin') ? console.log('Hi') : (name == 'manager') ? console.log('Hello') : (name == '') ? console.log('No login') : console.log('...');


