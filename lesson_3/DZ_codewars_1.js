/*Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.*/

function even_or_odd(number) {
    return (number % 2 == 0) ? console.log(number + ' Even') : console.log(number + ' Odd');
}

even_or_odd(1);

/* //вариант стрелочной функции
const even_or_odd = n => (n % 2) ? 'Odd' : 'Even';*/