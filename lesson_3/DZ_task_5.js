
/*Напишите программу, создающую строку, содержащую решётку 8х8, в которой линии разделяются символами новой строки. На каждой позиции либо пробел, либо \#. В результате должна получиться шахматная доска.
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
# # # #
Когда справитесь, сделайте размер доски переменным, чтобы можно было создавать доски любого размера.*/

console.log('Задание 5 (Шахматная доска)')
var x = "";
for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
        if ((i + j) % 2 == 0) {
            x += "#";
        } else {
            x += " ";
        }
    }
    x += "\n";
}
console.log(x);