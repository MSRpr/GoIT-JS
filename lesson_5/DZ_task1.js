/* Задание 1 (Кто первым решил больше всех задач)
Напиште код который выведет сотрудника который выполнил больше всех задач.
Например:
var tasksCompleted = {
  'Anna': 29,
  'Serg': 35,
  'Elena': 1,
  'Anton': 99
};
 */
function checkTask(obj) {
    var max = 0;
    var winner = '';
    for (var key in obj) {
        if (max < obj[key]) {
            max = obj[key];
            winner = key;
        }
    }
    return winner;
}

var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99
};
console.log(checkTask(tasksCompleted));