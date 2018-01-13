/*
Задание 2 (Проверка на СПАМ)
Напишите функцию checkSpam которая проверяет строку на содержание слов: spam, sex.
checkSpam('get new Sex videos'); // true
checkSpam('[SPAM] How to earn fast money?'); // true
checkSpam('New PSD template'); // false
 */

function checkSpam(str) {
    return (str.indexOf('spam') > 0 || str.indexOf('SPAM') > 0 || str.indexOf('Spam') > 0) ? console.log(true) :
        (str.indexOf('sex') > 0 || str.indexOf('SEX') > 0 || str.indexOf('Sex') > 0) ? console.log(true) : console.log(false);
}

checkSpam('[SPAM] How to earn fast money?');