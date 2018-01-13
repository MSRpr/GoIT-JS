/*Исправьте предыдущую задачу FizzBuzz так, чтобы она выводила «FizzBuzz» для всех чисел, которые делятся и на3, и на 5.*/

alert('Задание 4 (FizzBuzz 2)');
for (var i = 1; i < 100; i++) {
    alert(i);
    if (i % 3 == 0||i % 5 == 0) {
        alert('FizzBuzz');
    }
}

/*for (var i = 1; i < 101; i++)
    console.log(i % 3 || i % 5 ? i % 5 ? i % 3 ? i : 'Fizz' : 'Buzz' : 'FizzBuzz');
    */